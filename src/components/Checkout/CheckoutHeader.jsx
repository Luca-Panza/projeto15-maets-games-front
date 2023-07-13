import { styled } from "styled-components";
import { HiChevronRight } from "react-icons/hi";

import logoWhiteImage from "../../assets/logo-white.png";

export default function CheckoutHeader() {
  return (
    <SCHeader>
      <div>
        <strong>Detalhes do pagamento</strong>
        <HiChevronRight />
        <strong>Revisão + Compra</strong>
      </div>
      <img src={logoWhiteImage} />
    </SCHeader>
  );
}

const SCHeader = styled.header`
  width: 100%;
  height: 3rem;
  background: #ffa949;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding-left: 1.625rem;
  padding-right: 3rem;

  div {
    display: flex;
    gap: 1rem;
    color: white;
  }

  img {
    height: 60%;
  }
`;
