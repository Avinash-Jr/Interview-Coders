import './App.css'
import { SignedIn, SignedOut, SignInButton, SignOutButton } from '@clerk/clerk-react'

function App() {

  return (
    <>
    <h1>Welcome to Interview Coders!</h1>
    <p>This is a full-stack application using React, Vite, Express, and MongoDB.</p>
    <p>Explore the features and enjoy coding!</p>

    <SignedOut >
    <SignInButton mode="modal">
      <button className="login-button">Login</button>
      </SignInButton>
    </SignedOut>
    
    <SignedIn >
    <SignInButton mode="modal"/>
    </SignedIn>
    
    </>
  )
}

export default App
