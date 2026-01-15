import { chatClient } from "../lib/stream.js";

export async function getStreamingToken(req, res) {
    try {
        // Generate a streaming token for the authenticated user
        // use clerkId from req.user not (Mongodb _id) it sould match the id we should have in the stream dashboard.
      const token = chatClient.createToken(req.user.clerkId);
        res.status(200).json({
            token,
            userId: req.user._id,
            userName: req.user.name,
            userImage: req.user.image,
        });
    } catch (error) {
        console.error("Error generating streaming token:", error.message);
        res.status(500).json({ message: "Internal server error" });
    }
}