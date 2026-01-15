import { streamClient, chatClient } from "../lib/stream.js";
import Session from "../models/Session.js";

export async function createSession(req, res) {
    try {
        const {problem , difficulty } = req.body;
        const userId = req.user.id;
        const clerkId = req.user.clerkId;
        // Logic to create a new session
        if (!problem || !difficulty) {
            return res.status(400).json({ message: "Problem and difficulty are required" });
        }
        // generate a unique callId for the session
        const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
        // Create session in the database
        const session = await SessionModel.create({ problem, difficulty, hostId: userId, clerkId, callId });
        // create stream video call using clerk API
        await streamClient.videocall.create( "default", callId).getOrCreate({
            data: {
                created_by_id: clerkId,
                custom :{problem, difficulty, sessionId: session._id.toString()}
            }
        });
        // chat messaging setup can be done here if needed
        const channel = chatClient.channel("messaging", callId);
        await channel.create({
            name: `${problem} Session`,
            created_by_id: clerkId,
            members: [clerkId],
        });

        await channel.create(); 
        res.status(201).json({ message: "Session created successfully", session });
    } catch (error) {
        console.error("Error creating session:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function getActiveSessions(res) {   // Fixed missing req parameter because we are not using it
    try {
        const session = await Session.find({status: "active"}).populate("hostId", "name email profileImage clerkId")
        .sort({ createdAt: -1 })
        limit (20);
        res.status(200).json({ activeSessions: session });
        
    } catch (error) {
        console.error("Error fetching active sessions:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function getMyRecentSessions(req, res) {
    try {
        const userId = req.user.id;
    // get sessions where user is either host or participant
    const session = await Session.find({ 
        status: "completed",
        $or: [{ hostId: userId }, { participants: userId }],
        })
     .populate("hostId", "name email profileImage clerkId")
     .sort({ updatedAt: -1 })
     .limit(20);
    res.status(200).json({ recentSessions: session });

    } catch (error) {
        console.error("Error fetching recent sessions:", error.message);
        res.status(500).json({ message: "Internal server error" });

        
    }
}
export async function getSessionById(req, res) {
    try {
        const {id} = req.params.id;
        const session = await Session.findById(id)
        .populate("hostId", "name email profileImage clerkId");
        
        res.status(200).json({ session });
    } catch (error) {
        console.error("Error fetching session by ID:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
export async function joinSession(req, res) {
    try {
        const {id} = req.params;
        const userId = req.user.id;
        const clerkId = req.user.clerkId;
        const session = await Session.findById(id);
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }   
        if (session.status !== "active") {
            return res.status(400).json({ message: "Cannot join a session that is not active" });
        }
        if (session.hostId.toString() === userId) {
            return res.status(400).json({ message: "Host cannot join their own session as participant" });
        }

        // session.participants.push(userId);
        // check if user is already a participant
        if (session.participants.includes(userId)) {
            return res.status(409).json({ message: "User already joined the session" });
        }
        // Add user to participants if not already present
        session.participants.push(userId);
        await session.save();
        const channel = chatClient.channel("messaging", session.callId);
        await channel.addMembers([clerkId]);
        res.status(200).json({ message: "Joined session successfully", session });
    } catch (error) {
        console.error("Error joining session:", error.message);
        res.status(500).json({ message: "Internal server error" });        
    }
}
export async function endSession(req, res) {
    try {
        const {id} = req.params;
        const userId = req.user.id;
        const session = await Session.findById(id);
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }
        // check if the user is the host
        if (session.hostId.toString() !== userId) {
            return res.status(403).json({ message: "Only the host can end the session" });
        }
        // check if session is already completed
        if (session.status === "completed") {
            return res.status(400).json({ message: "Session is already ended" });
        }
        
        // detele stream video call using clerk API
        await streamClient.videocall.delete("default", session.callId);
        await call.delete({hard: true});
        
        // delete stream chat channel
        const channel = chatClient.channel("messaging", session.callId);
        await channel.delete();
        
        session.status = "completed";
        await session.save();
        
        res.status(200).json({ message: "Session ended successfully", session });
    } catch (error) {
        console.error("Error ending session:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}
