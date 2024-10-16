import React from 'react'

const Dummy = () => {
  return (
    <>
    {/* <style jsx global> */}
    <style jsx>
      {`
      .dummy {
        background-color: yellow;
      }
      `}
    </style>
    <div className='dummy'>I am dummy</div>
    </>
  )
}

export default Dummy