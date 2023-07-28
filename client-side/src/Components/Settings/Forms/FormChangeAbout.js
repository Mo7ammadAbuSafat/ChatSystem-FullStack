import React, { useContext, useState } from "react";
import AlertContext from "../../Contexts/AlertProvider";
import AuthContext from "../../Contexts/AuthProvider";
import { Stack } from "@mui/material";
import MyTextField from "../../Inputs/MyTextField";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import axios from "axios";

const FormChangeAbout = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { openAlert } = useContext(AlertContext);
  const { user, token, refreshUser } = useContext(AuthContext);
  const [about, setAbout] = useState(user.about ? user.about : "");
  const handleAboutChange = (value) => setAbout(value);

  const onSubmit = async (e) => {
    setIsLoading(true);
    await axios
      .put(
        `https://localhost:7271/api/users/${user.id}/about?newAbout=${about}`,
        {},
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((response) => {
        openAlert("success", "success changed");
        refreshUser();
      })
      .catch((error) => {
        console.log(error);
        if (error.response) {
          var errorMessage = error.response.data.error;
          alert("Error: ", errorMessage);
        } else {
          alert("Error: ", error.message);
        }
      });
    setIsLoading(false);
  };

  return (
    <Stack spacing={2} height={"330px"}>
      <MyTextField disabled value={user.username} />
      <ReactQuill
        value={about}
        onChange={handleAboutChange}
        style={{
          width: "100%",
          height: "150px",
          minHeight: "150px",
          marginBottom: "50px",
        }}
      />
      <ButtonWithLoading
        onClick={onSubmit}
        isLoading={isLoading}
        label={"Update"}
      />
    </Stack>
  );
};

export default FormChangeAbout;
