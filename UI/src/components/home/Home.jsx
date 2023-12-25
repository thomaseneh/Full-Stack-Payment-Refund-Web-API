import NavLink from "react-bootstrap/esm/NavLink";
import { WrapperDiv, Container, H1, Paragraph } from "./HomeStyle";

export default function Home() {
  return (
    <WrapperDiv>
      <Container>
        <H1>Request and get paid</H1>
        <Paragraph>
          Your favourite place to request a refund with easy
        </Paragraph>
        <button>
          <NavLink href="/login">Get Started</NavLink>
        </button>
      </Container>
    </WrapperDiv>
  );
}
