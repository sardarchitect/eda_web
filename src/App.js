import React from "react";
import { Switch, Route } from "react-router-dom";

import { Nav } from "./components/Nav/Nav";
import { Footer } from "./components/Footer/Footer";
import { About } from "./components/pages/About/About";
import { Work } from "./components/pages/Work/Work";
import { Home } from "./components/pages/Home/Home";
import { Contact } from "./components/pages/Contact/Contact";
import { ProjectPage } from "./components/pages/ProjectPage/ProjectPage";

export const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact children={<Home />} />
        <Route path="/about" children={<About />} />
        <Route path="/work/:id" children={<ProjectPage />} />
        <Route path="/work" children={<Work />} />
        <Route path="/contact" children={<Contact />} />
      </Switch>
      <Footer />
    </div>
  );
};
