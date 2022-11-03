import React from "react";

function Comment(props) {
  console.log(props.hiddenProp)
  return <div className="comment">{props.commentText}</div>;
}

export default Comment;
