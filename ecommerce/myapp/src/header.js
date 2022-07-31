import React from 'react'

function Header({first}) {
  
console.log("eee",first)
const sendCategory = (e) => {
console.log("eee",e.target.id)
  }
  return (

    <div className='Header'>
      <h1>Products</h1>
      <button>Electronics</button>
      <button>jewellery</button>
      <button id = "men" onClick = {(e) => sendCategory(e)}>men's clothing</button>
      <button>women's clothong</button>

</div>


  )
}

export default Header

