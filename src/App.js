import React from "react";
import "./App.css";
import {
    Navbar,
    Header,
    Brand,
    Gtp3,
    Features,
    Possibility,
    CTA,
    Blogs,
    Footer,
} from "./component-imports";

const App = () => {
    return (
        <div class="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Gtp3 />
            <Features />
            <Possibility />
            <CTA />
            <Blogs />
            <Footer />
        </div>
    );
};

export default App;
