import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

export default AccountsWidget = props => (
  <div id="accounts-widget" className="col-xs-12 col-md-4 col-md-offset-4">
    <ul className="nav nav-tabs" role="tablist">
      <li role="presentation" className="active"><a href="#login" aria-controls="login" role="tab" data-toggle="tab">Login</a></li>
      <li role="presentation"><a href="#register" aria-controls="register" role="tab" data-toggle="tab">Register</a></li>
    </ul>

    <div className="tab-content">
      <div role="tabpanel" className="tab-pane fade in active" id="login">
        <LoginForm />
      </div>
      <div role="tabpanel" className="tab-pane fade" id="register">
        <RegisterForm />
      </div>
    </div>
  </div>
)
