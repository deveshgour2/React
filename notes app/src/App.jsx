import { useState } from "react"


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task]
    copyTask.push({ title, details })

    setTask(copyTask)

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }


  return (
    <div className="min-h-screen lg:flex text-white bg-black p-3 gap-5">

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}

        className=" lg:w-1/2 flex justify-start items-start flex-col gap-5">

        <h1 className="text-3xl font-bold pb-2 text-white">Add Notes</h1>

        <input type="text"
          placeholder="Enter Notes Title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          className=" w-full bg-transparent text-white font-medium text-[20px] border-2 px-5 py-2 rounded outline-none" />

        <textarea
          name="" id=""
          placeholder="Enter Notes Detail "
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
          className="border-2 rounded  px-5 py-2 text-white text-[17px] font-medium outline-none w-full h-30 ">
        </textarea>

        <button
          className="bg-white w-full px-5 py-2 font-medium text-[18px] text-black active:scale-95 outline-none">
          Add Notes
        </button>
      </form>

      <div className="lg:w-1/2 border-l-2 px-10 flex flex-col gap-6 ">

        <h1 className="text-white text-3xl font-bold  ">Recent Notes</h1>
        <div className="flex flex-wrap flex-col gap-8">


          <div className="flex flex-wrap items-start gap-5 mt-6">
            {task.map(function (elem, idx) {

              return <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                <div>

                  <h3 className="text-2xl leading-tight wrap-break-words font-bold">{elem.title}</h3>

                  <p className="text-gray-700 leading-tight mt-5 text-xs font-semibold">{elem.details}</p>

                </div>
                <button
                  onClick={() => {
                    deleteNote(idx)
                  }}
                  className="bg-red-500 px-3 text-white cursor-pointer active:scale-95 rounded font-semibold">Delete</button>

              </div>
            })}
          </div>

        </div>

      </div>
    </div>

  )
}

export default App
