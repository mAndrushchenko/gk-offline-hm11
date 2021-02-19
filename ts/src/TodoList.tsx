import React, {useCallback, useState} from 'react';
// import TodoList from "./TodoList";
import './index.css';


export const TodosByHooks:React.FC = () => {
  const [todo, setTodo] = useState({});
  const [allTodos, setAllTodos] = useState([]);


  const onAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    // if (!todo.value) return
    // setAllTodos(prev => {
    //   return [todo, ...prev]
    // })
    setTodo({})
  }
  const handleChange = useCallback(({target}: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({
      value: target.value,
      id: Date.now()
    })
  }, [todo])
  // const handleRemove = (todoId: number) => {
  //   setAllTodos(prev => prev.filter(el => el.id !== todoId ))
  // }

  return (
      <div className="App">
        {/*<form onSubmit={onAdd} className="todo-maker">*/}
        {/*  <input type='text' onChange={handleChange} className="field" value={todo.value || ""}/>*/}
        {/*  <button type="submit" className="btn-add">Add</button>*/}
        {/*</form>*/}
        {/*<TodoList allTodos={allTodos} handleRemove={handleRemove}/>*/}
      </div>
  );
}

