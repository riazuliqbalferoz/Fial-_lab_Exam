import {Navbar,Nav} from 'react-bootstrap'

function Header(){
    return(
    
        <div>
            <Navbar bg="dark" variant="dark">
   
    <Navbar.Brand href="Registration">Welcome To Job Portal</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/regist">Contract</Nav.Link>
      <Nav.Link href="#features">Employ Register</Nav.Link>
    </Nav>
  
  </Navbar>
        </div>
    )
    
    }
    export default Header;