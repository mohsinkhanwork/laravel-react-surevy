import { createContext } from "react";
import { useContext, useState } from "react";

const StateContext = createContext({
    currentUser: {},
    setCurrentUser: () => {},
    userToken: null,
    setUserToken: () => {}
});

export const ContextProvider = ({ children }) => {
const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: "John Doe",
    email: "mkhan9658@gmail.com",
    role: "admin"
});
const [userToken, setUserToken] = useState(null);
    return (
        <StateContext.Provider value={{
            currentUser,
            setCurrentUser,
            userToken,
            setUserToken
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const userStateContext = () => useContext(StateContext);