import styled from "styled-components";

const Container = styled.div`
    background-color: #1E3999;
    flex: 1;
    border-radius: 10px;
    margin-right: 5vw;
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 16px;
  color: white;
  margin-top: 15px;
  margin-bottom: 10px;
  text-align: center;
`;

const Table = styled.table`
  border: none;
  margin: auto;

  td {
    height: 120px
  }
`;

const Times = styled.h1`
  font-weight: 600;
  color: white;
  text-align: center;
  font-style: italic;
  font-size: 33px;
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
      </Table>s
    </Container>
  )
}
