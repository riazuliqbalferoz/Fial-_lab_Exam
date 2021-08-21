
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {Button} from 'react-bootstrap'
function Register(){
    return(
        <>
        <div className="login col-sm-6 offset-sm-3  text-white">
        <h1>Employee Register</h1>
        <label class="p-3"> Enter Emplyee Name</label>
        <input type="text" className="form-control" Placeholder="name"></input>
        <label class="p-3"> Enter Comapnay Name</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        <label class="p-3"> Enter Contract Number</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        <label class="p-3"> Enter Employee Email</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        <label class="p-3"> Enter Your Password</label>
        <input type="password" className="form-control" Placeholder="Password"></input>
<br></br>
        <Button> Confirm </Button>
    </div>
    <br></br>
</>

    )
    
    }
    export default Register;