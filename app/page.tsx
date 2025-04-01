import Header from "@/components/header/Header";
import HomePage from "@/components/pages/HomePage";
import { Container, Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Divider />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </>
  );
}
