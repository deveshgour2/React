import { Bookmark } from 'lucide-react'


const Card = (props) => {
  return (
     <div className="card">
      <div>
        <div className="top">
            <img src={props.logo} alt="" />
             <button>Save <Bookmark size={12} /> </button>
        </div>
        <div className="center">
            <h1>{props.company}<span>{props.datePosted}</span></h1>
            <h3>{props.post}</h3>
            <div className='tags'>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>{props.pay}</h4>
          <p>{props.location}</p>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  )
}

export default Card
