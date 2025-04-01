import Image from "next/image";
import { ButtonMenuDefault, HeaderContainer } from "./header.style";
import logo from "@/public/logo-icm.svg";
import { Grid } from "@mui/material";

export default function Header() {
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
          <ButtonMenuDefault variant="outlined" color="primary">
            Menu
          </ButtonMenuDefault>
          <ButtonMenuDefault variant="outlined" color="primary">
            Menu
          </ButtonMenuDefault>
          <ButtonMenuDefault variant="outlined" color="primary">
            Menu
          </ButtonMenuDefault>
          <ButtonMenuDefault variant="outlined" color="primary">
            Menu
          </ButtonMenuDefault>
        </Grid>
      </Grid>
    </HeaderContainer>
  );
}
