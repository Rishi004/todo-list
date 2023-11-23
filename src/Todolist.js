import React from "react";

function Todolist({ todos, settodos, setedittodo }) {
    const handleDelete = ({ id }) => {
        settodos(todos.filter((todo) => todo.id !== id));
    };

    const handleComplete = (todo) => {
        settodos(
            todos.map((item) => {
                if (item.id === todo.id) {
                    return { ...item, completed: !item.completed };
                } else {
                    return item;
                }
            })
        );
    };

    const handleEdit = ({ id }) => {
        const findTodo = todos.find((todo) => todo.id === id);
        setedittodo(findTodo);
    };

    return (
        <div>
            {todos.map((todo) => (
                <li>
                    <input
                        type="text"
                        value={todo.title}
                        onChange={(e) => {
                            e.preventDefault();
                        }}
                        className={`list ${todo.completed ? "complete" : ""}`}
                    />
                    <div className="mb-4">
                        <button onClick={() => handleComplete(todo)}>
                            <i className="fa fa-check-circle"></i>
                        </button>
                        <button onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>
                        <button onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </div>
    );
}

export default Todolist;
