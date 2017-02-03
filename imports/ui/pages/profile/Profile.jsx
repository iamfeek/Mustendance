import React from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import ProfileForm from '/imports/ui/components/profile/ProfileForm';

class Profile extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if(this.props.loading) return <h1>Loading</h1>
    
    return(
      <div id="profile" className="col-xs-12 text-center">
        <div className="page-header">
          <h1>{this.props.self ? "My Profile" : "Another Person's Profile"}</h1>
        </div>

        <ProfileForm user={this.props.user}/>
      </div>
    )
  }
}

export default createContainer(({self, userId}) => {
  DocHead.setTitle("Profile - Mustendance");

  return {
    self: self,
    user: Meteor.user()
  }
}, Profile)
