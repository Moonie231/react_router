import './App.css';
import Login from "./pages/login";
import {Route, Routes} from "react-router-dom";
import Register from "./pages/register";
import Home from "./pages/home/home";
import ListBlogs from "./pages/blog/listBlog";
import AddBlogs from "./pages/blog/addBlog";

function App() {
  return (
    <>
      <div className="container-fluid">
          <Routes>
              <Route path={''} element={<Login/>}/>
              <Route path={'register'} element={<Register/>}/>
              <Route path={'home'} element={<Home/>}>
                  <Route path={''} element={<ListBlogs/>}/>
                  <Route path={'add-blog'} element={<AddBlogs/>}/>
              </Route>
          </Routes>
      </div>
    </>
  );
}

export default App;
