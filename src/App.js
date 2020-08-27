import React from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import { About } from './components/pages/About';
import { Work } from './components/pages/Work/Work';
import { Home } from './components/pages/Home';
import { Contact } from './components/pages/Contact';
import {ProjectPage} from './components/pages/Work/ProjectPage';


export const App = () => {
    return(
        <div className="app">
            <Nav />
                <Switch>
                    <Route path='/' exact children={<Home />}/>
                    <Route path='/about' children={<About />}/>
                    <Route path='/work/:id' children={<ProjectPage />} />
                    <Route path='/work' children={<Work />}/>
                    <Route path='/contact' children={<Contact />}/>
                </Switch>
            <Footer />
        </div>
    );
}