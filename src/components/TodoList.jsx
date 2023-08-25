import React from "react";
import Todo from "./Todo";

const TodoList = ({todolist, handleDelete, handleMoveUp, handleMoveDown, handleFinishBtn, listLength}) => {
    return (
        <div className="w-full h-[80%] p-2 overflow-auto overflow-x-hidden">
                { 
                    todolist.map( todo => <Todo todoValue={todo.todoValue} todoId={todo.todoId} todoPos={todo.todoPos} isFinished={todo.isFinished} handleDelete={handleDelete} handleMoveUp={handleMoveUp} handleMoveDown={handleMoveDown} listLength={listLength} handleFinishBtn={handleFinishBtn}/>)
                }
        </div>
    )
};

export default TodoList