import './App.css';
import { useState } from 'react';
import Navbar from "./components/Navbar/index.js";
import Container from "./components/Container/index.js";
import FormInput from "./components/FormInput/index.js";

function App() {
  const [value, setValue] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      title: value,
      success: false
    }

    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
    setValue('')
  }

  return (
    <div className="App">
      <Navbar />
      <Container>
        <FormInput onSubmit={handleSubmit} onChange={(e) => setValue(e.target.value)} value={value} />
      </Container>
    </div>
  );
}

export default App;
