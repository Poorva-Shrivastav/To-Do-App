import React from 'react';
import { Container } from './style'
// import { MdDelete } from 'react-icons/fa';

const ToDoList = ({todolist}) => {
        return(
            <Container>
                {
                    todolist.map((todo, index) => {
                        return(
                            <li key={index}>{todo}</li>
                        )
                    })
                }

                {/* <MdDelete/>      */}

            </Container>
        )
    
}

export default ToDoList;

