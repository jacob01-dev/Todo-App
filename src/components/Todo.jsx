import React from "react";
import { useState } from "react";

const Todo = ({todoValue, todoId, todoPos, isFinished, handleDelete, handleMoveUp, handleMoveDown, handleFinishBtn, listLength}) => {

    const handleFinish = () => {
        handleFinishBtn(todoId);
    };

    return (
        <div className={`w-full h-[15%] bg-blue-950 mb-2 box-border ${isFinished && "opacity-50"}`}>
            <div className="w-1/2 h-full float-left flex items-center justify-center">
                <h1 className={isFinished ? "text-gray-400 text-3xl line-through" : "text-white text-3xl"}>{todoValue}</h1>
            </div>
            <div className="w-1/2 h-full float-left flex items-center justify-end">
                <p className="rounded-xl hover:bg-blue-800 p-4 cursor-pointer" onClick={handleFinish}><i class="fa-solid fa-check fa-2xl" style={{color: '#ffffff'}}></i></p>
                <p className="rounded-xl hover:bg-blue-800 p-4 cursor-pointer" onClick={() => handleDelete(todoId)}><i className="fa-solid fa-trash fa-2xl" style={{color: '#ffffff'}}></i></p>
                {todoPos > 0 && <p className="rounded-xl hover:bg-blue-800 p-4 cursor-pointer" onClick={() => handleMoveUp(todoPos)}><i class="fa-solid fa-arrow-up fa-2xl" style={{color: '#ffffff'}}></i></p>}
                {todoPos >= 0 && todoPos < listLength-1 && <p className="mr-2 rounded-xl hover:bg-blue-800 p-4 cursor-pointer" onClick={() => handleMoveDown(todoPos)}><i class="fa-solid fa-arrow-down fa-2xl" style={{color: '#ffffff'}}></i></p>}
            </div>
        </div> 
    )
};

export default Todo;