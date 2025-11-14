import React from 'react'

function test(){
    console.log(import.meta.env.VITE_MAIL_KEY)
}

function Login() {
  return (
    <div>
      <button onClick={test} type="button">Hello</button>
    </div>
  )
}

export default Login
