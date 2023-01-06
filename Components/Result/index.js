import Images from './images'
import Denomination from './denomination'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    @media only screen and (min-width: 400px) {
        display: flex;
        flex-direction: column;
        width: 50vw;
        margin: 5px;
        position: absolute;
        margin-left: 50vw;
    }
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

  @media only screen and (min-width: 400px) {
    margin-left: 0;
}
`;

export default function index({denomination, images}) {
    return (
        <Wrapper>
            <Title>Result
            <Inner>
                <Images images={images}/>
                <Denomination denomination={denomination}/>
            </Inner>
            </Title>
            
        </Wrapper>
    )
}
