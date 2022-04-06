import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section>
    <LeftSection>
      <SectionTitle main center>
       Welcome To
        Everybody
      </SectionTitle>
      <SectionText>
      👋 My name is Josue Rosario. I am a web developer trying to grow a career in the world of Tech. Happy to have uniques experiences on each website and apps that I'm building on. In my free time I enjoy to play Call of duty, amplify my knowledge doing research in search engines, youtube, etc. 
      And the last one no less important, have quality time with my family(👨‍👩‍👧).
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;