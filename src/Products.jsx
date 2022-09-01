import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products () {
    const [Foods, setUsers] = useState([]);
    

    useEffect(() => {
        loadData()
    }, [])

    let loadData = async () => {
        
        let Foods = await axios.get("https://62ab049e371180affbdf40f1.mockapi.io/Foods");
        setUsers(Foods.data)
        
    };

  
    return (
        <div class="container-fluid">


            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">FISH</h1>
                
            </div>

            {
                

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
                                            <th>FishName</th>
                                            <th>ShopName</th>
                                            <th>Street</th>
                                            <th>Country</th>
                                            
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        <tr>
                                        <th>S.No</th>
                                            <th>FishName</th>
                                            <th>ShopName</th>
                                            <th>Street</th>
                                            <th>Country</th>
                                        </tr>
                                    </tfoot>
                                    <tbody>
                                        {


                                            Foods.map((Foods, index) => {
                                                return (
                                                    <tr>
                                                        <td>{index + 1}</td>
                                                        <td>{Foods.fishname}</td>
                                                        <td>{Foods.shopname}</td>
                                                        <td>{Foods.address}</td>
                                                        <td>{Foods.country}</td>
                                                        
                                                       
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
export default Products;