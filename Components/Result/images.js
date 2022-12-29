import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #22338b;
  flex: 2;
  border-radius: 10px;
  width: 100%;
  margin-right: 2vw;
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin: 10px 10px;
`;

const Table = styled.table`
  border: none;
  margin: auto;
  margin-top: -10px;

  td {
    height: 100px
  }
}
`;


export default function images() {
  return (
    <Container>
      <Title>Currency Images</Title>
      <Table>
        <tbody>
          <tr>
            <td>
                <Image src={"/usd.jpg"} alt="bill" width={250} height={100}/>
            </td>
          </tr>
          <tr>
            <td>
                <Image src={"/usd.jpg"} alt="bill" width={250} height={100}/>
            </td>
          </tr>
          <tr>
            <td>
                <Image src={"/usd.jpg"} alt="bill" width={250} height={100}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
