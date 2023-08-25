import React from "react";
import { useState } from "react";
const TodoForm = ({handleAdd}) => {
    const [inputValue, setInputValue] = useState("");
    const [todoId, setTodoId] = useState(0);
    const [todoPosition, setTodoPosition] = useState(0);

    const handleClick = () => {
        handleAdd(inputValue, todoId, todoPosition);
        setInputValue("");
        setTodoId((id) => id+1);
        setTodoPosition((pos) => pos+1);
    };


    return (
        <div className="w-full h-[20%] bg-gray-900 flex items-center justify-center border-b-2 border-solid border-b-gray-300 font-sans sticky top-0">
            <input type="text" placeholder="Write your todo" className="w-1/3 h-[40%] outline-none rounded-3xl p-3 text-xl m-4"
                onChange={(e) => setInputValue(e.target.value)} value={inputValue}
            />
            <button className="w-1/4 h-[40%] bg-blue-950 rounded-3xl text-white text-xl hover:bg-blue-700" onClick={handleClick} disabled={inputValue==="" ? true : false}>Add</button>
        </div>
    )
}

export default TodoForm;