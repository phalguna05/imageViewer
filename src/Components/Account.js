import React,{useState,useEffect} from 'react';
import Login from './Login';
import NavBar from './NavBar';
import "./Account.css";
import { useHistory } from 'react-router';
import axios from 'axios';
import Posts from './Posts';
const Account=()=>{
    const history=useHistory();
    const user=localStorage.getItem("user");
    const [users,setUsers]=useState({UserId:0,UserName:"",Email:"",Password:""});
    const [img,setImg]=useState({file:null,username:""});
    const [images,setImages]=useState([]);
      useEffect(() => {
    
        axios({
			method:'post',
			url:'http://localhost/image-backend/data.php',
			data:{Username:user},
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
            console.log(response.data);
            if(response.data!="false")
			setUsers({UserId:response.data.UserId,UserName:response.data.UserName,Email:response.data.Email,Password:response.data.Password});
		})
		.catch(function(response){
			console.log(response);

		});
        axios({
			method:'post',
			url:'http://localhost/image-backend/retrive.php',
			data:{Username:user},
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
            setImages(response.data);
		})
		.catch(function(response){
			console.log(response);

		});

        
        }, [])
        
    if(user==""){
        return(
            <Login/>
        )
    }
    else{
        const fileChangedHandler=(e)=>{
            setImg({file:e.target.files[0],username:users.UserName});
        }
        const onUpload=(e)=>{
            var fd=new FormData();
            fd.append('image',img.file);
            fd.append('username',img.username);

            axios({
                method:'post',
                url:'http://localhost/image-backend/upload.php',
                data:fd,
                headers:{'content-type':'multipart/form-data'}

            })
            .then(function(response){
                console.log(response);
                window.location.reload(false);
            })
            .catch(function(response){
                console.log(response);
            });
        }
      
        return(
            <>
            <NavBar/>
            <div className="container1" style={{overflow:"hidden"}}>
                <h3>Account</h3>
                <img style={{width:"10vw",height:"10vw"}}src="https://www.flaticon.com/svg/vstatic/svg/3011/3011270.svg?token=exp=1616927129~hmac=de0391e9b6e15cb495f902414f43925f"></img>
                <h6>{users.UserName}</h6>
                <h6>{users.Email}</h6>
                <input type="file" className="inp" style={{marginTop:"5vh",marginLeft:"6vh"}}onChange={fileChangedHandler}/>
                <button className="btn btn-success " onClick={onUpload} style={{backgroundColor:"black",marginTop:"15px"}}>Upload Image</button>

            </div>
            <div className="container2">
                {images.map((image)=>{
                    return <Posts imgId={image.ImageId} imgsrc={image.Image} UserName={image.UserName}/>
                })}
            </div>
            </>
        )
    }
}
export default Account;