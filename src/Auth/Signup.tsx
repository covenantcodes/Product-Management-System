import { useState } from "react";
import "./Login.css";
import "../Custom/Input/CustomInput.css";
import CustomButton from "../Custom/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
// import AddAPhotoIcon from "@mui/icons-material/AddAPhoto"; // Import MUI icon

const Signup = () => {
  const [isEye, setIsEye] = useState(true);
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  // const [image, setImage] = useState<File | null>(null); // Adjusted type
  // const [imagePreview, setImagePreview] = useState<string | null>(null); // Adjusted type
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleIconClick = () => {
    setIsEye((prevIsEye) => !prevIsEye);
  };

  const validateForm = () => {
    if (!email.trim() || !fullname.trim() || !password.trim()) {
      setError("All fields are required");
      return false;
    }

    return true;
  };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]; // Using optional chaining to avoid null error
  //   if (file) {
  //     setImage(file);

  //     // For previewing the image
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setImagePreview(reader.result as string);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleRegister = async () => {
    if (!validateForm()) return;

    try {
      const formData = new FormData();
      formData.append("name", fullname);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("role", "manager");
      formData.append(
        "image",
        "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=826&t=st=1710937478~exp=1710938078~hmac=03b16fcc4f16d9c5988be2e787fde22805ef686fbb88b44153fa4d5a85971483"
      );
      // if (image) formData.append("image", image);

      const response = await axios.post(
        "https://pmsgr10.000webhostapp.com/api/auth/register",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Registration successful:", response.data);

      // Assuming successful registration, redirect to login page
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Handle Axios errors
        console.error("Error registering user:", error.response?.data);
      } else {
        // Handle other types of errors
        console.error("Error registering user:", error);
      }
      // Display error message to the user
    }
  };

  return (
    <div>
      <div className="main-container">
        <div className="login-container">
          <div className="logo-container">
            <img src="../../img/logo.png" alt="" />
          </div>
          <p className="error-text">{error}</p>

          <div className="custom-input">
            <input
              type="text"
              placeholder="Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="custom-input">
            <input
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              onChange={(e) => setFullname(e.target.value)}
              value={fullname}
              required
            />
          </div>

          <div className="password-input-container custom-input">
            <input
              type={isEye ? "password" : "text"}
              placeholder="Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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

          {/* <div className="custom-input">
            <div className="image-picker-container">
              <label htmlFor="image-picker">
                <AddAPhotoIcon className="add-image-icon" />
              </label>
              <input
                id="image-picker"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100px", marginTop: "10px" }}
              />
            )}
          </div> */}

          <CustomButton
            border="none"
            color="white"
            padding="1rem"
            onClick={handleRegister}
            radius="5px"
            label="Register"
            bgcolor="var(--primary-color)"
            width="320px"
            fontFamily="var(--main-font)"
            fontSize="1rem"
            marginTop="1rem"
            cursor="pointer"
          />

          <div className="cta-register" onClick={() => navigate("/")}>
            Already have an account? <span>Login</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
