import React from 'react';
import 'bootstrap-validator';

export default LoginForm = props => (
  <form onSubmit={login.bind(this)} ref={() => validator()} id="login-form" role="form" data-toggle="validator">
    <div className="form-group" >
      <label htmlFor="email control-label">Email address</label>
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
        <input
          required
          type="email"
          className="form-control input-lg"
          id="email"
          placeholder="Email"
          data-error="Please provide a valid email address"
          />
      </div>
      <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
      <div className="help-block with-errors"></div>
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
        <input required type="password" className="form-control input-lg" id="password" placeholder="Password" data-validate="false"/>
      </div>
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-default btn-lg fullWidth marginTop15">Login</button>
    </div>
  </form>
)

const login = e => {
  e.preventDefault();
  let email = $("#email").val();
  let password = $("#password").val();
  Meteor.loginWithPassword(email, password, err => {
    if(err) Bert.alert(err.reason, "danger", "growl-bottom-left");
    if(!err){
      FlowRouter.go("dashboard");
      Bert.alert("Welcome back!", "info", "fixed-bottom")
    }
  })
}

const validator = () => {
  $("#login-form").validator();
}
