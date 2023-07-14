import { createContext, useContext, useState } from "react";


const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);


const UserProvider = ({children}) =>{

    const[user, setUser] = useState(null)

    const state = {
        user,setUser
    }

    return(
        <UserContext.Provider value={state}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider