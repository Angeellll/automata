import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1E3999;
    flex: 1;
    border-radius: 10px;
    width: 100%;
    margin-right: 5vw;

    @media only screen and (min-width: 400px) {
      width: 130px;
    }
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin-top: 10px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;

  @media only screen and (min-width: 400px) {
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
  }
`;

const Table = styled.table`
  border: none;
  margin: auto;
  width: 18vw;
  margin-top: -25px;

  td {
    height: 100px;
    text-align: center;
  }

  @media only screen and (min-width: 400px) {
    margin-top: 0px;
    width: 130px;

    td {
      height: 120px
    }
  }
`;

const Times = styled.h1`
  font-weight: 600;
  color: white;
  font-style: italic;
  font-size: 25px;

  @media only screen and (min-width: 400px) {
    font-size: 33px;
    text-align: center;
  }
`;


export default function denomination() {
  return (
    <Container>
      <Title>Denomination</Title>
      <Table>
        <tbody>
          <tr>
            <td>
                <Times>x13</Times>
            </td>
          </tr>
          <tr>
            <td>
                <Times>x2</Times>
            </td>
          </tr>
          <tr>
            <td>
                <Times>x5</Times>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}
