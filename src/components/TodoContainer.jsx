import React from "react";
import TodoForm from "./todoForm";
import TodoList from "./TodoList";
import { useState } from "react";

const TodoContainer = () => {
    const [todoList, setTodoList] = useState([]);

    const handleAdd = (value, id, todoPos) => {
        setTodoList((todos) => [...todos, {todoValue: value, todoId: id, todoPos: todoPos, isFinished: false}]);
    }

    const handleDelete = (id) => {
        setTodoList((prev) => prev.filter((todo) => todo.todoId !== id))
    };

    const handleFinishBtn = (index) => {
        let tmp = [...todoList]

        tmp[index].isFinished = !tmp[index].isFinished;

        setTodoList((prev) => tmp);
    };
    const handleMoveUp = (pos) => {
        let tmp = [...todoList]

        for(let i = 0; i < tmp.length; i++) {
            if( (pos-1) === tmp[i].todoPos) { 
                if(pos > 0){
                    tmp[i+1].todoPos-=1
                    tmp[i].todoPos+=1;
                    break;
                }
            }
        }
        tmp.sort((a,b) => a.todoPos - b.todoPos);

        setTodoList( (prev) => tmp);
    };

    const handleMoveDown = (pos) => {
        let tmp = [...todoList]

        for(let i = 0; i < tmp.length; i++) {
            if(pos === tmp[i].todoPos) { 
                    let tmpPos = tmp[i].todoPos;
                    tmp[i+1].todoPos = tmpPos
                    tmp[i].todoPos = tmpPos+1;
                    break;
            }
        }
        tmp.sort((a,b) => a.todoPos - b.todoPos);

        setTodoList( (prev) => tmp);
    };

    return (
        <div className="w-1/2 h-2/3 bg-gray-900 border-2 border-gray-200 shadow-lg shadow-gray-200">
            <TodoForm handleAdd={handleAdd}/>
            <TodoList todolist={todoList} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} listLength={todoList.length} handleFinishBtn={handleFinishBtn}/>
        </div>
    )
}

export default TodoContainer;