import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const DrawerContainer = styled(Col)`
    position: absolute;
    top:0;
    z-index: 999;
    background-color: var(--main-background-secondary-color);
    left: ${props => props.isOpened ? "0": "-1000px"};
    transition: all 0.5s ease-in;
`;

const CloseBtn = styled(FontAwesomeIcon)`

  font-size: 2em;
  &:hover {
    cursor: pointer;
  }
`
class Drawer extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <DrawerContainer {...this.props} sm={3} className="vh-100">
                  <Row className="mt-3">
                    <Col className="d-flex justify-content-end">
                      <CloseBtn onClick={() => this.props.toggleDrawer()} icon={faTimes} />
                    </Col>
                  </Row>

                  {this.props.children}
                </DrawerContainer>
            </>
        );
    }
}

export default Drawer;