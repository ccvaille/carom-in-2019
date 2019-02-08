import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { renderRoutes } from "../imports/startup/client/routes.jsx";

import { BrowserRouter } from 'react-router-dom'

import Hello from '../imports/ui/Hello.jsx';
import Home from "../imports/ui/Home";


// https://stackoverflow.com/questions/44507161/meteor-react-error-target-container-is-not-a-dom-element-after-fix
import './main.html'

// test
// Meteor.startup(() => {
//     render(<Hello />, document.getElementById('app'));
// });

// todo rr4 无法正常 render
Meteor.startup(() => {
    render(<BrowserRouter>
        <Home />
      </BrowserRouter>, document.getElementById("app"));
});
