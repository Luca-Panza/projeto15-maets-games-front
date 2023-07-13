import { styled } from "styled-components";

export default function CheckoutConfig() {
  return (
    <SCContainer>
      <div>
        <select>
          <option selected>Select payment method</option>
          <option value="pix">Pix</option>
          <option value="bank-slip">Bank Slip</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
        </select>

        <SCPaymentMethods>
          <h1>Payment Methods</h1>
          <strong>We accept the following forms of payment:</strong>
          <div>
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_pyapal.png?t=10" />
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_boleto.png?t=10" />
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_pix.png?t=10" />
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_mastercard.png?t=10" />
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_hipercard.png?t=10" />
            <img src="https://checkout.steampowered.com/public/images/payment_methods/payment_pagseguro.png?t=10" />
          </div>
        </SCPaymentMethods>
      </div>
    </SCContainer>
  );
}

const SCContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #34766c;
  display: flex;
  flex-direction: column;
  padding-top: 6.25rem;
  padding-left: 1.625rem;
  padding-right: 3rem;
  box-sizing: border-box;

  div {
    display: flex;
    justify-content: space-between;
  }

  select {
    width: 25rem;
    height: 3.125rem;
    background: #17181c;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
    color: white;
    padding-left: 1rem;
    font-size: 1rem;
    border: none;
  }
`;

const SCPaymentMethods = styled.div`
  width: 35%;
  background: #17181c;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
  color: white;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1rem;

  h1 {
    text-align: center;
    font-size: 1.125rem;
  }

  strong {
    margin-top: 1rem;
    font-size: 0.75rem;
  }

  div {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
    gap: 0.625rem;
  }
`;
