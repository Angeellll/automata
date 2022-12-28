import styled from "styled-components";
import Image from "next/image";

const Container = styled.div`
  background-color: #22338b;
  flex: 3;
  margin-right: 1vw;
  border-radius: 10px;
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 16px;
  color: white;
  margin: 15px 30px;
`;

const Table = styled.table`
  border: none;
  margin: auto;
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
                <Image src={"/usd.jpg"} alt="bill" width={320} height={120}/>
            </td>
          </tr>
          <tr>
            <td>
                <Image src={"/usd.jpg"} alt="bill" width={320} height={120}/>
            </td>
          </tr>
          <tr>
            <td>
                <Image src={"/usd.jpg"} alt="bill" width={320} height={120}/>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
