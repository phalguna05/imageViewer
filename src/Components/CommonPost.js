import React from "react";
import './Posts.css';
import axios from 'axios';
const Posts = (props) => {
	return (
       <div className="cont" style={{width:"10vw",display:"inline"}}>
		<img className="hello" src={`data:image/jpeg;base64,${props.imgsrc}`}/>
		<div class="middle">
    <label>Publisher:</label>
    <label>{props.UserName}</label>
  </div>
        </div>

	);
};
export default Posts;
