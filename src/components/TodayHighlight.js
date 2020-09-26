import React from 'react';
import { Col, Row } from 'react-bootstrap';

class TodayHighlight extends React.Component {

    constructor(props) {
      super()
    }

    render() {
        return (
            <>
              <div className="today-highligh-container">
                <Row>
                  <Col>
                    <p className="today-highlight-title text-center">{this.props.title}</p>
                  </Col>
                </Row>
              </div>
            </>
        )
    }
}

export default TodayHighlight;