
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/Post/PostList";
import PostDetails from "./components/Post/PostDetails";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="bg-gray-900 min-h-screen">
                <Navbar />
                <Routes>
                    <Route path="/" element={<PostList />} />
                    <Route path="/post/:id" element={<PostDetails />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

