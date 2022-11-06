import styled from "styled-components";
import background from '../public/background.png'


export const HomeContainer = styled.div`
.titleContainer {
    width: auto;
    height: 100%;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: 100%;
    display: flex;
    margin-top: 3rem;

    .card {
      width: 30rem;
      border: 1px #CBCBCB solid;
      border-radius: 5px;
      margin-right: 60px;
      padding: 2rem;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      -webkit-box-shadow: 0px 14px 30px -17px #6e6e6e;
      -moz-box-shadow: 0px 14px 30px -17px #6e6e6e;
      box-shadow: 0px 14px 30px -17px #6e6e6e;

      img {
        width: 100%;
        height: 200px;
      }
    }

    .aboutNext {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .divider {
      width: 20rem;
      height: 2px;
      background-color: #9B9B9B;
      margin: 2rem 0;
    }

    .buttonsContainer {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
    }
  }
`;

export const HeaderContainer = styled.header`
  width: 100%;
  background-color: #000;
  padding: 10px 75px;
`;
