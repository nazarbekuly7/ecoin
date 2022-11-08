import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Button } from '../../GlobalStyles'
import { NavIcon, LogoText, LogoIcon } from '../navbar/Navbar.styles'
import { 
    FooterContainer, 
    FooterRow, 
    FooterText, 
    Form, 
    FormInput, 
    FooterLinksItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialIcons, 
    SocialIconLink,
     } 
from './Footer.styles'

export const Footer = () => {
  return (
    <FooterContainer>
        <FooterRow>
            <FooterLinksItems>
                <FooterLinkTitle fontBig upperCase>Newsletter</FooterLinkTitle>
                <FooterText>
                    Join our exclusive membership to receive the latest news and trends
                </FooterText>
                <FooterText opacity>You can unsubscribe at any time.</FooterText>
                <Form>
                    <FormInput 
                        name='email'
                        type='email'
                        placeholder='Your Email'
                    />
                    <Button big fontBig>Subscribe</Button>
                </Form>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle upperCase>Company</FooterLinkTitle>
                <FooterLink to='/'>About</FooterLink>
                <FooterLink to='/'>Investors</FooterLink>
                <FooterLink to='/'>Contact Us</FooterLink>
                <FooterLink to='/'>Policy</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle upperCase>Resources</FooterLinkTitle>
                <FooterLink to='/'>Fees</FooterLink>
                <FooterLink to='/'>API</FooterLink>
                <FooterLink to='/'>Careers</FooterLink>
                <FooterLink to='/'>VIP Program</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle upperCase>Support</FooterLinkTitle>
                <FooterLink to='/'>Announcements</FooterLink>
                <FooterLink to='/'>Help center</FooterLink>
                <FooterLink to='/'>Support Tickets</FooterLink>
                <FooterLink to='/'>Laveraged Tokens</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
                <FooterLinkTitle>
                    <NavIcon to='/'>
                        <LogoIcon />
                        <LogoText>E</LogoText> COIN
                    </NavIcon>
                </FooterLinkTitle>
                <FooterText>
                    ECOIN provides a fundamental analysis of the crypto market. In addition to tracking price, volume and market.
                </FooterText>
                <SocialIcons>
                    <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                    </SocialIconLink>
                </SocialIcons>
            </FooterLinksItems>
        </FooterRow>
    </FooterContainer>
  )
}
