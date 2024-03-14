import { useState } from "react";
import "./Login.css";
import "../Custom/Input/CustomInput.css";
import CustomButton from "../Custom/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
// import loadingGif from "../../img/loader.gif";
const Signup = () => {
  const [isEye, setIsEye] = useState(true);
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsEye((prevIsEye) => !prevIsEye);
  };

  const onChangeFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fullname = e.target.value;
    setFullname(fullname);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleNavigateLogin = () => {
    navigate("/");
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
              placeholder="Email"
              autoComplete="off"
              onChange={onChangeEmail}
              value={email}
              required
            />
          </div>

          <div className="custom-input">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              onChange={onChangeFullName}
              value={fullname}
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

          <CustomButton
            border="none"
            color="white"
            padding="1rem"
            onClick={() => {
              console.log("Login");
            }}
            radius="5px"
            label="Register"
            bgcolor="var(--primary-color)"
            width="320px"
            fontFamily="var(--main-font)"
            fontSize="1rem"
            marginTop="1rem"
            cursor="pointer"
          />

          <div className="cta-register" onClick={handleNavigateLogin}>
            Don't have an account? <span>Login</span>{" "}
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

export default Signup;
