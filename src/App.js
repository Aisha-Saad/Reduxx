import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Product from "./Product";
import DashBord from "./DashBord";
import Cart from "./Cart";
import RootLayout from "./RootLayout";

function Cartt() {
  return <h1>cart</h1>;
}

function App() {
  // const router=createBrowserRouter(createRoutesFromElements(
  //   <Route path='/' element={<RootLayout/>}>
  //     <Route index element= {<DashBord/>}></Route>
  //     <Route path='cart' element={<Cart/>}></Route>
  //   </Route>
  // ))

  return (
    <div className="App">
      <Router>
        <Link to="/cart"></Link>

        <Routes>
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
      {/* <RouterProvider router={router} /> */}
      <Product />
    </div>
  );
}

export default App;
