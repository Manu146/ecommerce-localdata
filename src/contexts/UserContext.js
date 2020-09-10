import React, { createContext, useReducer } from "react";
import { userReducer } from "../reducers/UserReducer";

export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [items, dispatch] = useReducer(
    userReducer,
    [] /*, () => {
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  }*/
  ); //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  /* useEffect(() => {
    console.log(props.children);
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);*/
  return (
    <UserContext.Provider value={{ items, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
