import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5vw;


`;

const Title = styled.h5`
  font-weight: 600;
  font-style: italic;
  font-size: 15px;
  margin-bottom: 8px;
`;

const Table = styled.table`
  width: 80vw;
  margin-left: 20px;

  td {
    font-weight: 400;
    font-style: italic;
    font-size: 15px;
  }
`;

// const Table = () => (
//   <div>
//     <table>
//       <tbody>
//         <tr>
//           {history.amount.map(item =>
//               <td key={item.amount}>
//                 {item}
//               </td>
//             )}
//         </tr>
//       </tbody>
//     </table>
//   </div>
// );

export default function index({ data }) {
  return (
    <Wrapper>
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
              500 US Dollar (USD) → Philippine Peso (PHP) Conversion 12/23/2022
              12:54AM
            </td>
          </tr>
        </tbody>
      </Table>
    </Wrapper>
  );
}
