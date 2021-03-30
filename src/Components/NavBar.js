import React from "react";
import { Navbar,Nav } from 'react-bootstrap';
import { useHistory } from "react-router";
const NavBar = () => {
	const history=useHistory();
	const handleLogout=()=>{
		localStorage.clear("user");
		history.push("/");
	}
	return (
		<Navbar bg="dark" expand="lg">
			<Navbar.Brand href="/home" style={{color:"white"}}>ImageViewer</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav"/>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/Images" style={{color:"white"}}>Gallery</Nav.Link>
					<Nav.Link href="/Account" style={{color:"white"}}>Account</Nav.Link>

				</Nav>
				<button className="btn btn-outline-danger btn-md" style={{color:"white"}}onClick={handleLogout}>Logout</button>
			</Navbar.Collapse>
		</Navbar>
	);
};
export default NavBar;
