// Methods related to users
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.init'(role) {
    Roles.addUsersToRoles(this.userId, role);
  },
});
