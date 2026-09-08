import { useState } from "react"
import Cards from "./components/Cards";


const App = () => {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('')

  const [allUser, setAllUser] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setAllUser([...allUser, { userName, userEmail, image, role }])

    setUserName('')
    setImage('')
    setUserEmail('')
    setRole('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUser]
    copyUsers.splice(idx, 1)
    setAllUser(copyUsers)
  }

  return (
    <div className=" bg-black  text-white min-h-screen">

      <form
        onSubmit={(e) => {
          submitHandler(e)
        }}
        className="text-white p-4 flex flex-wrap gap-5 ">

        <input
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value)
          }}
          className="border-2 outline-none px-5 py-2 mt-3 w-[48%] rounded font-semibold text-lg "
           required
          type="text"
          placeholder="Enter your name" />

        <input
          value={image}
          onChange={(e) => {
            setImage(e.target.value)
          }}
          className="border-2 outline-none px-5  py-2 mt-3 w-[48%] rounded font-semibold text-lg"
          required
          type="text"
          placeholder="Enter image url" />

        <input
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value)
          }}
          className="border-2 outline-none px-5  py-2 mt-3 w-[48%] rounded font-semibold text-lg"
          required
          type="text"
          placeholder="Enter your email" />

        <input
          value={role}
          onChange={(e) => {
            setRole(e.target.value)
          }}
          className="border-2 outline-none px-5  py-2 mt-3 w-[48%] rounded font-semibold text-lg"
           required
          type="text"
          placeholder="Enter your Role" />

        <button className="bg-green-500 w-[98%] px-5 py-3 rounded text-lg font-semibold active:scale-95">Create User</button>
      </form>

      <div className="flex flex-wrap f-full">

        {allUser.map(function (elem, idx) {
          return <Cards elem={elem} idx={idx} deleteHandler={deleteHandler}/>
        })}

      </div>
    </div>
  )
}

export default App

