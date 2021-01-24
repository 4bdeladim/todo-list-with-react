import React, { useState } from 'react'
import { addTodo } from '../redux/actions'
import uuid from 'uuid/v4'
import { useDispatch } from 'react-redux';
const TodoInput = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    return (
        <div>
            <h3>TodoInput</h3>
            <div className="row m-2">
                <input
                    onChange={(e) => setName(e.target.value) }
                type="text" className="form-control" required/>
                <button
                    onClick={() => {
                        dispatch(addTodo(
                            {
                                id: uuid(),
                                name: name
                            }
                        ))
                    setName('')
                }}
                className="btn btn-primary mt-2">Add todo</button>
            </div>
        </div>
    )
}

export default TodoInput
