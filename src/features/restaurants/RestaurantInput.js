import React, { useState } from "react";

function RestaurantInput({ handleResturantSubmit }) {
  const [text, setText] = useState("")

  function onResturantSubmit(e){
    e.preventDefault()
    handleResturantSubmit(text)
    setText("")
  }
  return (
    <div>
      <form onSubmit={onResturantSubmit}>
        <label>
          Name
          <input type="text" onChange={e => setText(e.target.value)} value={text}></input>
        </label>
        <button type="submit">add restaurant</button>
      </form>
    </div>
  );
}

export default RestaurantInput;
