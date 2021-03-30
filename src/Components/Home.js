import React from "react";
import NavBar from "./NavBar";
import { Carousel } from "react-bootstrap";
import { useHistory } from "react-router";
const Home = () => {
	const history=useHistory();
	if("user" in localStorage){
		console.log("");
			
		}
		else{
			localStorage.setItem("user","");
		}
		
		const handleStart=(e)=>{
			console.log("hello");
			e.preventDefault();
	
			history.push("/Images");
		}
	return (
		
		<>
			<NavBar />
			<div className="image" style={{ position: "relative" }}>
				<h1
					style={{
						position: "absolute",
						zIndex: "8",
						color: "white",
						marginTop: "10%",
						alignSelf:"center",
						marginLeft:"40%",
						fontFamily:"cursive"
					}}
				>
					Image Viewer
				</h1>
				<h5
					style={{
						position: "absolute",
						zIndex: "8",
						color: "white",
						marginTop: "15%",
						alignSelf:"center",
						marginLeft:"36%",
						fontFamily:"cursive"
					}}
				>
					Upload your work and check others work.
				</h5>
				<button className="btn btn-outline-dark btn-md "onClick={handleStart} style={{position: "absolute",
						zIndex: "8",
						color: "white",
						marginTop: "18%",
						alignSelf:"center",
						marginLeft:"-5%",
						
		}}>Get Started</button>

			
				<Carousel>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100 h-90"
							src="https://i.pinimg.com/originals/b8/7f/92/b87f92659e1b862ef0212086e6af7efc.jpg"
							alt="First slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100 h-100"
							src="https://i.pinimg.com/originals/cf/41/3e/cf413e4a7bd6b503ce7828fb6f7b7338.jpg"
							alt="Second slide"
						/>
					</Carousel.Item>
					<Carousel.Item interval={3000}>
						<img
							className="d-block w-100 h-100"
							src="https://i.pinimg.com/originals/3b/8a/d2/3b8ad2c7b1be2caf24321c852103598a.jpg"
							alt="Third slide"
						/>
					</Carousel.Item>
				</Carousel>
			</div>
		</>
	);
};
export default Home;
