import styled from 'styled-components'

const Button = styled.button`
  display: flex;
  background-color: ${props => props.primary ? '#3CC051' : 
                    (props.warning? '#D14A5A': 'white')};
  color: white;
  font-size: 1.2rem;
  font-family: 'Inter';
  font-weight: 600;
  padding: 1.5rem 2rem;
  align-items: center;
  border-radius: 5px;
  height: 40px;;
  border: none;
  margin: 1vw;

  &:hover {
    background-color: ${props => props.primary ? '#469353' : 
                    (props.warning? '#B24B57': 'lightblue')};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`

export default Button
