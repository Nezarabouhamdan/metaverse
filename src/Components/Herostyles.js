import { motion } from "framer-motion";
import styled from "styled-components";
export const Herosection = styled.div`
  height: 100vh;
  background-position: center;
  background-size: cover;
  display: flex;
  object-fit: cover;
  color: white;
  flex-direction: column;
  justify-content: left;
  align-content: left;
  align-items: left;
  @media screen and (max-width: 968px) {
    height: 100%;
  }
`;

export const Heroimg = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: -1;
  @media screen and (max-width: 968px) {
    width: 100vh;
    height: 200vh;
  }
`;
export const Navbar = styled(motion.div)`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  font-family: "Orbitron SemiBold";

  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 968px) {
    width: 100vh;
  }
`;
export const Row = styled(motion.div)`
  margin-left: ${({ margin }) => (margin ? "20px" : "0")};

  display: flex;
  flex-direction: row;
  @media screen and (max-width: 968px) {
    justify-content: ${({ mobile }) => (mobile ? "center" : "space-evenly")};

    flex-direction: ${({ mobile }) => (mobile ? "column-reverse" : "row")};
    width: 99vh;
  }
`;
export const Links = styled(motion.h3)`
  margin: auto 20px;
  font-size: 18px;
  cursor: pointer;
  font-family: "Orbitron SemiBold";

  background: ${({ color }) =>
    color ? "linear-gradient(to right,#F86CF8, #64CEF5);" : "white"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Textdiv = styled.div`
height:60%;
width 47%;
diplay:flex;
margin:auto;
flex-direction:column;
@media screen and (max-width: 968px) {

    margin-top: -125px;
 
  width 100%;
}
`;
export const Head = styled(motion.div)`
  font-size: 50px;
  background: ${({ color }) =>
    color ? "linear-gradient(to right,#F86CF8, #64CEF5);" : "white"};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Orbitron SemiBold";
  font-weight: 700;

  margin-left: ${({ color }) => (color ? "-100px" : "0")};
`;
export const Head2 = styled(motion.div)`
  margin-top: 5px;
  font-size: 15px;
  @media screen and (max-width: 968px) {
    font-size: 15px;
    margin-top: 25px;
    margin-left: 150px;
  }
`;
export const Button = styled(motion.div)`
  height: 50px;
  width: 160px;
  display: flex;
  flex-direcation: row;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 25px;
  margin-left: 10px;
  border-radius: 8px;
  font-family: "Orbitron SemiBold";
  @media screen and (max-width: 968px) {
    margin-top: 50px;

    height: 80px;
    width: 250px;
  }
  background: ${({ color }) =>
    color ? "linear-gradient(to right,#D10ED1, #10A3DA);" : "none"};

  border: 2px solid ${({ color }) => (color ? "none" : "  #10a3da;")};
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:before {
    background: ${({ color }) => (color ? "#fff" : "#fff")};
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    width: 102%;
    height: 0%;
  }
  &:hover:before {
    height: 200%;
  }
  &:hover {
    z-index: 1;

    color: ${({ color }) => (color ? "black" : "black")};
  }
`;
export const Imagediv = styled(motion.div)`
height:100%;
width 40%;`;
export const Image = styled.img`
margin-top:15%;
height:80%;
width 70%;
@media screen and (max-width: 968px) {
  width 100vh;
  height:100vh;
}`;
export const Item = styled.div`
  width: 10vw;
  z-index: 1;
  height: 32vh;
  display: flex;
  flex-direction: Column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 968px) {
    height: 30vh;
    margin-top: 25px;
  }
`;

export const Desc = styled.h2`
  font-size: 15px;
  color: white;
  font-family: "Orbitron SemiBold";

  @media screen and (max-width: 968px) {
    font-size: 15px;
  }
`;
