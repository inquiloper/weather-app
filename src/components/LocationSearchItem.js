import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleRight} from '@fortawesome/free-solid-svg-icons';

const Item = styled.div`
    padding: 0.8rem; 0.4rem;
    box-sizing: border-box;
    transition: all 1s ease-in;
    & p {
        margin:0;
    }

    &.active {
        border: 1px solid #616475;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid #616475;
    }
`;
class LocationSearchItem extends React.Component {
    render() {
        return (
            <>
                <Item className="d-flex align-items-center">
                    <p>London</p>
                    <FontAwesomeIcon className="ml-auto" icon={faAngleRight}/>
                </Item>
            </>
        );
    }
}

export default LocationSearchItem;