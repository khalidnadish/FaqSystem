import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export const Nouser = () => {
  const navigate = useNavigate();
  const handleGuest = (event) => {
    navigate("/login");
  };
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        onClick={() => {
          handleGuest();
        }}
        sx={{ mt: 0.1, mb: 2 }}
      >
        Login As Gust
      </Button>
    </>
  );
};
