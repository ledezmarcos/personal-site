import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+595975625154'>+595 975625154</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:contacto@marcosledezma.com'>contacto@marcosledezma.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>

        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>

        <SocialContainer>
        <SocialIcons href='https://github.com/ledezmarcos'>
          <AiFillGithub size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.linkedin.com/in/marcosledezmacuevas/'>
          <AiFillLinkedin size='3rem' />
        </SocialIcons>
        <SocialIcons href='https://www.instagram.com/ledezmarcos/'>
          <AiFillInstagram size='3rem' />
        </SocialIcons>
        </SocialContainer>

      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
