import React from "react";
import { Switch, Route } from "react-router-dom";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { About } from "./components/pages/About";
import { Work } from "./components/pages/Work";
import { Contact } from "./components/pages/Contact";
// import { ProjectPage } from "./components/pages/ProjectPage";

export const App = () => {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route path="/" exact children={<About />} />
        {/* <Route path="/work/:id" children={<ProjectPage />} /> */}
        <Route path="/work" children={<Work />} />
        <Route path="/contact" children={<Contact />} />
      </Switch>
      <Footer />
    </div>
  );
};