import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Josue Portfolio
      </SectionTitle>
      <SectionText>
        One of the purpose of this portfolio is to help aspiring and stablished developers to take their development
        to the next level and build awesome ideas with Nextjs.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;