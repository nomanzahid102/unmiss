import {Routes, Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './GlobalStyle.css';
import Home from "./pages/Home";
import About from "./pages/About";
import SeoCourse from "./pages/SeoCourse";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";


function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/seo-course" element={<SeoCourse/>}/>
                <Route path="/blog" element={<Blog/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </div>
    );
}

export default App;
