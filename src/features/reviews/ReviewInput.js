import React, { useState } from "react";
import Reviews from "./Reviews";

function ReviewInput({ restaurant, handleReviewSubmit }) {

  const [text, setText] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    handleReviewSubmit(text)
    setText("")
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
      <label>
        Comment
        <textarea value={text} onChange={e => setText(e.target.value)}/>
      </label>
      <button type="submit">Add Review</button>
     </form>
    </div>);
}

export default ReviewInput;
