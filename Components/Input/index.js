import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Buttons";
import Dropdown from "./Dropdown";
import CheckboxGrid from "./CheckboxGrid";

const Container = styled.div`
  display: flex;
  flex: 1;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vh;
  margin-bottom: 50px;
  align-items: center;
  justify-content: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
  margin-top: -8vh;
  margin-bottom: 10px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  justify-content: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-top: 2px;
  margin-bottom: 2px;
  padding-top: auto;
  padding-bottom: auto;
  height: 110px;
  justify-content: center;
`;

const InputDiv1 = styled.div`
  display: flex;
  margin-top: 1vh;
  width: 90%;
`;

const InputDiv2 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: auto;
  padding-bottom: auto;
  height: 110px;
  justify-content: center;
`;

const Input = styled.input.attrs({
  type: "number",
})`
  height: 0.3vh;
  border-radius: 1px;
  border: 1px solid gray;
  font-size: 1.5vh;
  color: gray;
  padding: 10px;
  text-align: right;

  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.5));
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const Input1 = styled.input.attrs({
  type: "text",
})`

  margin-top: 1vh;
  height: 0.3vh;
  border-radius: 1px;
  border: 1px solid gray;
  font-size: 1.5vh;
  color: gray;
  padding: 10px;
  text-align: center; 
  width: 80%;
  &:hover {
    filter: drop-shadow(2px 2px 2px rgba(255, 255, 255, 0.5));
    cursor: pointer;
  }

  &:active {
    outline: none;
  }

  &:focus {
    outline: none;
  }
`;

const SubTitle = styled.h5`
  color: white;
  font-family: "Inter";
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 5px;
  padding-left: 5px;
`;

const SubTitle1 = styled.h5`
  color: black;
  font-family: "Inter";
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  padding-right: 5px;
  padding-left: 5px;
`;

const SubTitle2 = styled.h5`
  color: black;
  font-family: "Inter";
  font-weight: 500;
  padding-right: 5px;
  padding-left: 8vw;
  background-color: #C9C9C9;
  text-align: left;
  padding-top: 2px;
  padding-bottom: 2px;
  margin-top: 0;
  margin-bottom: 0;
`;

const SubTitle3 = styled.h5`
  color: white;
  font-family: "Inter";
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
  text-decoration-line: underline;
  font-style: italic;

  &:hover {
    cursor: pointer;
  }
`;

const CheckboxDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1vw;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const Rawr = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10px;
`;
const Rawrr = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`;

const DetailsDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  background-color: #acacac;
  padding: 10px;
`;

const LocalDiv = styled.div`
  position: relative;
  margin-left: auto;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-between
  align-items: center;
  bottom: 0;;
`;

const History = styled.div`
  position: absolute;
  margin-left: 0;
  margin-right: auto;
  padding: 10px;
  bottom: 5vh;
`;

const index = ({ form, onInputChange, handleSubmit, totalAmount, currency, from, rate, date, fromCurrency }) => {

  const [isBuy, setIsBuy] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleBuyClick = () => {
    setIsBuy(true);
  }

  const handleSellClick = () => {
    setIsBuy(false);
  }

  const handleShow = () => {
    setIsSubmitted(true);
  }
  // console.log(fromCurrency + " from input")
  return (
    <Container>
      <form onSubmit={handleSubmit} autocomplete="off">
        <ButtonDiv>
          <Button
            primary
            onClick={handleBuyClick}
          >
            BUY
          </Button>
          <Button
            warning
            onClick={handleSellClick}
          >SELL</Button>
        </ButtonDiv>
        <Rawrr>
          <InputWrapper>
            <InputDiv1>
              <InputDiv>
                <InputDiv2>
                  <SubTitle>Currency Code</SubTitle>
                </InputDiv2>
                <InputDiv2>
                  <SubTitle>Exchange Code</SubTitle>
                </InputDiv2>
                <InputDiv2>
                  <SubTitle>Amount</SubTitle>
                </InputDiv2>
              </InputDiv>
              <InputDiv>
                <InputDiv>
                  <Dropdown
                    name="currencyFrom"
                    value={form.currencyFrom}
                    handleSelect={onInputChange}
                  />
                </InputDiv>

                <InputDiv>
                  <Dropdown
                    name="currencyTo"
                    value={form.currencyTo}
                    handleSelect={onInputChange}
                  />
                </InputDiv>

                <InputDiv>
                  <Input
                    name="amount"
                    value={form.amount}
                    onChange={onInputChange}
                    placeholder="0.00"
                  />
                </InputDiv>

              </InputDiv>


            </InputDiv1>
            {/* <InputDiv>
              <SubTitle>Currency Code</SubTitle>
              <Dropdown
                name="currencyFrom"
                value={form.currencyFrom}
                handleSelect={onInputChange}
              />
            </InputDiv>
            <InputDiv>
              <SubTitle>Exchange Code</SubTitle>
              <Dropdown
                name="currencyTo"
                value={form.currencyTo}
                handleSelect={onInputChange}
              />
            </InputDiv>
            <InputDiv>
              <SubTitle>Amount</SubTitle>
              <Input
                name="amount"
                value={form.amount}
                onChange={onInputChange}
                placeholder="0.00"
              />
              <SubTitle>{fromCurrency}</SubTitle>
            </InputDiv> */}

            <CheckboxDiv>
              <SubTitle>Available denomination</SubTitle>
              <Input1
                name="available"
                value={form.available}
                onChange={onInputChange}
                autocomplete="off"
              />
              {/* <CheckboxGrid
                name = "available"
                value={form.available}
                handleChange={onInputChange}
                labels={[
                  "2000",
                  "100",
                  "5",
                  "0.25",
                  "1000",
                  "50",
                  "2",
                  "0.1",
                  "500",
                  "20",
                  "1",
                  "0.05",
                  "200",
                  "10",
                  "0.5",
                  "0.01",
                ]}
              /> */}
              <submit type="submit">
                <Rawr>
                  <Button onClick={handleShow}>CONVERT</Button>
                </Rawr>
              </submit>
            </CheckboxDiv>
          </InputWrapper>
        </Rawrr>
      </form>

      {isSubmitted && (
        <DetailsDiv>
          <SubTitle1>Exchange Details</SubTitle1>
          <SubTitle1>{from} × {rate}: {totalAmount} {currency}</SubTitle1>
          {isBuy ? (
            <>
              <SubTitle1>Buy Rate: 1.80</SubTitle1>
              <SubTitle1>Buy Comission: 10.00%</SubTitle1>
            </>
          ) : (
            <>
              <SubTitle1>Sell Rate: 2.25</SubTitle1>
              <SubTitle1>Sell Commission: 12.00%</SubTitle1>
            </>
          )}
          <SubTitle1>Exchange Date: {date}</SubTitle1>
        </DetailsDiv>
      )}
      <LocalDiv>
        <SubTitle>Local Amount</SubTitle>
        <SubTitle2>{totalAmount}</SubTitle2>
      </LocalDiv>
      <History>
        <SubTitle3>Show history details</SubTitle3>
      </History>
    </Container >

  );
};

export default index;
