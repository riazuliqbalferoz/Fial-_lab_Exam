import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {Button} from 'react-bootstrap'

function Addjob(){
    return(
    
        <>
        <div className="login col-sm-6 offset-sm-3  text-white">
        <h1>Add New Job</h1>
        <label class="p-3"> Enter Company Name</label>
        <input type="text" className="form-control" Placeholder="name"></input>
        <label class="p-3"> Enter Job Tittle</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        <label class="p-3"> Enter Job Location</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        <label class="p-3"> Enter Employee Salary</label>
        <input type="text" className="form-control" Placeholder="name"></input>

        
<br></br>
        <Button> Confirm Job </Button>
    </div>
    <br></br>
</>
    )
    
    }
    export default Addjob;