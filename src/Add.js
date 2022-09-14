import React from 'react'

function Add(props) {
  return(
   <>
   <li className="shadow p-2 my-2 col-sm-9">{props.value}</li>
  <button className="btn btn-info my-2 col-sm-2 offset-1 fw-bold" onClick={() => { props.sendData(props.id) }}>X</button>
   </>
  )
}
export default Add;