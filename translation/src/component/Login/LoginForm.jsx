
import { set, useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext"
import { loginUser } from "../../api/user"
import { useEffect, useState } from "react"
import { storageSave } from "../../utils/storage"
import { STORAGE_USER_KEY } from "../../utils/storageKey"
import { useNavigate} from "react-router-dom"

const userConfig = {
    required: true,
    minLength: 4,
    maxLength: 15
}

const LoginForm = () => {

    
    // Hooks
    const { register, handleSubmit, formState: {errors} } = useForm()
    const {user, setUser } = useUser()
    const navigate = useNavigate()

    useEffect(()=>{
        if(user !== null) {
            navigate("profile")
        }

    },[user,navigate])



    // Local state
    const [apiError, setApiError] = useState(null);
    const [loading,setLoading] = useState(false)
     


    // Event handler
    const onSubmit = async ({username}) =>{
        setLoading(true)
        const [error, userResponse] = await loginUser(username);
        
        if(error !== null){
            setApiError(error)
        }
    
        if(userResponse !== null) {
            storageSave(STORAGE_USER_KEY,userResponse)
            setUser(userResponse)
        }
        
        setLoading(false)
    }

    const errorMessage = (() => {
        if(!errors.username){
            return null
        }

        if( errors.username.type === "required") return <span> Username is required </span>
        if(errors.username.type === "minLength") return <span> Username required min length 4</span>
        if(errors.username.type === "maxLength") return <span> Username max length is 15</span>

    })()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="username" {...register("username", userConfig)} />
                {errorMessage}
            </fieldset>
            <button type="submit" className="btn btn-primary" disabled={loading}>Login</button>

            {apiError && <p>Api error: {apiError}</p>}
            {loading && <p>Loading.....</p>}

        </form>
    )
}

export default LoginForm