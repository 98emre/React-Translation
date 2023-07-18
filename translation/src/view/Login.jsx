import LoginForm from "../component/Login/LoginForm";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginForm">
        <div className="container">
          <div className="row mb-3 justify-content-center align-items-center">
            <div className="col-auto"></div>
            <div className="col">
              <h3 className="text-center loginBigText animatedText">Lost in Translation</h3>
            </div>
          </div>

          <div className="row mb-3 justify-content-center">
            <h5 className="col-3 text-center">
              <img src="Logo.png" alt="Icon" width={150} /> <br />
            </h5>
          </div>

          <div className="row mb-3 justify-content-center">
            <h5 className="col-3 text-center loginSmallText animatedText">Get Started</h5>
          </div>

          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
