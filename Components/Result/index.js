import Images from './images'
import Denomination from './denomination'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const Inner = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
`;

const Title = styled.h5`
  font-weight: 600;
  margin: auto;
  margin-left: 5vw;
`;

export default function index() {
    return (
        <Wrapper>
            <Title>Result
            <Inner>
                <Images />
                <Denomination />
            </Inner>
            </Title>
            
        </Wrapper>
    )
}
