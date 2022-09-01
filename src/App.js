import logo from './logo.svg';
import './css/sb-admin-2.css';
import Dashboard from './Dashboard';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Users from './Users';
import Products from './Products';
import Login from './Login';
import Portal from './Portal';
import Createuser from './Createuser';
import Userview from './Userview';
import Edituser from './Edituser';




function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="users/:userid" element={<Userview />} />
          <Route path="user/edit/:userid" element={<Edituser />} />
          <Route path="products" element={<Products />} />
          <Route path="create-users" element={<Createuser />} />
          
          

        </Route>


      </Routes>


    </BrowserRouter>

  );
}

export default App;
