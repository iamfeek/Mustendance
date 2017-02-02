import React from 'react';
import {createContainer} from 'meteor/react-meteor-data'

const Navbar = props => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">
          <img alt="Brand" src="/img/logo_only.png" />
        </a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">About</a></li>
          {props.user
            ? <li className="dropdown">
            <a href="" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
              {props.user.emails[0].address} <span className="caret"></span>
          </a>
          <ul className="dropdown-menu">
          
            <li>
              <a href="" onClick={() => {
                  logout()
                }}>Logout</a>
              </li>
            </ul>
          </li>
          : null
        }
      </ul>
    </div>
  </div>
</nav>
)

const logout = () => {
  if(!confirm("Are you sure you want to log out?")) return;

  Meteor.logout(err => {
    if(err) Bert.alert(err.reason, "danger", "growl-bottom-left");

    if(!err) FlowRouter.go('home');
  });
}

export default createContainer(() => {
  return {user: Meteor.user()}
}, Navbar)
