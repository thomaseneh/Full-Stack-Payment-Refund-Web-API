import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import {
  FooterStyle,
  Content,
  Container,
  FooterHeading,
  FooterLinks,
  FollowUs,
  YouTube,
  Grubhub,
  Sociallinkedin,
  CopyRight,
} from "./FooterStyle";

export default function Footer() {
  return (
    <Content>
      <FooterStyle>
        <Container>
          <div className="row">
            <div className="col">
              <FooterHeading>Services</FooterHeading>
              <FooterLinks href="/underConstruction">Reimbursement</FooterLinks>
              <FooterLinks href="/underConstruction">
                Digital Marketing
              </FooterLinks>
              <FooterLinks href="/underConstruction">Advertising</FooterLinks>
            </div>
            <div className="col">
              <FooterHeading>About</FooterHeading>
              <FooterLinks href="/underConstruction">Companies</FooterLinks>
              <FooterLinks href="/underConstruction">Team</FooterLinks>
              <FooterLinks href="/underConstruction">Careers</FooterLinks>
            </div>
            <div className="col">
              <FooterHeading>TopRefunder</FooterHeading>
              <p>Address: 12345 East Coding Avenue, Seatle, WA 34501</p>
              <p>Tel: 012-345-6789</p>
              <p>Email: tomcoder8&#64;gmail.com</p>
            </div>
          </div>
        </Container>
        <FollowUs>
          <p>Follow Us</p>
          <i className="fa-brands fa-youtube"></i>
          <div>
            <Grubhub
              href="https://github.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </Grubhub>

            <Sociallinkedin
              href="https://www.linkedin.com/in/thomas-eneh-2a1317150/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </Sociallinkedin>
            <YouTube
              href="https://www.youtube.com/@tomcoder"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoYoutube />
            </YouTube>
          </div>
        </FollowUs>
        <CopyRight>
          <p>&copy; 2023 TopRefunder</p>
        </CopyRight>
      </FooterStyle>
    </Content>
  );
}
