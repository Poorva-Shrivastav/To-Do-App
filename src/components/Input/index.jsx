import React from 'react';
import {Container, Input} from './style';

const InputField = ({inputText, changeHandler}) => {
    return(
        <Container>
            <Input
                type = "text"
                value = {inputText}
                onChange = {changeHandler}
            />
        </Container>
        
    )
    

}

export default InputField;