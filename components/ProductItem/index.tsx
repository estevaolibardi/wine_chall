import React, { useContext } from 'react';
import { Product } from '../../types/Products';
import {
  ButtonDetail,
  Buttons,
  CardWrapper,
  ItemTitle,
  ProductItems,
  ProductDisplay,
  DiscountBox,
  PriceBox,
  PriceInfo,
  PriceMember,
  MemberInfoPrice,
  MemberNonPrice,
  MemberTitle,
} from './styles';
import Link from 'next/link';

type Props = {
  items: Product;
};

export const ProductItem = ({ items }: Props) => {
  // const cart = useContext(CartContext)

  return (
    <ProductDisplay>
      <ProductItems>
        <CardWrapper>
          <img src={items.image} width="150" />
          <ItemTitle>{items.name}</ItemTitle>
          <PriceInfo>
            <PriceBox>{items.price}</PriceBox>
            <DiscountBox>{items.discount}% OFF</DiscountBox>
          </PriceInfo>
          <MemberInfoPrice>
            <MemberTitle>
              <span>SÓCIO WINE</span>
            </MemberTitle>
            <PriceMember>
              <span>R$</span>
              {items.priceMember}
            </PriceMember>
          </MemberInfoPrice>
          <MemberNonPrice>
            <span>NÃO SÓCIO</span>
            R${items.priceNonMember}
          </MemberNonPrice>
        </CardWrapper>
      </ProductItems>
      <Buttons>
        <Link href={`/products/${items.id}`}>
          <ButtonDetail>Adicionar</ButtonDetail>
        </Link>

        {/* <BsBagPlusFill
          className="plus_cart"
          onClick={() => {
            cart?.addProducts(items)
          }}
        /> */}
      </Buttons>
    </ProductDisplay>
  );
};
