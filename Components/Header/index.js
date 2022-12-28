import styled from "styled-components"
import { Icon } from "@iconify/react";
import Rates from "../Rates"
import React, { useState } from "react";


const Text = ["Flash", "Exchange", "Rates"]

const Wrapper = styled.div`
    display: flex;
    justify-content: stretch;
    background-color: #182467;
    color: #ffff;
`;

const Flash = styled.div`
    margin: auto;
`;

const List = styled.div`
    position: absolute;
    right: 2vw;
`;

const Title = styled.h1`
    font-weight: 600;
`;

const Animation = styled.span`

    &:after {
        content:"";
        animation: spin 2s linear infinite;
      }
      @keyframes spin {
        0% { content: "Flash" ; }
        50% { content:"Exchange"; }
        100% { content:"Rate"; }
    }
`;

export default function Header() {

    const [showRate, setShowRate] = useState(false);

    return (
        <Wrapper>
            <Flash>
                <Title><Animation/></Title>
            </Flash>
            <List>
                <Title> <Icon icon="gridicons:dropdown" 
                onClick={() => setShowRate(true)} /> 
                {showRate && <Rates
                    onClose={() => setShowRate(false)}
                    show={showRate}
                >
                </Rates>}
                
                </Title>
            </List>
        </Wrapper>
    )
}

