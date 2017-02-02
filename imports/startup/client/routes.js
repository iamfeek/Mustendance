import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';


// Import needed templates
import Layout from '/imports/ui/layouts/Layout';
import Home from '/imports/ui/pages/home/Home';
import Dashboard from '/imports/ui/pages/Dashboard';
import NotFound from '/imports/ui/pages/utils/NotFound';

// Set up all routes in the app
FlowRouter.route("/", {
  name: "home",
  action: () => {
    mount(Layout, {
      content: () => <Home />
    })
  }
});

FlowRouter.route("/dashboard", {
  name: "dashboard",
  action: () => {
    mount(Layout, {
      content: () => <Dashboard />
    })
  }
});

FlowRouter.notFound = {
    action: () => {
      mount(Layout, {
        content: () => <NotFound />
      })
    }
};


function isAlreadyLoggedIn(context, redirect){
  if(Meteor.userId()){
    redirect("dashboard");
  }
}

function needsToBeLoggedIn(context, redirect){
  if(!Meteor.userId()){
    Bert.alert("Please login to view this content.", "info", "growl-bottom-left")
    redirect("home");
  }
}

FlowRouter.triggers.enter([isAlreadyLoggedIn], {only: ["home"]})
FlowRouter.triggers.enter([needsToBeLoggedIn], {except: ["home", "about"]})
