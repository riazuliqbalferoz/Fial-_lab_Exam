import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {Button} from 'react-bootstrap'
import {Table }from 'react-bootstrap'
function SearchUser(){
    return(
    
        <>
    <div className="login col-sm-6 offset-sm-3  text-white ">
    <h1>Search User</h1>
       <div class="row py-3">
           <div class="col-8">
           <input type="text" className="form-control" Placeholder="Enter User Eamil"></input>
           </div>
           <div class="col-4 text-left">
           <Button> Search </Button>
           </div>
           
       </div>
       <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Email</th>
      <th>Id</th>
      <th>Contract</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td class="text-center">
          <Button class="btn-danger"> Delete </Button>  
          <Button> Edit </Button></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td class="text-center">

          <Button class="btn-danger"> Delete </Button>  
          <Button> Edit </Button></td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
      <td class="text-center">
          <Button class="btn-danger"> Delete </Button>  
          <Button> Edit </Button></td>
    </tr>
  </tbody>
</Table>
       
    </div>

    <br></br>
    </>
    )
    
    }
    export default SearchUser;