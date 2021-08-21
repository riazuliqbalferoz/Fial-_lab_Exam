import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {Button} from 'react-bootstrap'
function Login(){
return(
<>
    <div className="login col-sm-6 offset-sm-3  text-white">
        <h1>Login Page</h1>
        <label class="p-3"> Enter Your Eamail</label>
        <input type="text" className="form-control" Placeholder="name"></input>
        <label class="p-3"> Enter Your Password</label>
        <input type="password" className="form-control" Placeholder="Password"></input>
<br></br>
        <Button> Login </Button>
    </div>

    <br></br>
    </>
)

}
export default Login;