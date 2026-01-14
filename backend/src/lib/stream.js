import {StreamChat} from 'stream-chat';
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    throw new Error("STREAM_API_KEY or STREAM_API_SECRE must be provided");
}
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);   



export const upsertStreamUser = async (userData) => {  // upsert means update and create the data if exists else insert
    try {
        await chatClient.upsertUser(userData);   // upsertUser takes an array of user objects
        console.log("Successfully upserted Stream user:", userData);                     
    } catch (error) {
        console.error("Error upserting Stream user:", error);
        throw error;
    }
};
export const deleteStreamUser = async (userId) => {  // upsert means update and create the data if exists else insert
    try {
        await chatClient.deleteUser(userId);   // deleteUser takes an array of user objects
        console.log("Successfully deleted Stream user:", userId);                     
    } catch (error) {
        console.error("Error deleting Stream user:", error);
        throw error;
    }
};