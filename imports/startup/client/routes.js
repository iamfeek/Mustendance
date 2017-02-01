import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import {mount} from 'react-mounter';

// Import needed templates
import Layout from '/imports/ui/layouts/Layout';
import Home from '/imports/ui/pages/home/Home';
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

FlowRouter.notFound = {
    action: () => {
      mount(Layout, {
        content: () => <NotFound />
      })
    }
};
