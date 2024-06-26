import React from 'react'
import '../resources/default-layout.css'
function DefaultLayout(props) {
  return (
    <div className='layout'>

      <div className="header d-flex justify-content-between align-items-center">
           <div>
            <h1 className="logo">SHEY MONEY</h1>
           </div>
           <div>
            <h1 className="username">User Name</h1>
           </div>
      </div>

      <div className="content">
             {props.children}
      </div>
         

    </div>
  )
}

export default DefaultLayout