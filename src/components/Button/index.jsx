import React from 'react';
import {Container, Buttons} from './style';

const Button = ({clickHandler}) => {
    return(
        <Container>
            <Buttons onClick={clickHandler}>
                Add
            </Buttons>
        </Container>
    )
}

export default Button;