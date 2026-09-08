

const Cards = (props) => {
  return (
    <div>
         <div className="h-60 w-55 bg-amber-50 m-4 rounded flex flex-col items-center justify-center flex-wrap gap-1 overflow-auto scrollbar-none">
              <img className="h-20 w-20 rounded-full object-cover " src={props.elem.image} alt="" />
              <h1 className="text-black font-bold text-xl capitalize leading-tight wrap-break-word">{props.elem.userName}</h1>
              <h4 className="text-blue-600 font-semibold capitalize text-lg leading-tight wrap-break-word ">{props.elem.role}</h4>
              <h6 className="text-black font-semibold text-sm leading-tight wrap-break-word">{props.elem.userEmail}</h6>

              <button
                onClick={() => {
                  props.deleteHandler(props.idx)
                }}
                className="bg-red-500 px-5 py-1 rounded-2xl active:scale-95 font-medium mt-1"> Remove</button>
            </div>
    </div>
  )
}

export default Cards
