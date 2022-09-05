import styled from 'styled-components'

export const ProductDisplay = styled.div`
  height: 387px;
  width: 256px;
  transition: all ease 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

export const ProductItems = styled.li`
  width: 256px;
  height: 333px;
  box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .items-image {
    width: 50%;
    height: 50%;
  }
`
export const ItemTitle = styled.div`
  width: 100%;
  color: #1d1d1b;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.222488px;
`
export const ItemPrice = styled.div`
  width: 100%;
  margin: auto;
`

export const Buttons = styled.div`
  margin-top: 16px;
  width: 100%;
`

export const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 5px;
`

export const PriceBox = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  color: #888888;
  text-decoration-line: line-through;
`

export const DiscountBox = styled.div`
  background-color: #f79552;
  color: #ffffff;
  width: 48.67px;
  height: 13.63px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`

export const MemberInfoPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 6.8px;
  margin-top: 16.5px;
  margin-bottom: 5.8px;
`

export const MemberNonPrice = styled.div`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  color: #888888;

  span {
    margin-right: 4px;
  }
`

export const PriceMember = styled.div`
  color: #b6116e;
  font-weight: 700;

  span {
    font-size: 11px;
  }
`

export const MemberTitle = styled.div`
  color: #1d1d1b;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 10px;
`

export const ButtonDetail = styled.button`
  width: 100%;
  background: #7ebc43;
  border: 1px solid #7ebc43;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  padding: 11.6806px 23.3612px;
  user-select: none;
  text-transform: uppercase;
  border-radius: 3.89354px;

  &:hover,
  &:active {
    background-color: #51b853;
  }
`

export const CardWrapper = styled.div`
  width: 198.57px;
  height: 178.13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    height: 100%;
  }
`
