"use client";

import { Button, styled } from "@mui/material";

export const ButtonMenuDefault = styled(Button)(() => ({
  width: "120px",
  height: "50px",
}));

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;\
  max-width: 1440px;
  margin: 0 auto;
`;
