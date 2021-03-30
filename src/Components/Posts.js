import React from "react";
import './Posts.css';
import axios from 'axios';
import { useHistory } from "react-router";
const Posts = (props) => {
	const handleDelete=()=>{
		axios({
			method:'post',
			url:'http://localhost/image-backend/DeleteImage.php',
			data:{ImageId:props.imgId},
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
            console.log(response.data);
			window.location.reload(false);
		})
		.catch(function(response){
			console.log(response);

		});
	}
	return (
       <div className="cont" style={{width:"10vw",display:"inline"}}>
		<img className="hello" src={`data:image/jpeg;base64,${props.imgsrc}`}/>
		<div class="middle">
    <button className="btn btn-danger btn-block" onClick={handleDelete}>Delete Image</button>
  </div>
        </div>

	);
};
export default Posts;
