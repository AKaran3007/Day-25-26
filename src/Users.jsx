import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Users() {
    // const users = [
    //     {
    //         id: 1,
    //         name: "Karan",
    //         position: "Student",
    //         office: "Guvi",
    //         age: "23",
    //         startDate: "03/06/2022",
    //         salary: "35000",

    //     },

    //     {
    //         id: 2,
    //         name: "ASP",
    //         position: "Student",
    //         office: "Guvi",
    //         age: "24",
    //         startDate: "03/07/2022",
    //         salary: "45000",

    //     },

    //     {
    //         id: 3,
    //         name: "ASP Karan",
    //         position: "Student",
    //         office: "Guvi",
    //         age: "25",
    //         startDate: "03/08/2022",
    //         salary: "55000",

    //     },



    // ]
    const [users, setUsers] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        setLoading(true)
        let users = await axios.get("https://62ab049e371180affbdf40f1.mockapi.io/users");
        setUsers(users.data)
        setLoading(false)
    };

    let userDelete = async (id) => {
        try {
            let ask = window.confirm("Are You Sure? Do You Want To Delete This Data?");
            if (ask) {
                await axios.delete(`https://62ab049e371180affbdf40f1.mockapi.io/users/${id}`)
                loadData();
            }

        } catch (error) {

        }
    }

    return (
        <div class="container-fluid">


            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Users</h1>
                <Link to="/portal/create-users" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
            </div>

            {
                isLoading ? <h1>Loading...</h1> :

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Start date</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {


                                            users.map((user, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.position}</td>
                                                        <td>{user.office}</td>
                                                        <td>{user.age}</td>
                                                        <td>{user.startDate}</td>
                                                        <td>${user.salary}</td>
                                                        <td>
                                                            <Link to={`/portal/users/${user.id}`} className="btn btn-sm btn-info">View</Link>  &nbsp;
                                                            <Link to={`/portal/user/edit/${user.id}`} className="btn btn-sm btn-warning">Edit</Link> &nbsp;
                                                            <button onClick={() =>
                                                                userDelete(user.id)
                                                            } className="btn btn-sm btn-danger">Delete</button>
                                                        </td>
                                                    </tr>
                                                )

                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>}

        </div>
    )

}
export default Users;