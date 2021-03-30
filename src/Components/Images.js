import React, { useState,useEffect} from 'react';
import axios from 'axios';
import CommonPost from './CommonPost';
import NavBar from './NavBar';
const Images=()=>{
    const [images,setImages]=useState([]);
    const [request,setRequest]=useState({Publisher:""});
    useEffect(() => {
    axios({
			method:'post',
			url:'http://localhost/image-backend/retriveAll.php',
			data:{Username:"hello"},
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
            setImages(response.data);
		})
		.catch(function(response){
			console.log(response);

		});

        
        }, [])
        const handleRequest=(e)=>{
            const name = e.target.name;
		const value = e.target.value;
            setRequest({...request,[name]:value});
        }
        const handleSubmit=(e)=>{
            e.preventDefault();
             

        }
    return(
        <>
        <NavBar></NavBar>
        <div class="input-group" style={{width:"40vw",marginLeft:"30vw",marginTop:"10px"}}>
  <input type="search" class="form-control rounded" placeholder="Search for username.." aria-label="Search"
    aria-describedby="search-addon" name="Publisher" onChange={handleRequest} />
</div>
        <div className="containerr" style={{marginTop: "10px",
	marginLeft: "20px",

	width: "95vw",
	height: "89vh"}}>
        
                {images.map((image)=>{
                    if(request.Publisher!=""){
                        if(request.Publisher==image.UserName){
                            return <CommonPost imgsrc={image.Image} UserName={image.UserName}/>
                        }
                    }
                    else{
                    return <CommonPost imgsrc={image.Image} UserName={image.UserName}/>
                    }
                })}
            </div>
            </>
    )
}
export default Images;