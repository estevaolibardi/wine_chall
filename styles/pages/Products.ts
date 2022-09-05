import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const WrapperImg = styled.div`
  display: flex;
  width: 640px;
  align-items: center;
  height: 580px;
  flex-direction: column;
  margin-right: 30px;

  img {
    width: 381px;
    height: 579px;
  }
`;

export const WrapperDetails = styled.div`
  width: 462.22px;
  height: 500px;

  img {
    width: 16px;
    height: 16px;
  }

  h2 {
    margin-bottom: 12px;
    color: #111111;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 32px;
    font-family: 'Neo Sans Std';
  }

  h3 {
    color: #111111;
    margin-bottom: 8px;
    margin-top: 48px;
    font-size: 16px;
    font-family: 'Neo Sans Std';
    font-style: normal;
    font-weight: 700;
    line-height: 19px;
  }
  p {
    color: #666666;
    /* font-family: 'Saira'; */
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 150%;
    margin-bottom: 42px;
  }

  button {
    background-color: #7ebc43;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.35);
    border-radius: 4px;
    height: 56px;
    width: 328px;
    color: #ffffffff;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const ReturnBox = styled.div`
  button {
    font-family: 'Neo Sans Std';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    border: none;
    background-color: #f5f5f5;
    cursor: pointer;

    span {
      margin-left: 15px;
    }
  }

  img {
    width: 20px;
    height: 13px;
  }
`;

export const BoxProduct = styled.div`
  display: flex;
`;

export const Price = styled.div`
  font-size: 32px;
  color: #c81a78;
  font-weight: 900;

  span {
    font-size: 20px;
    font-weight: 900;
    color: #c81a78;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NonMemberPrice = styled.span`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 32px;
  color: #888888;
  text-transform: uppercase;
`;

export const ProductInfo = styled.div`
  display: flex;
  margin-bottom: 52px;

  img {
    margin-right: 8px;
  }

  span {
    margin-right: 8px;
    color: #555555;
  }
`;
