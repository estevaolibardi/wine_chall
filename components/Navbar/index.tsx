import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
  Logo,
  Counter,
} from '../Navbar/styles';
import WineLogo from '../../assets/black.svg';
import Busca from '../../assets/Busca.svg';
import Conta from '../../assets/conta.svg';
import Vazio from '../../assets/vazio.svg';
import Image from 'next/image';
import { useCartContext } from '../../components/CartContext';

type Props = {
  children: React.ReactNode;
};

const Navbar = () => {
  const { products } = useCartContext();

  return (
    <>
      <Nav>
        <Logo>
          <Image max-width={100} height={30} src={WineLogo} />
        </Logo>

        <NavMenu>
          <NavLink>Clube</NavLink>
          <NavLink>Loja</NavLink>
          <NavLink>Produtores</NavLink>
          <NavLink>Ofertas</NavLink>
          <NavLink>Eventos</NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink>
            <Image src={Busca} />
          </NavBtnLink>
          <NavBtnLink>
            <Image src={Conta} />
          </NavBtnLink>
          <NavBtnLink>
            <Image src={Vazio} />
          </NavBtnLink>
          <Counter>{products.length}</Counter>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
