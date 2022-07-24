import React from "react";
import { SectionText } from "../../styles/GlobalComponents";
import { LeftSection, SectionTitle, Section } from "./HeroStyles";

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle center>Welcome to my portfolio</SectionTitle>
      <SectionText>
        <span>Enjoy</span> my journey as a web developer below
        <span aria-label="a rocket blasting off" role="img">
          🚀.
        </span>
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;
