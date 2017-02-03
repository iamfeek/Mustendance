import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';


// Import needed templates
import Layout from '/imports/ui/layouts/Layout';
import Home from '/imports/ui/pages/home/Home';
import Dashboard from '/imports/ui/pages/Dashboard';
import NotFound from '/imports/ui/pages/utils/NotFound';

import Profile from '/imports/ui/pages/profile/Profile';

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

FlowRouter.route("/profile/me", {
  name: "profile.me",
  action: () => {
    mount(Layout, {
      content: () => <Profile self={true} />
    })
  }
});

FlowRouter.route("/profile/:id", {
  name: "profile",
  action: query => {
    mount(Layout, {
      content: () => <Profile self={false} userId={query.id} />
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
