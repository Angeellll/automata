import React, { useState, useEffect } from 'react'
import styled from 'styled-components';

const Container = styled.div`
  width: 70%;
  padding-bottom: 3px;
  display: flex;
  margin: auto;
  margin-top: 93px;
  color: #FCF0F0;
  font-size: 1.3vw;
`

const DateContainer = styled.div`
  font-family: 'Inter';
  font-weight: 400;
  margin-left: 20px;
`

const TimeContainer = styled.div`
  display: flex;
  margin-right: 0;
  margin-left: auto;
  font-family: 'Inter';
  font-weight: 400;
  margin-right: 20px;
`

const DateTime = (props) => {
  const [date, setDate] = useState(props.initialDate || new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);
  const time = date.toLocaleTimeString();

  return (
    <Container>
      {date && (
        <>
          <DateContainer>
            {formattedDate}
          </DateContainer>
          <TimeContainer>
            {time}
          </TimeContainer>
        </>
      )}
    </Container>
  )
}

DateTime.getInitialProps = async (context) => {
  return { initialDate: new Date() }
}

export default DateTime
