import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignOutButton
} from "@clerk/clerk-react";
import { toast } from "react-hot-toast";
import { useEffect , useState } from "react";

function HomePage() {
  return (
    
    <div style={{ padding: "20px" }}>
      
      <h1>Welcome to Interview Coders!</h1>


      {/* Toast Button */}
      <button
        className="btn btn-secondary"
        onClick={() => toast.success("This is a Success Toast")}
      >
        Click Me
      </button>

      {/* Signed Out State */}
      <SignedOut>
        <SignInButton mode="modal">
          <button>Login</button>
        </SignInButton>
      </SignedOut>

      {/* Signed In State */}
      <SignedIn>
        <UserButton />
        <SignOutButton>
          <button>Logout</button>
        </SignOutButton>
      </SignedIn>

    </div>
  );
}

export default HomePage;
