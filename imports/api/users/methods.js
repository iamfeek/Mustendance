// Methods related to users
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

Meteor.methods({
  'users.init'() {
  },

  'users.updateProfile'(profile){
    check(profile, Object);

    Meteor.users.update(this.userId, {$set: {profile: profile}});
  }
});
