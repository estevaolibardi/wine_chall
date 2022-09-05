import styled from 'styled-components';

export const ProductContainer = styled.div`
  width: 832px;
  height: 1700px;
  margin-bottom: 50px;

  ul {
    gap: 32px;
    margin: 10px 0 30px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    :nth-last-child() {
      gap: 0;
    }
  }

  p {
    color: #262626;
    span {
      font-weight: 700;
    }
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;
