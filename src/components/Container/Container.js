import React from "react";
import './Container.css';
import Landing from "../Landing/Landing";
import About from "../About/About";
import Contact from "../Contact/Contact";
import News from "../News/News";
import Publications from "../Publications/Publications";
import FeaturedPublications from "../FeaturedPublications/FeaturedPublications";
import AcademicTalks from "../AcademicTalks/AcademicTalks"; 

const Container = () => {
    return (
        <div className="container">
            <Landing />
            <About />
            <News />
            <Publications />
            <FeaturedPublications />
            <AcademicTalks /> 
            <Contact />
        </div>
    );
};

export default Container;
