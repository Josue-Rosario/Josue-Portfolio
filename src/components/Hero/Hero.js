import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
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
      <Button onClick={() => window.location = 'https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;