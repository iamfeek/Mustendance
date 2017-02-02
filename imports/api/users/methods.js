// Methods related to users
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.init'(role) {
    console.log(role)
    // check(role, String);
    // Roles.addUsersToRoles(this.userId, role);
  },
});
