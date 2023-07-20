import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";
import { Navbar } from "./app/Navbar";
import { PostsList } from "./features/posts/PostsList";

function App() {
    return (
        <Router>
            <Navbar />
            <div className="App">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Fragment>
                                <PostsList />
                            </React.Fragment>
                        }
                    />
                    <Route path="/*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
