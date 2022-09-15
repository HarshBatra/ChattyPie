import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

const AuthContext = React.createContext(); //creating react context

export const useAuth = () => useContext(AuthContext); //a useAuth function that we can use later on to grab that context

export const AuthProvider = ({ children }) => {
  //will use this AuthProvider in index.js //have to pass children when AuthProvider is used
  const [loading, setLoading] = useState(true); //setting the loading and user states
  const [user, setUser] = useState(null); //initially, user is set to null
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      //grabbing the user data from the firebase authentication
      setUser(user); //setting user data to state
      setLoading(false); //setting loading to state
      if (user) history.push("/chats"); //using react-router-dom to push our application to /chats //only if user is authenticated
    });
  }, [user, history]);

  const value = { user };

  return (
    //returning the AuthContext.provider with the user data as value if loading is set to false and children are being passed from AuthProvider
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
