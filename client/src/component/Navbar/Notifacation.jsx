import React from "react";
import { FaBell } from "react-icons/fa";
import { StyledBadge } from "./Navbar";

export function Notifacation({ underWork }) {
  return (
    <StyledBadge badgeContent={4} color="primary">
      <FaBell size={30} color={"red"} />
    </StyledBadge>
  );
}
