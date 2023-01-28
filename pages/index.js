import React from 'react'
import Header from '../Components/Header'
import DateTime from '../Components/DateTime'
import Input from '../Components/Input'
import Rate from '../Components/Rate'
import Result from '../Components/Result'
import styled from 'styled-components'

const XContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: auto;
  height: 80vh;
`

export default function index() {

  return (
    <div>
      <XContainer>
        <Header />
        <DateTime />
      </XContainer>
      <MainWrapper>
        <Input />
        <Rate />
        <Result />
      </MainWrapper>
    </div>
  )
}
