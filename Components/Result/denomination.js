import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #1E3999;
    flex: 1;
    border-radius: 10px;
    width: 100%;
    margin-right: 5vw;
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin-top: 10px;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
`;

const Table = styled.table`
  border: none;
  margin: auto;
  margin-top: -10px;
  width: 20vw;

  td {
    height: 100px
  }
`;

const Times = styled.h1`
  font-weight: 600;
  color: white;
  text-align: center;
  font-style: italic;
  font-size: 18px;
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
