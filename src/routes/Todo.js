import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Todo(){
    const [todoData, setTodoData] = useState([])
    const [textInput, setTextInput] = useState("")
    const [error, setError] = useState(false)
    const addItem = (e) =>{
        e.preventDefault();
        if (error) return;
        const tempData = [...todoData];
        tempData.push(textInput)
        setTodoData(tempData)
        setTextInput("")
    }
    //this hook displays a error message when the input characters exceed 10
    //Displays nothing if characters<10
    useEffect(() => {
        if(textInput.length > 10)setError(true);
        else setError(false)
    },[textInput])
    
    const removeItem =(index) => {
        let newData = [...todoData]
        newData.splice(index,1)
        setTodoData(newData)
    }
    
    const editItem = (index) => {
        if(error) return;
        let newData = [...todoData]
        newData[index] = textInput;
        setTodoData(newData)
    }

    return(
        <div>
            <h1>TODO</h1>
            <Link to ="/">Click here to go to Home page</Link>
            <form onSubmit={addItem}>
                <label>
                    Text Input:
                    <input type="text" value = {textInput} onChange={(e) =>setTextInput(e.target.value)}/>
                </label>
                <input type = "submit" value = "submit" />    
            </form>
            {error ? <span style={{color: "red"}}>Error Occured</span> : null}
            {
                todoData.map((item,index) =>{
                    return(
                        <li key= {index}>{item}<button onClick ={()=>editItem(index)}>Edit</button><button onClick={() => removeItem(index)}>Delete</button></li>
                    )
                })
            }
        </div>
    )
}

export default Todo;