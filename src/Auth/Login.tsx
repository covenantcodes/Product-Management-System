import { useState } from "react";
import "./Login.css";
import "../Custom/Input/CustomInput.css";
import CustomButton from "../Custom/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import loadingGif from "../../img/loader.gif";
const Login = () => {
  const [isEye, setIsEye] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsEye((prevIsEye) => !prevIsEye);
  };

  const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = () => {
    navigate("/dashboard")
  }

  const handleNavigateRegister = () => {
    navigate("/Signup");
  };

  return (
    <div>
      <div className="main-container">
        <div className="login-container">
          <div className="logo-container">
            <img src="../../img/logo.png" alt="" />
          </div>
          <p className="error-text"></p>
          <div className="custom-input">
            <input
              type="text"
              placeholder="Username"
              autoComplete="off"
              onChange={onChangeUsername}
              value={username}
              required
            />
          </div>

          <div className="password-input-container custom-input">
            <input
              type={isEye ? "password" : "text"}
              placeholder="Password"
              id="password"
              onChange={onChangePassword}
              value={password}
              required
            />
            <div className="eyeIcon-container" onClick={handleIconClick}>
              {isEye ? (
                <FontAwesomeIcon className="eyeSlash" icon={faEyeSlash} />
              ) : (
                <FontAwesomeIcon className="eyeIcon" icon={faEye} />
              )}
            </div>
          </div>

          <div className="forgot-password-container">forgot password?</div>

          <CustomButton
            border="none"
            color="white"
            padding="1rem"
            onClick={handleLogin}
            radius="5px"
            label="Login"
            bgcolor="var(--primary-color)"
            width="320px"
            fontFamily="var(--main-font)"
            fontSize="1rem"
            marginTop="1rem"
            cursor="pointer"
          />

          <div className="cta-register" onClick={handleNavigateRegister}>
            Don't have an account? <span>Register</span>{" "}
          </div>
        </div>

        {/* Loading Modal */}
        {/* {isLoading && (
        <div className="loading-modal">
          <div className="loading-spinner"></div>
          <img src={loadingGif} alt="Loading...." />
        </div>
      )} */}
      </div>
    </div>
  );
};

export default Login;
