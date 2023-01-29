import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    left: 0;
    right: 0;
    position: fixed;
    display: flex;
    flex-direction: row;
    height: 75px;;
`

const InnerContainer = styled.div`  
    display: flex;
    flex-direction: row;
    width: 80%;
    margin: auto;
    height: 100px;
    
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -40px;
`

const Title = styled.h1`
    color: #FCF0F0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    margin-top: 10px;
`

const SubTitle = styled.h4`
    color: #FCF0F0;
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    line-height: 24px;
    margin-top: -25px;
    margin-bottom: 10px;
`

const Logo = styled.img`
    height: 160px;
    margin-top: -47px;
`

export default function index() {
    return (
        <>
        <Container>
            <InnerContainer>
            <Logo
                src='/Logo.png'
            />
            <TextContainer>
                <Title>
                    INVESTUP
                </Title>
                <SubTitle>
                    A currency exchange and dollar buy and sell
                </SubTitle>
            </TextContainer>
            </InnerContainer>
        </Container>
        </>
    )
}
