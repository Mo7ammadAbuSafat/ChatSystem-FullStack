import { Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import MyPasswordInputField from "../../Inputs/MyPasswordInputField";
import AlertContext from "../../Contexts/AlertProvider";
import AuthContext from "../../Contexts/AuthProvider";
import axios from "axios";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";

const FormChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { openAlert } = useContext(AlertContext);
  const { user, token } = useContext(AuthContext);

  const [inputs, setInputs] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [validationErrors, setValidationErrors] = useState({
    oldPassword: " ",
    newPassword: " ",
    confirmNewPassword: " ",
  });

  const CheckValidation = () => {
    return (
      validationErrors.oldPassword === " " &&
      validationErrors.newPassword === " " &&
      validationErrors.confirmNewPassword === " " &&
      inputs.oldPassword !== "" &&
      inputs.newPassword !== "" &&
      inputs.confirmNewPassword !== ""
    );
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    const validationErrorsCopy = { ...validationErrors };

    if (!value) {
      validationErrorsCopy[name] = "you must fill this field.";
    } else {
      if (name === "oldPassword") {
        validationErrorsCopy[name] = " ";
      } else if (name === "newPassword") {
        if (value.length < 8) {
          validationErrorsCopy[name] =
            "password must be at least 8 characters long.";
        } else {
          validationErrorsCopy[name] = " ";
        }
      } else if (name === "newPassword") {
        if (value !== inputs.newPassword) {
          validationErrorsCopy[name] = "two passwords doesn't match.";
        } else {
          validationErrorsCopy[name] = " ";
        }
      }
    }
    setValidationErrors(validationErrorsCopy);
    setInputs({ ...inputs, [name]: value });
  };

  const onSubmit = async () => {
    if (CheckValidation()) {
      setIsLoading(true);
      await axios
        .put(
          `https://localhost:7271/api/users/${user.id}/change-password`,
          JSON.stringify(inputs),
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `bearer ${token}`,
            },
          }
        )
        .then((response) => {
          setInputs({
            oldPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          });
          openAlert("success", "success changed");
        })
        .catch((error) => {
          if (error.response) {
            var errorMessage = error.response.data.error;
            if (errorMessage === "password is not correct") {
              setValidationErrors({
                ...validationErrors,
                oldPassword: errorMessage,
              });
            } else {
              alert("Error: ", errorMessage);
            }
          } else {
            alert("Error:1 ", error.message);
          }
        });
    }
    setIsLoading(false);
  };

  return (
    <Stack spacing={2}>
      <MyPasswordInputField
        name={"oldPassword"}
        label={"Old Password"}
        value={inputs.oldPassword}
        onChange={onChange}
        validation={validationErrors.oldPassword}
      />
      <MyPasswordInputField
        name={"newPassword"}
        label={"New Password"}
        value={inputs.newPassword}
        onChange={onChange}
        validation={validationErrors.newPassword}
      />
      <MyPasswordInputField
        name={"confirmNewPassword"}
        label={"Confirm New Password"}
        value={inputs.confirmNewPassword}
        onChange={onChange}
        validation={validationErrors.confirmNewPassword}
      />
      <ButtonWithLoading
        onClick={onSubmit}
        isLoading={isLoading}
        label={"Change Password"}
      />
    </Stack>
  );
};

export default FormChangePassword;
