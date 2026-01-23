import {StreamChat} from 'stream-chat';
import {StreamClient} from "@stream-io/node-sdk";
import { ENV } from './env.js';

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
    throw new Error("STREAM_API_KEY or STREAM_API_SECRET must be provided");
}

export const streamClient = new StreamClient(apiKey, apiSecret);  // This will be used on server side for video calls.
export const chatClient = StreamChat.getInstance(apiKey, apiSecret);    // This will be used on server side for chat functionalities. 



export const upsertStreamUser = async (userData) => {  // upsert means update and create the data if exists else insert
    try {
        await chatClient.upsertUser(userData);   // upsertUser takes an array of user objects
        console.log("Successfully upserted Stream user:", userData);                     
    } catch (error) {
        console.error("Error upserting Stream user:", error);
    }
};
export const deleteStreamUser = async (userId) => {  // upsert means update and create the data if exists else insert
    try {
        await chatClient.deleteUser(userId);   // deleteUser takes an array of user objects
        console.log("Successfully deleted Stream user:", userId);                     
    } catch (error) {
        console.error("Error deleting Stream user:", error);
    }
};