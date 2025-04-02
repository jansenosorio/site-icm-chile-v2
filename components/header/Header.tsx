"use client";

import Image from "next/image";
import {ButtonMenuDefault, HeaderContainer} from "./header.style";
import logo from "@/public/logo-icm.svg";
import { Grid, Menu, MenuList } from "@mui/material";
import React from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderContainer>
      <Grid
        container
        size={12}
        spacing={2}
        justifyContent={"space-between"}
        alignItems="center"
        sx={{
          width: "100%",
          flexDirection: { xs: "column", md: "row" },
          paddingX: { xs: 2, md: 0 },
        }}
      >
        <Grid size={{ xs: 12, md: 6 }} alignItems={"center"}>
          <Image src={logo} alt="Logo Iglesia Cristiana Maranata" width={240} />
        </Grid>
        <Grid
          size={{ xs: 12, md: 6 }}
          display="flex"
          justifyContent="end"
          alignItems="center"
          gap={2}
        >
          <ButtonMenuDefault variant="text" color="primary">
            Quiénes Somos
          </ButtonMenuDefault>
          <ButtonMenuDefault variant="text" color="primary">
            Nuestra Doctrina
          </ButtonMenuDefault>
          <ButtonMenuDefault variant="text" color="primary">
            Dónde Estamos
          </ButtonMenuDefault>
          <div>
            <ButtonMenuDefault
              variant="contained"
              color="primary"
              onClick={handleClick}
            >
              Contáctenos
            </ButtonMenuDefault>

          </div>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
