import { Button } from "@mui/material";
import React from "react";

export default function CustomButton({ variant, onClick, txt, href, startIcon, endIcon, style }) {
  return (
    <Button variant={variant} onClick={onClick} startIcon={startIcon} endIcon={endIcon}>{txt}</Button>
  );
}
