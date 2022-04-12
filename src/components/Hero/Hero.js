import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
       Welcome To My Portfolio
      </SectionTitle>
      <SectionText>
      👋 Happy to share my knowledge with companies and developers.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;