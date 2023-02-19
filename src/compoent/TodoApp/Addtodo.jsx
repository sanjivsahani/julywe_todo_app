import React, { useState } from 'react'
import ShowTodo from './ShowTodo'

const Addtodo = () => {
    const inittodo = {
        task: "",
        desc: ""
    }
    const [todo, settodo] = useState(inittodo)
    const [data, setData] = useState([])
    const handleChange = (e) => {
        settodo({ ...todo, [e.target.name]: e.target.value })
    }
    const addtodo = () => {
        setData([...data, todo])
    }
    return (
        <div className='my-4'>
            <div className='container col-md-6 border rounded p-4'>
                <span className='text-center text-warning h4'>Add a Todo here</span>
                <div class="mb-3 my-2">
                    <label for="formGroupExampleInput" class="form-label">Enter a task </label>
                    <input type="text" class="form-control" name='task' onChange={handleChange} />
                </div>
                <div class="mb-3">
                    <label for="formGroupExampleInput2" class="form-label">Enter Discription</label>
                    <input type="text" class="form-control" name='desc' onChange={handleChange} />
                </div>
                <button type="button" class="btn btn-warning" onClick={addtodo}>Add Your task</button>
            </div>
            <ShowTodo data={data} />
        </div>
    )
}

export default Addtodo