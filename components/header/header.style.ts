"use client";

import {Button, styled} from "@mui/material";

export const ButtonMenuDefault = styled(Button)(() => ({
  height: "50px",
  textWrap: "nowrap",
  fontFamily: 'Roboto',

}));

export const HeaderContainer = styled("header")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
