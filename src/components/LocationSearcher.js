import React from 'react';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import LocationSearchItem from './LocationSearchItem';

const Container = styled.div`
  padding: 1rem;
`
const SearchInput = styled.input`
    border: 1px solid #E7E7EB;
    padding: 0.4rem 1rem 0.4rem 0.5rem;
    background-color: var(--main-background-secondary-color);

    &::placeholder {
      color: var(--secondary-font-color);
    }
`;

const SearchButton = styled.button`
  background-color: #3C47E9;
  border: 0;
  color: var(--main-font-color);
  padding: 0.4rem 1rem;
`;

class LocationSearcher extends React.Component {
    
    render() {
        return (
            <Container>
              <Row className="mt-5">
                <Col className="d-flex flex-wrap">
                  <SearchInput className="flex-grow-1" placeholder="search location"/>
                  <SearchButton className="ml-lg-2">Search</SearchButton>
                </Col>
              </Row>
              <Row className="mt-5">
                <Col>
                  <LocationSearchItem></LocationSearchItem>
                  <LocationSearchItem></LocationSearchItem>
                  <LocationSearchItem></LocationSearchItem>
                </Col>
              </Row>
            </Container>
        );
    }
}

export default LocationSearcher;