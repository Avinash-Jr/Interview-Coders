import {inngest} from "inngest";
import { connectDB } from "./db.js";
import {User } from "../models/User.js"; 
import { upsertStreamUser } from "./stream.js";

export const inngest = new Inngest({ id: "Interview Coders" });  //It just allows us to communicate/initializes the inngest with a name

const syncUser = inngest.createFunction(
  { name: "Sync User to DB" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();
    const {id, email_addresses, first_name, last_name,image_url} = event.data;
    const newUser = new User({
        clerkId: id,
        name: `${first_name} ${last_name || ""}`,
        email: email_addresses[0]?.email_address,
        profileImage: image_url,
      });
    } 
  );


  await User.create(newUser);
  await upsertStreamUser({
    id: newUser.clerkId.toString(),
    name: newUser.name,
    email: newUser.email,
    image: newUser.profileImage,
  });

  
const deleteUserFromDB = inngest.createFunction(
  { name: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const {id} = event.data;
    
      await User.deleteOne({ clerkId: id });

      await deleteStreamUser(id.toString());
    } 
);

export const functions = [syncUser, deleteUserFromDB];