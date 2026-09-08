import { useState } from "react"

const App = () => {


  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [image, setImage] = useState('')
  const [role, setRole] = useState('')

  const localData = JSON.parse(localStorage.getItem('all-Users')) || []

  const [allUser, setAllUser] = useState(localData)

  const submitHandler = (e) => {
    e.preventDefault()

    const oldUser = [...allUser]
    oldUser.push({ userName, userEmail, image, role })
    setAllUser(oldUser)
    localStorage.setItem('all-Users', JSON.stringify(oldUser))

    setUserName('')
    setImage('')
    setUserEmail('')
    setRole('')
  }

  const deleteHandler = (idx) => {
    const copyUsers = [...allUser]

    const conf = confirm('Are you really want to Delete this element')

    if (conf) {
      copyUsers.splice(idx, 1)
    }
    else {
      alert('element not Deleted')
    }

    setAllUser(copyUsers)
    localStorage.setItem('all-Users', JSON.stringify(copyUsers))
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

      <div className="flex flex-wrap h-full">

        {allUser.map(function (elem, idx) {
          return <div key={idx}>
            <div className="h-60 w-55 bg-amber-50 m-4 rounded flex flex-col items-center justify-center flex-wrap gap-1 overflow-auto scrollbar-none">
              <img className="h-20 w-20 rounded-full object-cover " src={elem.image} alt="" />
              <h1 className="text-black font-bold text-xl capitalize leading-tight wrap-break-word">{elem.userName}</h1>
              <h4 className="text-blue-600 font-semibold capitalize text-lg leading-tight wrap-break-word ">{elem.role}</h4>
              <h6 className="text-black font-semibold text-sm leading-tight wrap-break-word">{elem.userEmail}</h6>

              <button
                onClick={() => {
                  deleteHandler(idx)
                }}
                className="bg-red-500 px-5 py-1 rounded-2xl active:scale-95 font-medium mt-1"> Remove</button>
            </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default App

