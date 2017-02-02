import React from 'react';

export default RegisterForm = props => (
  <form onSubmit={register.bind(this)} ref={() => validator()} id="register-form" role="form" data-toggle="validator">
    <div className="form-group" >
      <label htmlFor="email control-label">Email address</label>
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-envelope"></i></span>
        <input
          required
          type="email"
          className="form-control input-lg"
          id="registerEmail"
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
        <input
          required
          type="password"
          className="form-control input-lg"
          id="registerPassword"
          placeholder="Password"
          data-minlength="6"
          />
      </div>
      <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
      <div className="help-block"> Minimum 6 characters</div>
    </div>

    <div className="form-group">
      <label htmlFor="verify">Verify</label>
      <div className="input-group">
        <span className="input-group-addon"><i className="glyphicon glyphicon-check"></i></span>
        <input
          required
          type="password"
          className="form-control input-lg"
          id="verify"
          placeholder="Verify password"
          data-match="#registerPassword"
          data-match-error="Password is not matching"

          />
      </div>
      <span className="glyphicon form-control-feedback" aria-hidden="true"></span>
      <div className="help-block with-errors"></div>
    </div>

    <div className="btn-group fullWidth" data-toggle="buttons">
      <label>I am a ...</label>
      <br />
      <label className="btn btn-default btn-lg active halfWidth">
        <input type="radio" name="type" id="organiser" autoComplete="off" checked/>
        Organiser
      </label>

      <label className="btn btn-default btn-lg halfWidth">
        <input type="radio" name="type" id="attendee" autoComplete="off" />
        Attendee
      </label>
    </div>

    <div className="form-group">
      <button type="submit" className="btn btn-default btn-lg marginTop15 fullWidth">Register</button>
    </div>
  </form>
)

const register = e => {
  e.preventDefault();

  let email = $("#registerEmail").val();
  let password = $("#registerPassword").val();
  let role = document.querySelector('input[name="type"]:checked').id;



  Accounts.createUser({
    email: email,
    password: password
  }, err => {
    if(err){
      Bert.alert(err.reason, "danger", "growl-bottom-left");
    }

    if(!err){
      Meteor.call("users.init", role, err => {
        if(err){
          Bert.alert(err.reason, "danger", "growl-bottom-left");
          Meteor.logout();
        }

        if(!err){
          FlowRouter.go('dashboard');
        }
      });
    }
  })
}

const validator = () => {
  $("#register-form").validator();
}
