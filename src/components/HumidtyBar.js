import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
`;
const PercentageNumber = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const HumidityBar = (props) => {
    return (
      <>
        <Container>
          <div className="d-flex justify-content-between">
            <PercentageNumber>0</PercentageNumber>
            <PercentageNumber>50</PercentageNumber>
            <PercentageNumber>100</PercentageNumber>
          </div>
        </Container>
      </>
    );
}

export default HumidityBar;