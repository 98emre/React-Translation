import { set, useForm } from "react-hook-form";
import { useUser } from "../../context/UserContext";
import { loginUser } from "../../api/user";
import { useEffect, useState } from "react";
import { storageSave } from "../../utils/storage";
import { STORAGE_USER_KEY } from "../../utils/storageKey";
import { useNavigate } from "react-router-dom";
import { BsWifiOff } from 'react-icons/bs';


const userConfig = {
  required: true,
  minLength: 4,
  maxLength: 15,
};

const LoginForm = () => {

  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("translate");
    }
  }, [user, navigate]);

  // Local state
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Event handler
  const onSubmit = async ({ username }) => {
    setLoading(true);
    const [error, userResponse] = await loginUser(username);

    if (error !== null) {
      setApiError(error);
    }

    if (userResponse !== null) {
      storageSave(STORAGE_USER_KEY, userResponse);
      setUser(userResponse);
    }

    setLoading(false);
  };

  const errorMessage = (() => {
    if (!errors.username) {
      return null;
    }

    if (errors.username.type === "required")
      return <span> Username is required </span>;
    if (errors.username.type === "minLength")
      return <span> Username required min length 4</span>;
    if (errors.username.type === "maxLength")
      return <span> Username max length is 15</span>;
  })();

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="row mb-3 justify-content-center">
          <div className="col-6">
            <input type="text" className="form-control inputText" placeholder="What's your name?" {...register("username", userConfig)} />
            {<p className="text-danger">{errorMessage}</p>}
          </div>
        </div>

        <div className="row justify-content-center">
        <div className="d-grid gap-2 col-2 mx-auto">
            <button type="submit" className="btn btn-primary" disabled={loading}>
                Login
            </button>
          </div>
        </div>

        {apiError && (
          <div className="row justify-content-center">
            <p className="text-danger"> 
                Api error: {apiError} <h2><BsWifiOff /></h2>
            </p>
          </div>
        )}

        {loading && (
          <div className="row justify-content-center loadingText" >
            <h6>Loading..... <img src="Logo.png"  className= "rotateImage" alt="Icon" width={30} /></h6>
          </div>
        )}
      </form>
  );
};

export default LoginForm;



