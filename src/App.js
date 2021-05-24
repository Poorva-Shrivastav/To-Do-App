import { useState } from 'react';
import './App.css';
import InputField from './components/Input';
import Button from './components/Button';
import ToDoList from './components/ToDoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todolist, setToDoList] = useState([]);

  const changeHandler = (e) => {
      setInputText(e.target.value)
  }


  const clickHandler = () => {
    if(inputText !== '' && !todolist.includes(inputText)){
      setToDoList([...todolist, inputText]
      );
    }
    setInputText('');
  }




  return (
    <div className="container">
      <InputField 
      inputText = {inputText}
      changeHandler = {changeHandler}
      />
      <Button clickHandler = {clickHandler}/>
      <ToDoList
      todolist = {todolist}
      />
    </div>
  );
}

export default App;

