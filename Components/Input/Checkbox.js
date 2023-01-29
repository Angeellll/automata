import React, { useState } from 'react'
import styled from 'styled-components'

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
const StyledCheckbox = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 12px;
    height: 12px;
    background: ${props => (props.checked ? '#000' : '#fff')};
    border: 1px solid #000;
    border-radius: 3px;
    transition: all 150ms;
    ${HiddenCheckbox}:focus + & {
      box-shadow: 0 0 0 3px pink;
    }
    ${Icon} {
      visibility: ${props => (props.checked ? 'visible' : 'hidden')};
    }

`

const Checkbox = ({ className, checked, onChange, value, ...props }) => {
    const [isChecked, setIsChecked] = useState(checked);
    const handleChange = (event) => {
        setIsChecked(event.target.checked);
        if(onChange){
            onChange(event.target.checked, value);
        }
    }
    return (
        <CheckboxContainer className={className}>
            <label>
                <HiddenCheckbox
                    checked={isChecked}
                    value={value}
                    onChange={handleChange}
                    {...props}
                />
                <StyledCheckbox checked={isChecked}>
                    <Icon viewBox="0 0 24 24">
                      <polyline points="20 6 9 17 4 12" />
                    </Icon>
                </StyledCheckbox>
            </label>
        </CheckboxContainer>
    )
}


export default Checkbox
