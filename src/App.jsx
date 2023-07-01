//Dependencies
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { UserProvider } from "./context/UserCentext";

//Main App
function App() {
  return (
    <div id="App">
      <Home />
    </div>
  );
}

//Export the App
export default App;
