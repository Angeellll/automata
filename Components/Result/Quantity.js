import React from "react";
import styled from "styled-components";

const IconContainer = styled.div`
  font-size: 2em;
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-size: 0.7vw;
  margin-left: 10px;
  font-weight: 400;
  margin: auto;
`;

const CurrencyTable = ({denominations }) => {

  return (
    <table>
      <style jsx>{`
        table {
          margin: auto;
          width: 100%;
          text-align: center;
        }
        th {
          padding: 10px;
        }
        td {
          color: white;
          height: 50px;
          border: 1px solid red;
        }
        tr {
          text-align: center !important
        }
        
      `}</style>
      <tbody>

        {denominations && (
          Object.keys(denominations).map(key => (
            <tr key={key}>
              <td>
                <IconContainer>
                  <Title>{denominations[key]}</Title>
                </IconContainer>
              </td>
            </tr>
          ))
        )}


      </tbody>
    </table>
  );
};

export default CurrencyTable;
