//Dependencies
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Home from "./components/Home";
import Chat from "./components/Chat";
import { UserProvider } from "./context/UserCentext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Main App
function App() {
  return (
    <div id="App">
      <UserProvider>
        <SignIn/>
      </UserProvider>
    </div>
  );
}

//Export the App
export default App;
