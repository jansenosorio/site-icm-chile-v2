import Header from "@/components/header/Header";
import HomePage from "@/components/pages/HomePage";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <HomePage />
      </Container>
    </>
  );
}
