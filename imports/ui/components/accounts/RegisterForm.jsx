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

    <div className="form-group">
      <button id="registerButton" type="submit" className="btn btn-default btn-lg marginTop15 fullWidth">Register</button>
    </div>
  </form>
)

const register = e => {
  e.preventDefault();
  processingButton(true);

  let email = $("#registerEmail").val();
  let password = $("#registerPassword").val();



  Accounts.createUser({
    email: email,
    password: password,
    profile: {
      fullname: "",
      age: null,
      gender: null,
      status: "I just joined Mustendance! Three cheers for me!"
    }
  }, err => {
    if(err){
      Bert.alert(err.reason, "danger", "growl-bottom-left");
      processingButton(false);
    }

    if(!err){
      Meteor.call("users.init", err => {
        if(err){
          Bert.alert(err.reason, "danger", "growl-bottom-left");
          Meteor.logout();
        }

        if(!err){
          FlowRouter.go('profile.me');
        }
      });
    }
  })
}

const processingButton = wantToProcess => {
  let elem = $("#registerButton");
  if(wantToProcess){
    elem.attr("disabled", true);
    elem.text("Processing...");
  } else {
    elem.attr("disabled", false);
    elem.text("Register");
  }

}

const validator = () => {
  $("#register-form").validator();
}
