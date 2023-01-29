import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  background-color: ${props => props.primary ? '#3CC051' : 
                    (props.warning? '#D14A5A': '#999B3D')};
  color: white;
  font-size: 1rem;
  font-family: 'Inter';
  font-weight: 600;
  padding: 1rem 1.5rem;
  align-items: center;
  border-radius: 5px;
  height: 40px;;
  border: none;
  margin: 1vw;

  &:hover {
    background-color: ${props => props.primary ? '#469353' : 
                    (props.warning? '#B24B57': '#7B7D2D')};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export default Button
