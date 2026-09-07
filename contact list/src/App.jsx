import { useState } from "react"

const App = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [allUser, setAllUser] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const oldUser = [...allUser]
    oldUser.push({ name, email, contact })
    setAllUser(oldUser)

    setName('')
    setEmail('')
    setContact('')
  }

  return (
    <div   >
      <div className="bg-black h-screen w-full p-10 text-white  flex gap-10 flex-col">

        <form
          onSubmit={(e) => {
            submitHandler(e)
          }}
          className="flex gap-10">

          <input
            className="outline-none bg-gray-800 p-3 font-semibold rounded text-lg" type="text" placeholder="Enter  Name"
            value={name}
            required
            onChange={(e) => {
              setName(e.target.value)
            }} />

          <input className="outline-none bg-gray-800 p-3 font-semibold rounded text-lg" type="text" placeholder="Enter email"
            value={email}
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }} />

            <input
            className="outline-none bg-gray-800 p-3 font-semibold rounded text-lg" type="text" placeholder="Enter contact"
            value={contact}
            required
            onChange={(e) => {
              setContact(e.target.value)
            }} />

          <button className="bg-green-500 py-2 px-5 rounded text-xl active:scale-95">Submit</button>
        </form>
        {
          allUser.map(function(elem , idx){
              return <div key={idx} className=" flex justify-between items-center gap-5 rounded bg-white text-black w-90 px-5 py-1 overflow-auto scrollbar-none">
               <div>
                 <h1 className="text-lg font-bold capitalize leading-tight">{elem.name}</h1>
                <h4 className="font-semibold ">{elem.contact}</h4>
               </div >
                <p className=" wrap-break-word text-lg font-semibold ">{elem.email}</p>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default App
