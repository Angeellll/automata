import React from 'react'
import styled from 'styled-components'
import Checkbox from './Checkbox'

const CheckboxGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-top: 8px;
  justify-content:center;
  margin-left: auto;
  margin-right: auto;
`

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -20px;
  position: relative;
`

const CheckboxLabel = styled.h6`
  color: white;
  font-weight: 300;
  padding-left: 3px;
  padding-right: 3px;
  align-self: center;
  width: 30px;
  height: 12px;
`


const CheckboxGrid = ({ labels, onChange }) => {
    return (
        <CheckboxGridContainer>
            {labels.map((label, index) => (
                <InnerWrapper key={index}>
                    <Checkbox onChange={onChange} value={label} />
                    <CheckboxLabel>{label}</CheckboxLabel>
                </InnerWrapper>
            ))}
        </CheckboxGridContainer>
    )
}

export default CheckboxGrid
