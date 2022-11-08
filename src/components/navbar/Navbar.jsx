import { FaTimes, FaBars } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { Button } from '../../GlobalStyles'
import {
  Nav, 
  NavbarContainer, 
  LogoIcon, 
  LogoText, 
  NavIcon, 
  MobileIcon,
  NavMenu, 
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink, 
} from './Navbar.styles'

export const Navbar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  useEffect(() => {
    showButton();
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <Nav>
      <NavbarContainer>
        <NavIcon to='/' onClick={closeMobileMenu}>
          <LogoIcon />
            <LogoText>E</LogoText> COIN
        </NavIcon>
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={click}>
          <NavItem>
            <NavLinks to='/'>Market</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/coins'>Coins</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='/features'>Features</NavLinks>
        </NavItem>
        <NavItemBtn>
          {button ? (
            <NavBtnLink to='/sign-up'>
              <Button>SIGN UP</Button>
            </NavBtnLink>
          ) : (
            <NavBtnLink to='/sign-up'>
              <Button fontBig>SIGN UP</Button>
            </NavBtnLink>
          )}
        </NavItemBtn>
       </NavMenu>
      </NavbarContainer>
    </Nav>
  )
}
