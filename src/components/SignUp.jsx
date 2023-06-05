//Dependencies
import React, { useEffect, useState } from "react";
import {
  database,
  ref,
  set,
  orderByChild,
  get,
  equalTo,
  query,
  push,
} from "../firebase/Firebase";
import bcrypt from "bcryptjs";
import env from "../env.json";
import Add from "../img/addAvatar.png";

//Render SignUp Page
const SignUp = () => {
  //Globals
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [validMatch, setValidMatch] = useState(false);
  const [error, setError] = useState("");

  //Match The Password
  useEffect(() => {
    const match = password === matchPassword;
    setValidMatch(match);
  }, [password, matchPassword]);

  //Function to handle the click on SignUp button
  const handleSignUp = async (e) => {
    //Prevent Default Values
    e.preventDefault();

    //User Payload
    const user = {
      name: name,
      email: email.toLowerCase(),
      password: password,
    };

    try {
      //Set Collection reference to users
      const userRef = ref(database, "users");

      //Check if the user already exist
      const queryRef = query(
        userRef,
        orderByChild("email"),
        equalTo(user.email)
      );

      //Execute the query
      get(queryRef).then((snapshot) => {
        if (snapshot.exists()) {
          setError("User Already Exist!");
        } else {
          //Create new user ID
          const newUserRef = push(userRef);

          //Hash the password
          bcrypt
            .hash(user.password, env.encryption.saltRounds)
            .then((hashedPassword) => {
              if (hashedPassword) {
                //Update the user password
                user.password = hashedPassword;

                //Update user in DB
                set(newUserRef, user)
                  .then(() => {
                    setError("User Created! Sign In Please!");
                  })
                  .catch((error) => {
                    setError("Error Creating User!");
                    console.log(error);
                  });
              } else {
                setError("Error Hashing Password!");
              }
            })
            .catch((error) => {
              setError("Error Hashing Password!");
              console.log(error);
            });
        }
      });
    } catch (error) {
      setError("Sign Up Failed!");
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
          <input type="file" id="file" style={{display:"none"}}/>
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
export default SignUp;
