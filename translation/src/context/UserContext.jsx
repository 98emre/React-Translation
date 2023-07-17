import { createContext, useContext, useState } from "react";
import { storageRead } from "../utils/storage";
import { STORAGE_USER_KEY } from "../utils/storageKey";


const UserContext = createContext(null);
export const useUser = () => useContext(UserContext);


const UserProvider = ({children}) =>{

    const[user, setUser] = useState(storageRead(STORAGE_USER_KEY))

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