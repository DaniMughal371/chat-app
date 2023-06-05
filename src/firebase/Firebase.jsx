// Dependencies
import * as firebase from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  orderByChild,
  get,
  equalTo,
  query,
  push,
} from "firebase/database";
import env from "../env.json";

//Initialize Firebase
const app = firebase.initializeApp(env.firbaseConfig);
const database = getDatabase(app);

//Export
export { ref, set, orderByChild, get, database, equalTo, query, push};
