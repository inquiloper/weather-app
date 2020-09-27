import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ForecastContainer = styled(Col)`
    background-color: var(--main-background-secondary-color);
`;

const ForecastIcon = styled.img`
  max-width: 40%;
`;

const ForecastTemp = styled.p`
  font-size: 9rem;
`;

const ForecastTempUnit = styled.p`
  font-size: 2.5rem;
  color: var(--secondary-font-color);
`;

const ForecastText = styled.p`
  font-size: 2.25rem;
  color: var(--secondary-font-color);
`

const SearchPlacesBtn = styled.button`
  background-color: #6E707A;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 0;
  color: var(--main-font-color);
  padding: 0.2rem 0.5rem;
`;

const LocalizeBtn = styled.button`
  background: gba(255, 255, 255, 0.2);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background-color: #6E707A;
  color: var(--main-font-color);
  border: 0;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  
`;

class TodayForecast extends React.Component {

    constructor(props) {
      super(props);
    }

    render() {
        return (
            <>
                <ForecastContainer>
                    <Row className="mt-5">
                      <Col className="d-flex">
                        <SearchPlacesBtn className="ml-3" onClick={() => this.props.toggleDrawer()}>Search for places</SearchPlacesBtn>
                        <LocalizeBtn className="ml-auto mr-3"><FontAwesomeIcon icon={faCompass}/></LocalizeBtn>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className=" d-flex justify-content-center">
                          <ForecastIcon src="https://www.metaweather.com/static/img/weather/lc.svg" />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <Col className="d-flex justify-content-center">
                            <ForecastTemp>15</ForecastTemp>
                            <ForecastTempUnit className="align-self-end">°C</ForecastTempUnit>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col className="d-flex justify-content-center">
                        <ForecastText>Shower</ForecastText>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col className="d-flex justify-content-center">
                        <p>Today. Fri, 5 Jan</p>
                      </Col>
                    </Row>
                    <Row className="mt-5">
                      <Col className="d-flex justify-content-center">
                        <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Helsinki</p>
                      </Col>
                    </Row>
                </ForecastContainer>
            </>
        );
    }
}

export default TodayForecast;