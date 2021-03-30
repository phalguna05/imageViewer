import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import NavBar from './NavBar';
import axios from 'axios';
const Login = () => {
	const [user, setUser] = useState({ Username: "",Email:"", Password: "" });
	const [signup,setSignup]=useState(true);
	const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
	const history = useHistory();
	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setUser({ ...user, [name]: value });
	};
	const handleSign = (e) => {
		setSignup(false);
	};
	const handleSignUP=(e)=>{
		var error=0;
				if(user.Username.length<8)
				{
					alert("username must be atleast 8 characters.");
					setUser({ ...user, Username: "" });
					error=1;
				}
				if(!validEmailRegex.test(user.Email))
				{
					alert("Please enter correct email address.");
					setUser({ ...user, Email: "" });
					error=1;
				}
				if(user.Password.length<8)
				{
					alert("Password must be atleast 8 characters.");
					setUser({ ...user, Password: "" });
					error=1;
				}

		if(error==0)
		{
		axios({
			method:'post',
			url:'http://localhost/image-backend/insert.php',
			data:user,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
			console.log(response);
		})
		.catch(function(response){
			console.log(response);
		});
		setSignup(true);
	}
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method:'post',
			url:'http://localhost/image-backend/login.php',
			data:user,
			headers:{'content-type':'application/json'}
		})
		.then(function(response){
			if(response.data=="true"){
				localStorage.setItem("user",user.Username);
				console.log(localStorage.getItem("user"));
				window.location.reload(false);
			}
			else{
				alert("Invalid Credentials");
				setUser({Username:"",Email:"",Password:""});
			}
		})
		.catch(function(response){
			console.log(response);
		});
		
	
	};
	return (
		<>
		<NavBar/>
		{signup?
			<div className="container">
				<img style={{width:"10vw",height:"10vw"}}src="https://www.flaticon.com/svg/vstatic/svg/3011/3011270.svg?token=exp=1616927129~hmac=de0391e9b6e15cb495f902414f43925f"></img>
				<h4>Login</h4>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="username"
						name="Username"
						placeholder="Username"
						value={user.Username}
						onChange={handleChange}
					/>
				</div>
				<div class="form-group">
					<input
						type="password"
						class="form-control"
						id="password"
						name="Password"
						placeholder="Password"
						value={user.Password}
						onChange={handleChange}
					/>
				</div>
				<button
					type="button"
					className="btn btn-outline-secondary btn-block"
					onClick={handleSubmit}
				>
					Login
				</button>
				<button
					type="button"
					className="btn btn-outline-secondary btn-block"
					onClick={handleSign}
				>Sign Up</button>
			
			</div>
			:
			<div className="container">
				<img style={{width:"10vw",height:"10vw"}}src="https://www.flaticon.com/svg/vstatic/svg/3011/3011270.svg?token=exp=1616927129~hmac=de0391e9b6e15cb495f902414f43925f"></img>
				<h4>SignUp</h4>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="username"
						name="Username"
						placeholder="Username"
						value={user.Username}
						onChange={handleChange}
					/>
				</div>
				<div class="form-group">
					<input
						type="text"
						class="form-control"
						id="email"
						name="Email"
						placeholder="Email"
						value={user.Email}
						onChange={handleChange}
					/>
				</div>
				<div class="form-group">
					<input
						type="password"
						class="form-control"
						id="password"
						name="Password"
						placeholder="Password"
						value={user.Password}
						onChange={handleChange}
					/>
				</div>
				
				<button
					type="button"
					className="btn btn-outline-secondary btn-block"
					onClick={handleSignUP}
				>
					Sign Up
				</button>

			</div>
		}
		</>
	);
};
export default Login;
