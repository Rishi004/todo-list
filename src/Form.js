import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function Form({ input, setinput, todos, settodos, edittodo, setedittodo }) {
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? { title, id, completed } : todo
        );
        settodos(newTodo);
        setedittodo("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!edittodo) {
            settodos([
                ...todos,
                { id: uuidv4(), title: input, completed: false },
            ]);
            setinput("");
        } else {
            updateTodo(input, edittodo.id, edittodo.completed);
        }
    };

    useEffect(() => {
        if (edittodo) {
            setinput(edittodo.title);
        } else {
            setinput("");
        }
    }, [setinput, edittodo]);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter todo here..."
                    className="mt-2 mb-5"
                    value={input}
                    required
                    onChange={(e) => {
                        setinput(e.target.value);
                    }}
                />
                <button type="submit" className="btn btn-success ml-2">
                    {edittodo ? "OK" : "ADD"}
                </button>
            </form>
        </div>
    );
}

export default Form;
