import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import {
  WrapperDetails,
  WrapperImg,
  NonMemberPrice,
  BoxProduct,
  Container,
  ProductInfo,
  Wrapper,
  PriceInfo,
  ReturnBox,
  Price,
} from '../../styles/pages/Products';
import WineLogo from '../assets/black.svg';
import { Product } from '../../types/Products';
import { useCartContext } from '../../components/CartContext';
import Navbar from '../../components/Navbar';
import Arrow from '../../assets/Vector.png';
import Image from 'next/image';
import { ProductDisplay } from '../../components/ProductItem/styles';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`https://wine-back-test.herokuapp.com/products`);
  const data = await response.json();

  const item = data.items.find((item) => item.id === Number(params.id)) ?? null;

  return {
    props: {
      item,
    },
    revalidate: 60,
  };
};

export default function Home({ item }) {
  const { products, setProducts } = useCartContext();

  const addToCart = () => {
    setProducts([...products, item.id]);
  };

  const removeToCart = () => {
    setProducts(products.filter((id) => id !== item.id));
  };

  return (
    <>
      <Navbar />

      <Container>
        <Wrapper>
          <ReturnBox>
            <Link href="/">
              <button>
                <Image width={20} height={13} src={Arrow} />
                <span>Voltar</span>
              </button>
            </Link>
          </ReturnBox>
          <BoxProduct>
            <WrapperImg>
              <img src={item?.image} />
            </WrapperImg>
            <WrapperDetails>
              <h2>{item.name}</h2>
              <ProductInfo>
                <img src={item?.flag}></img>
                <span>{item.country}</span>
                <span>{item.type}</span>
                <span>{item.classification}</span>
                <span>{item.size}</span>
              </ProductInfo>
              <PriceInfo>
                <Price>
                  <span>R$</span>
                  {item.price}
                </Price>

                <NonMemberPrice>
                  Não sócio R${item.priceNonMember}/Un.
                </NonMemberPrice>
              </PriceInfo>

              <h3>Comentário do Sommelier</h3>
              <p>{item.sommelierComment}</p>
              <button onClick={addToCart}>Adicionar</button>
              <button onClick={removeToCart}>Remover</button>
            </WrapperDetails>
          </BoxProduct>
        </Wrapper>
      </Container>
    </>
  );
}
