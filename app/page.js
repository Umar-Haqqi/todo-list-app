"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [mainTask, setMainTask] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, description }]);
    setTitle("");
    setDescription("");
    console.log(mainTask);
  }

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  }

  let renderTask = <h2>No Task Available</h2>

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-5'>
          <div className='mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>Task: {t.title}</h5>
            <p className='text-xl font-medium'>{t.description}</p>
          </div>
          <button onClick={() => {
            deleteHandler(i)
          }}
            className='bg-red-400 text-white px-4 py-2 rounded font-bold  '>
            Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white py-5 text-3xl font-bold text-center'>
        My TODO-List
      </h1>
      <form onSubmit={SubmitHandler}>
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-12 px-4 py-2 border-rounded'
          placeholder='Enter title here'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type='text'
          className='text-2xl border-zinc-800 border-2 m-12 px-4 py-2 border-rounded'
          placeholder='Enter Description here'
          value={description}
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-xl mx-12 my-6  font-bold rounded'>
          Add Task
        </button>
      </form>
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page
