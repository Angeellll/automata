/* eslint-disable react-hooks/rules-of-hooks */
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;

  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    color: black;
    margin-left: 0px;
    float: right;
    width: 50%;
    z-index: 0;
    margin-top: 40px;
  }
`;

const Title = styled.h5`
  font-weight: 600;
  font-style: italic;
  font-size: 14px;
  margin-bottom: 8px;

  @media only screen and (min-width: 400px) {
    text-align: left;
    margin-left: 5vw;
  }
`;

const Table = styled.table`
  width: 90vw;
  margin-left: 20px;
  margin-bottom: 100px;

  td {
    font-weight: 400;
    font-style: italic;
    font-size: 12px;
  }

  @media only screen and (min-width: 400px) {
    width: 100%;
    overflow-wrap: break-word;
    margin-left: 5vw;
    padding-left: 20px;
  }
`;

const Rawr = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
  }
`;

export default function index({ table }) {
  return (
    <Wrapper>
      <Rawr>
        <Title>History</Title>
        <Table>
          <tbody>{table}</tbody>
        </Table>
      </Rawr>
    </Wrapper>
  );
}
