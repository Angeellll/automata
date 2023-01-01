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
    margin-bottom: 0;
  }
`;

const Rawr = styled.div`
  @media only screen and (min-width: 400px) {
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

export default function index({ data }) {
  return (
    <Wrapper>
      <Rawr>
        <Title>History</Title>
        <Table>
          <tbody>
            <tr>
              <td>
                128.56 Philippine Peso (PHP) → US Dollar (USD) Conversion
                12/22/2022 08:54PM
              </td>
            </tr>
            <tr>
              <td>
                500 US Dollar (USD) → Philippine Peso (PHP) Conversion
                12/23/2022 12:54AM
              </td>
            </tr>
          </tbody>
        </Table>
      </Rawr>
    </Wrapper>
  );
}
