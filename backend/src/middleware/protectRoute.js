import {  requireAuth } from '@clerk/express';
import User from '../models/User.js';

export const protectRoute = [
    requireAuth(), // It ensures that the user is authenticated by default 
    // requireAuth({ signInUrl: '/sign-in' }),  we can protect this route by redirecting to sign-in page if not authenticated
    async (req, res, next) => {
        try {
            const clerkId = req.auth().userId;

            if (!clerkId)
                return res.status(401).json({ message: 'Unauthorized: User not found' });
            const user = await User.findOne({ clerkId });
            if (!user)
                return res.status(404).json({ message: 'Unauthorized: User not found in database' });
            // Find user in your database using clerkId
            req.user = user; // Attach user to request object
            next();
        } catch (error) {
            console.error("Error in protectRoute middleware:", error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
];