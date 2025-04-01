"use client";

import { Button, styled } from "@mui/material";

export const ButtonMenuDefault = styled(Button)(() => ({
  width: "auto",
  height: "50px",
  textWrap: "nowrap",
}));

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;\
  max-width: 1440px;
  margin: 0 auto;
`;
