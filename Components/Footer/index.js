import styled from "styled-components";

const Footer = styled.div`
    position: fixed;
    background-color: white;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    font-style: italic;
    font-size: 12px;
    height: 18px;
`;

export default function index() {
  return (
    <Footer>Note: This website is limited to conversion and denomination only.</Footer>
  )
}
