import users from "../../users/users";
import {Link,useNavigate} from "react-router-dom"

function Home() {

    let histroy = useNavigate(); 

    const handleEdit = (id, name , gmail , password) =>{
        localStorage.setItem("id",id);
        localStorage.setItem("name",name);
        localStorage.setItem("gmail",gmail);
        localStorage.setItem("password",password);


    }

    const handleDelete =(id)=> {
        var index = users.map(function(e){
            return e.id
        }).indexOf(id)

        users.splice(index,1)

        histroy("/");
    }

  return (
    <div className="">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gmail</th>
            <th scope="col">Password</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users && users.length > 0
            ? users.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.gmail}</td>
                    <td>{item.password}</td>
                    <td>
                    <Link to ={"/edit"}>
                    <button className="btn btn-primary" onClick={()=>handleEdit(item.id,item.name,item.gmail,item.password)}>edit</button>
                    </Link>
                    <button className="btn btn-danger" onClick={()=>handleDelete(item.id)}>Delete</button>
                    </td>
                  </tr>
                );
              })
            : "No any data found"}
        </tbody>
      </table>
      <br></br>
      <br></br>
      <Link className="" to="/create">
      <button>Create </button>
      </Link>
    </div>
  );
}
export default Home;
