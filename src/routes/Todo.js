import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Todo.css';


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
    //this hook displays a error message when the input characters exceed 25
    //Displays nothing if characters<25
    useEffect(() => {
        if(textInput.length > 25)setError(true);
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
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    return(
        <div>
        <header className="header">
            <h1>TODO</h1>
        </header>
            <Link to ="/"><button className="button">Click here to go to Home page</button></Link>
            <div className="inp">
            <form onSubmit={addItem}>
                <label className="inputLabel">
                    Add Item:
                    <input type="text" value = {textInput} onChange={(e) =>setTextInput(e.target.value)} placeholder="Enter task" className="inputfield"/>
                </label>
                <input type = "submit" value = "submit" className="submitbtn"/>    
            </form>
            </div>
            {error ? <span style={{color: "red"}}>Enter a short Task Name</span> : null}
            {
                 todoData.map((item,index) =>{
                     return(
                    <section class="card-list">
                        <article class="card" key={index}>
                          <header class="card-header">
                            <p>{dateTime}</p>
                            <h2>{item}</h2>
                          </header>
                            <div class="author-name">
                              <div class="author-name-prefix">Author</div>
                              Jeff Delaney
                            </div>
                          <div class="tags">
                            <button onClick ={()=>editItem(index)} className="editbtn">Edit</button>
                            <button onClick={() => removeItem(index)} className="deletebtn">Delete</button>
                          </div>
                        </article>
                    </section>
                    )
                })
            }
        </div>
    )
}

export default Todo;