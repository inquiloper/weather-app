import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Text = styled.p`
  font-size: 3rem;
  font-weight: bold;
`;
const TextUnit = styled.p`
  font-size: 1.5rem;
  align-self: end;
  padding-bottom: 0.5rem;
`;

const TodayHighlighText = (props) => {
    return (
        <Container>
          <Text>{props.text}</Text>
          <TextUnit>{props.unit}</TextUnit>
        </Container>
    );
}

export default TodayHighlighText;