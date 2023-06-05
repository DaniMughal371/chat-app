//Dependencies
import React, { useState, useContext } from "react";
import {
  database,
  equalTo,
  orderByChild,
  query,
  ref,
  get,
} from "../firebase/Firebase";
import UserContext from "../context/UserCentext";
import bcrypt from "bcryptjs";

//Render SignUp Page
const SignIn = () => {
  //Globals
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext);

  //Function to handle the click on SignIn button
  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      //Set database reference
      const userRef = ref(database, "users");

      //Check if the user exist
      const queryRef = query(userRef, orderByChild("email"), equalTo(email));

      //Execute the query
      get(queryRef).then((snapshot) => {
        if (snapshot?.exists()) {
          //Get user data
          const userData = Object.values(snapshot.val())[0];

          //Compare the password
          bcrypt
            .compare(password, userData.password)
            .then((matched) => {
              if (matched) {
                setError("Logged In!");
                setUser(userData);
              } else {
                setError("Wrong User/Password Combination!");
              }
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          setError("User Does'nt Exist!");
        }
      });
    } catch (error) {
      setEmail("Login Failed!");
      console.log(error);
    }
  };

  //Render the SignUp Page
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Every Chat</span>
        <span className="title">Sign Up</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="passowrd" placeholder="password" />
          <input type="password" placeholder="confirm password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Choose an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

//Export the SignUp Component
export default SignIn;
