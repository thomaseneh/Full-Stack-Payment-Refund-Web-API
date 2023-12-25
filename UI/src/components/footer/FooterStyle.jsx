import NavLink from "react-bootstrap/esm/NavLink";
import styled from "styled-components";

export const FooterStyle = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px 0;
  text-align: center;
  width: 100%;
  margin-top: auto;
`;
export const Content = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%; /* Set the minimum height of the body to 100% of the viewport height */
  margin: 0;
`;

export const Container = styled.div`
  justify-content: space-between;
  margin-left: 80px;
  margin-right: 150px;
`;

export const FooterHeading = styled.p`
  font-weight: bold;
`;

export const FooterLinks = styled(NavLink)`
  text-decoration: underline;
`;

export const FollowUs = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const YouTube = styled.a`
  margin: 0px 10px;
  font-size: 18px;
  color: red;
  text-decoration: none;
`;

export const Grubhub = styled.a`
  margin: 0px 10px;
  font-size: 18px;
  color: white;
  text-decoration: none;
`;

export const Sociallinkedin = styled.a`
  margin: 0px 10px;
  font-size: 18px;
  text-decoration: none;
`;
export const CopyRight = styled.div`
  text-align: center;
`;
