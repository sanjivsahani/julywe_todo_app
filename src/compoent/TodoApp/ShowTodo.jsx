import React, { useState } from 'react'

const ShowTodo = ({ data }) => {
    const [editData,setEditData]=useState({})

    const hadnleEdit = (ele, ind) => {
        // console.log(ele, ind)
        setEditData(ele)
        console.log(editData)
    }
    const handleChange = () => {
        //
    }
    return (
        <div className='container col-md-8 my-2'>
            <div className=''>
                <div class="row">
                    {data.map((ele, ind) => {
                        return <>
                            <div class="col-sm-6">
                                <div class="card">
                                    <div class="card-body">
                                        <h5 class="card-title">{ele.task}</h5>
                                        <p class="card-text">{ele.desc}</p>
                                        <a type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => hadnleEdit(ele, ind)}>Edit </a>
                                    </div>
                                </div>
                            </div>
                        </>
                    })}
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div className='container border rounded p-3'>
                                <span className='text-center text-warning h4'>Add a Todo here</span>
                                <div class="mb-3 my-2">
                                    <label for="formGroupExampleInput" class="form-label">Enter a task </label>
                                    <input type="text" class="form-control" name='task' onChange={handleChange}   value = {editData.task}/>
                                </div>
                                <div class="mb-3">
                                    <label for="formGroupExampleInput2" class="form-label">Enter Discription</label>
                                    <input type="text" class="form-control" name='desc' onChange={handleChange} value = {editData.desc} />
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowTodo