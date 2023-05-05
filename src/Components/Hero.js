import React, { useEffect } from "react";
import Background from "../assets/MetaV _ Website.png";
import Image1 from "../assets/Group 48095504.png";
import {
  Button,
  Desc,
  Head,
  Head2,
  Heroimg,
  Herosection,
  Image,
  Imagediv,
  Item,
  Links,
  Navbar,
  Row,
  Textdiv,
} from "./Herostyles";
import VisibilitySensor from "react-visibility-sensor";
import NumberCounter from "number-counter";
import "../App.css";
import { useAnimation, useInView } from "framer-motion";
function Hero() {
  const initial = { opacity: 0, y: -20 };
  const animation = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });
  useEffect(() => {
    if (!inView) {
      console.log("sss");
      animation.start({
        opacity: 1,
        y: 1,
      });
    }
  }, [inView, animation]);

  return (
    <>
      <Herosection ref={ref}>
        <Heroimg src={Background} />
        <Navbar
          initial={initial}
          transition={{ delay: 0.3, duration: 0.5 }}
          animate={animation}
        >
          <Row mobile="s" margin="true">
            {" "}
            MetaV
          </Row>
          <Row>
            <Links color="Gradient">Home</Links>
            <Links>Resourse</Links>
            <Links>Pricing</Links>
            <Links>About </Links>
          </Row>
        </Navbar>
        <Row mobile="s">
          <Textdiv>
            <Head
              initial={initial}
              transition={{ delay: 0.6, duration: 0.5 }}
              animate={animation}
            >
              Explore the future of<br></br>
              <Row mobile="s">
                the<Head color="red">Meatverse</Head>{" "}
              </Row>
            </Head>
            <Head2
              initial={initial}
              transition={{ delay: 0.9, duration: 0.5 }}
              animate={animation}
            >
              Let's explore and create your experience with metaverse.
            </Head2>
            <Row
              initial={initial}
              transition={{ delay: 1.2, duration: 0.5 }}
              animate={animation}
            >
              <Button color="s">GET STARTED</Button>
              <Button>EXPLORE NOW</Button>
            </Row>
            <Row>
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                {({ isVisible }) => (
                  <Item>
                    {isVisible ? (
                      <NumberCounter
                        end={29}
                        delay={2.5}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix="K+"
                      />
                    ) : null}{" "}
                    <Desc> Artworks</Desc>
                  </Item>
                )}
              </VisibilitySensor>{" "}
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                {({ isVisible }) => (
                  <Item>
                    {isVisible ? (
                      <NumberCounter
                        end={18}
                        delay={2.5}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix="K+"
                      />
                    ) : null}{" "}
                    <Desc> Artists</Desc>
                  </Item>
                )}
              </VisibilitySensor>{" "}
              <VisibilitySensor partialVisibility offset={{ bottom: 10 }}>
                {({ isVisible }) => (
                  <Item>
                    {isVisible ? (
                      <NumberCounter
                        end={25}
                        delay={2.5}
                        className="increment"
                        // preFix="Up revenue:"
                        postFix="K+"
                      />
                    ) : null}{" "}
                    <Desc> Autcion</Desc>
                  </Item>
                )}
              </VisibilitySensor>
            </Row>
          </Textdiv>
          <Imagediv
            initial={initial}
            transition={{ delay: 1.2, duration: 0.5 }}
            animate={animation}
          >
            <Image src={Image1}></Image>
          </Imagediv>
        </Row>
      </Herosection>
    </>
  );
}

export default Hero;
