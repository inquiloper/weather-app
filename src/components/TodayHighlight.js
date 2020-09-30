import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const TodayHighlightContainer = styled.div`
  background-color: var(--main-background-secondary-color);
  display: flex;
  flex-direction: column;
  /*align-items: center;*/
  padding: 2rem;
`;

const HighlighTitle = styled.p`
  margin:0;
`;

class TodayHighlight extends React.Component {

    render() {
        return (
            <>
              <TodayHighlightContainer>
                <HighlighTitle className="align-self-center">{this.props.title}</HighlighTitle>
                <div className="mt-3 align-self-center">{this.props.text}</div>
                <div className="mt-3">{this.props.extra}</div>
              </TodayHighlightContainer>
            </>
        );
    }
}

export default TodayHighlight;