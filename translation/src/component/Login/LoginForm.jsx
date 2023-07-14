
import { useForm } from "react-hook-form"
import { useUser } from "../../context/UserContext"

const userConfig = {
    required: true,
    minLength: 4
}

const LoginForm = () => {
 
    const { register, handleSubmit, formState: {errors} } = useForm()
    const {user, setUser } = useUser()

    const onSubmit = (data) =>{
        console.log(data)
    }

    const errorMessage = (() => {
        if(!errors.username){
            return null
        }

        if( errors.username.type === "required") return <span> Username is required </span>

        if(errors.username.type === "minLength") return <span> Username required min length 4</span>
    })()

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
                <label htmlFor="username">Username: </label>
                <input type="text" placeholder="username" {...register("username",userConfig)} />
                {errorMessage}
            </fieldset>
            <button>Login</button>

        </form>
    )
}

export default LoginForm