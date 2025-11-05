import React from 'react'

function Register() {
  return (
    <>
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">

                  <div  className="card shadow p-4" style={{ width: "25rem", borderRadius: "15px" }}>
                    <h2 className='text-center '> User Register </h2>
       

        <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
              <input type="text"className="form-control rounded-3 mb-3"
            id="name"placeholder="Enter your name"
          />
        <label htmlFor="name" className="form-label fw-bold">
            Email
          </label>
              <input type="text"className="form-control rounded-3 mb-3"
            id="name"placeholder="Enter your Email"
          />
        <label htmlFor="name" className="form-label fw-bold">
            Password
          </label>
              <input type="text"className="form-control rounded-3 mb-3"
            id="name"placeholder="Enter your password"
          />



                  </div>


    

                 
        </div>
    
    </>
  )
}

export default Register






























