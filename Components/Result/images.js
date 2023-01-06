/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Image from "next/image";
import React, { useState, useCallback, useEffect } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #22338b;
  flex: 2;
  border-radius: 10px;
  width: 100%;
  margin-right: 2vw;

  @media only screen and (min-width: 400px) {
    margin-bottom: 100px;
    flex: 3;
    margin-right: .5vw;
    border-radius: 10px;
    width: 350px;
  }
`;

const Title = styled.h5`
  font-weight: 500;
  font-size: 12px;
  color: white;
  margin: 10px 10px;

  @media only screen and (min-width: 400px) {
    font-size: 16px;
    margin: 15px 30px;
  }
`;

const Table = styled.table`
  border: none;
  margin: auto;
  margin-top: -10px;

  td {
    height: 100px;
  }

  @media only screen and (min-width: 400px) {
    margin-top: 0px;

    td {
      height: 120px;
    }
  }
`;

export default function Images({images}) {

  const useMediaQuery = (width) => {
    const [targetReached, setTargetReached] = useState(false);
  
    const updateTarget = useCallback((e) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);
  
    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);
  
      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }
  
      return () => media.removeListener(updateTarget);
    }, []);
  
    return targetReached;
  };

  const Photo = (props) => {
    const isBreakpoint = useMediaQuery(768)

      if (isBreakpoint) {
        return <Image src={"/usd.jpg"} alt="bill" width={230} height={100} />;
      } else {
        return <Image src={"/usd.jpg"} alt="bill" width={320} height={120} />;
      }
  };

  return (
    <Container>
      <Title>Currency Images</Title>
      <Table>
        <tbody>
          {images}
        </tbody>
      </Table>
    </Container>
  );
}
