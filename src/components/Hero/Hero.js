import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection, Alink } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        My Personal Page
      </SectionTitle>
      <SectionText>
        I'm a Web Developer with more of 9 years of experience creating awesome webs with PHP, Laravel and Wordpress. I have a good proficiency of Front-end and I hope to be a Senior React Developer soon.
      </SectionText>
      <Alink href="https://marcosledezma.com/eng.pdf" target='_blank'>Download CV</Alink>
    </LeftSection>
  </Section>
);

export default Hero;