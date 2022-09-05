import styled from 'styled-components';

// export const Wrapper = styled.div`
//   max-width: 1200px;
// `

export const Nav = styled.nav`
  background: #ffff;
  height: 80px;
  display: flex;
  align-items: center;
  padding: 0.5rem calc((100vw - 1103px) / 2);
  z-index: 10;
  /* Third Nav */
  justify-content: flex-start;
`;

export const NavLink = styled.div`
  color: #555555;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #15cdfc;
  }
`;

export const Logo = styled.div`
  display: flex;
  height: 50px;
  width: 250px;
`;

export const Counter = styled.div`
  color: #4fbfa5;
  position: absolute;
  background-color: #ffffff;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  display: flex;
  top: 58%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 9px;
  margin-right: 227px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */

  white-space: nowrap;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  /* Third Nav */
  justify-content: flex-end;
  width: 300px;
  gap: 20px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled.div`
  border-radius: 4px;
  color: #fff;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
