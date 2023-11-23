import "./App.css";
import Header from "./Header";
import Form from "./Form";
import { useState } from "react";
import Todolist from "./Todolist";

function App() {
    const [input, setinput] = useState("");
    const [todos, settodos] = useState([]);
    const [edittodo, setedittodo] = useState(null);

    return (
        <div className="App mt-2 ">
            <div>
                <Header />
            </div>
            <br />
            <div>
                <Form
                    input={input}
                    setinput={setinput}
                    todos={todos}
                    settodos={settodos}
                    edittodo={edittodo}
                    setedittodo={setedittodo}
                />
            </div>
            <div>
                <Todolist
                    todos={todos}
                    settodos={settodos}
                    setedittodo={setedittodo}
                />
            </div>
        </div>
    );
}

export default App;
