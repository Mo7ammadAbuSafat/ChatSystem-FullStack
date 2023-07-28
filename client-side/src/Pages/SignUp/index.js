import React, { useContext, useState } from "react";
import SignPageContainer from "../../Components/SignPagesContainer";
import MyTextField from "../../Components/Inputs/MyTextField";
import MyPasswordInputField from "../../Components/Inputs/MyPasswordInputField";
import ButtonWithLoading from "../../Components/Buttons/ButtonWithLoading";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AlertContext from "../../Components/Contexts/AlertProvider";
import styled from "@emotion/styled";
import axios from "axios";

const StyledTypography = styled(Typography)({
  color: "#03ac13c2",
  "&:hover": { cursor: "pointer" },
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const { openAlert } = useContext(AlertContext);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    username: " ",
    password: " ",
    confirmPassword: " ",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    const validationErrorsCopy = { ...validationErrors };

    if (name === "username") {
      const usernameRegex = /^[A-Za-z][A-Za-z0-9_]{4,17}$/;
      if (!value) {
        validationErrorsCopy[name] = "you must fill this field.";
      } else if (!usernameRegex.test(value)) {
        validationErrorsCopy[name] =
          "please use letters, numbers, or underscores. [5-18] char.";
      } else {
        validationErrorsCopy[name] = " ";
      }
    }

    if (name === "password") {
      if (!value) {
        validationErrorsCopy[name] = "you must fill this field.";
      } else if (value.length < 8) {
        validationErrorsCopy[name] =
          "password must be at least 8 characters long.";
      } else {
        validationErrorsCopy[name] = " ";
      }
    }

    setValidationErrors(validationErrorsCopy);
    setInputs({ ...inputs, [name]: value });
  };

  const CheckPasswordValidation = () => {
    if (
      inputs.password !== inputs.confirmPassword &&
      inputs.password !== "" &&
      inputs.confirmPassword !== ""
    ) {
      setValidationErrors({
        ...validationErrors,
        confirmPassword: "passwords not matched",
      });
      return false;
    }
    return true;
  };

  const isValidate =
    validationErrors.username === " " &&
    validationErrors.password === " " &&
    validationErrors.confirmPassword === " " &&
    inputs.username !== "" &&
    inputs.password !== "" &&
    inputs.confirmPassword !== "";

  const onSubmit = async (e) => {
    if (CheckPasswordValidation) {
      setIsLoading(true);
      await axios
        .post(
          "https://localhost:7271/api/registration",
          JSON.stringify(inputs),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          openAlert("success", "success registration");
          navigate("/sign-in");
        })
        .catch((error) => {
          if (error.response) {
            var errorMessage = error.response.data.error;
            if (errorMessage === "this username is already exist") {
              setValidationErrors({
                ...validationErrors,
                username: errorMessage,
              });
            }
          } else {
            openAlert("error", "there is problem");
          }
        });
    }
    setIsLoading(false);
  };

  return (
    <SignPageContainer>
      <MyTextField
        label="username"
        name="username"
        onChange={onChange}
        value={inputs.username}
        validation={validationErrors.username}
      />
      <MyPasswordInputField
        name={"password"}
        label={"password"}
        value={inputs.password}
        onChange={onChange}
        validation={validationErrors.password}
      />
      <MyPasswordInputField
        name={"confirmPassword"}
        label={"confirm password"}
        value={inputs.confirmPassword}
        onChange={onChange}
        validation={validationErrors.confirmPassword}
      />
      <ButtonWithLoading
        isLoading={isLoading}
        onClick={onSubmit}
        label="Sign Up"
        disabled={!isValidate}
      />
      <Typography color={"#555555"}>
        you already have account?{" "}
        <StyledTypography variant="span" onClick={() => navigate("/sign-in")}>
          sign in
        </StyledTypography>
      </Typography>
    </SignPageContainer>
  );
};

export default SignUpPage;
