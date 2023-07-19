import LoginForm from "../component/Login/LoginForm";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="container">
        <div className="loginForm">

          <div className="row mb-3 justify-content-center align-items-center">
            <div className="col">
              <h3 className="text-center loginBigText">Lost in Translation</h3>
            </div>
          </div>

          <div className="row mb-3 justify-content-center">
            <h5 className="col-8 text-center">
              <img className="loginFormImage shadowContainer" src="Logo.png" alt="Icon" width={150} /> <br />
            </h5>
          </div>

          <div className="row mb-3 justify-content-center">
            <div className="col">
              <h5 className="text-center loginSmallText">Get Started</h5>
            </div>
          </div>
         <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
