import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import OtpInput from './OtpInput'

function App() {

  return (
    <>
      <OtpInput onSubmit={otp => console.log(otp)} />
    </>
  )
}

export default App
