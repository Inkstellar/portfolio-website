import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.98);
  padding: 1rem 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-color);
  background: url("https://mir-s3-cdn-cf.behance.net/user/230/5004b318593537.5e9b2db9d5840.gif")
    0 -5px/40px 40px no-repeat;
  padding-left: 50px;
`;
const FontLight = styled.span`
  font-weight: 300;
  color: var(--light-text-color);
`;
const MenuItems = styled.ul`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  a {
    color: var(--text-color);
    font-weight: 500;
    transition: var(--transition);

    &:hover {
      color: var(--accent-color);
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo to="/">
          INK<FontLight>STELLAR</FontLight>
        </Logo>
        <MenuItems>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/design-works">DesignWorks</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about-me">About Me</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/contact">Contact</Link>
          </MenuItem>
        </MenuItems>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
