import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 2.5rem 2rem;
  background-color: #000;
`;

export const HomeContainer = styled.div`
  .titleContainer {
    display: flex;
    margin-top: 3rem;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 6rem;
    }
  }

  .content {
    display: flex;
    justify-content: center;
    gap: 6rem;
    margin-top: 4.5rem;

    .card {
      width: 45rem;
      display: flex;
      padding: 2rem 4rem;
      border-radius: 5px;
      flex-direction: column;
      border: 1px rgba(155, 155, 155, 0.23) solid;
      justify-content: flex-start;

      -webkit-box-shadow: 0px 14px 30px -17px #6e6e6e;
      -moz-box-shadow: 0px 14px 30px -17px #6e6e6e;
      box-shadow: 0px 14px 30px -17px #6e6e6e;

      img {
        width: 100%;
        height: 19rem;
      }

      p {
        line-height: 2;
      }
      p:last-child {
        margin-top: 2rem;
      }
    }

    .aboutNext {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        line-height: 2;
      }
      p:first-child {
        margin-bottom: 2rem;
      }
    }

    .divider {
      width: 70%;
      height: 1px;
      margin: 5rem 0;
      background-color: rgba(155, 155, 155, 0.23);
    }

    .buttonsContainer {
      gap: 2rem;
      display: flex;
      flex-wrap: wrap;
      justify-self: flex-end;
      align-self: flex-start;
    }
  }
`;
