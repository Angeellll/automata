import Images from './images'
import Denomination from './denomination'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    margin: 5px;
    position: fixed;
    right: 0;

    @media only screen and (max-width: 600px) {
        position: relative;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: row;
`;

const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 3px;
`;

export default function index() {
    return (
        <Wrapper>
            <Title>Result</Title>
            <Inner>
                <Images />
                <Denomination />
            </Inner>
        </Wrapper>
    )
}
