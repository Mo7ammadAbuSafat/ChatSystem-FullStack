import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Stack } from "@mui/material";
import axios from "axios";
import AuthContext from "../../Contexts/AuthProvider";
import AlertContext from "../../Contexts/AlertProvider";
import ButtonWithLoading from "../../Buttons/ButtonWithLoading";
import MyInputFile from "../../Inputs/MyInputFile";

const FormChangePhoto = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const { openAlert } = useContext(AlertContext);
  const authContext = useContext(AuthContext);

  const [file, setFile] = useState(null);
  const [imageReview, setImageReview] = useState(null);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setImageReview(URL.createObjectURL(event.target.files[0]));
  };
  console.log(file);

  const onSubmit = () => {
    if (authContext.user.image !== null) {
      onChangePhoto();
    } else {
      onAddPhoto();
    }
  };

  const onChangePhoto = async (e) => {
    if (file !== null) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      await axios
        .put(
          `https://localhost:7271/api/users/${authContext.user.id}/profile-image`,
          formData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `bearer ${authContext.token}`,
            },
          }
        )
        .then((response) => {
          openAlert("success", "success changed");
          authContext.refreshUser();
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
    }
    setIsLoading(false);
  };

  const onAddPhoto = async (e) => {
    if (file !== null) {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);
      await axios
        .post(
          `https://localhost:7271/api/users/${authContext.user.id}/profile-image`,
          formData,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `bearer ${authContext.token}`,
            },
          }
        )
        .then((response) => {
          openAlert("success", "success added");
          authContext.refreshUser();
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
    }
    setIsLoading(false);
  };

  const onDelete = async (e) => {
    if (authContext.user.image !== null) {
      setIsLoading2(true);
      const formData = new FormData();
      formData.append("image", file);
      await axios
        .delete(
          `https://localhost:7271/api/users/${authContext.user.id}/profile-image`,
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              Authorization: `bearer ${authContext.token}`,
            },
          }
        )
        .then((response) => {
          openAlert("success", "success deleted");
          authContext.refreshUser();
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
    }
    setIsLoading2(false);
  };
  return (
    <Stack spacing={3} alignItems={"center"} height={"330px"}>
      <img
        style={{ borderRadius: "50%", objectFit: "cover" }}
        width={"150px"}
        height={"150px"}
        alt=""
        src={
          imageReview !== null
            ? imageReview
            : authContext.user.image !== null &&
              authContext.user.image.imagePath !== null
            ? authContext.user.image.imagePath
            : "/Assets/defaultAvatar.png"
        }
      />
      <MyInputFile onChange={handleFileChange} />
      <Stack spacing={2} width={"100%"}>
        <ButtonWithLoading
          onClick={onDelete}
          isLoading={isLoading2}
          label={"Delete Photo"}
        />
        <ButtonWithLoading
          onClick={onSubmit}
          isLoading={isLoading}
          label={"Update"}
        />
      </Stack>
    </Stack>
  );
};

export default FormChangePhoto;
