import { useParams } from "react-router-dom";
import { styled } from "styled-components";

import CheckoutConfig from "../components/Checkout/CheckoutConfig";
import CheckoutFinish from "../components/Checkout/CheckoutFinish";

import handImage from "../assets/hand.png";
import CheckoutHeader from "../components/Checkout/CheckoutHeader";

export default function Checkout() {
  const { type } = useParams();

  return (
    <SCContainer>
      <SCImageContainer>
        <button>Voltar para a loja</button>
        <img src={handImage} />
      </SCImageContainer>
      <SCCheckoutContainer>
        <CheckoutHeader />
        {type === "config" && <CheckoutConfig />}
        {type === "finish" && <CheckoutFinish />}
      </SCCheckoutContainer>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  background: #17181c;
  width: 100vw;
  height: 100vh;

  display: flex;
  box-sizing: border-box;
`;

const SCImageContainer = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    font-family: "Press Start 2P";
    font-size: 0.6rem;
    color: white;
    width: 12rem;
    height: 3rem;
    margin-bottom: 1rem;
    background: #34766c;
    border: none;
    cursor: pointer;
  }

  img {
    width: 70%;
  }
`;

const SCCheckoutContainer = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
`;
