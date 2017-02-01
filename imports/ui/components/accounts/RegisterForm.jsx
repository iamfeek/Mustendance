import React from 'react';

export default RegisterForm = props => (
  <form>
    <div className="form-group">
      <label htmlFor="email">Email address</label>
      <input type="email" className="form-control input-lg" id="email" placeholder="Email" />
    </div>
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input type="password" className="form-control input-lg" id="password" placeholder="Password" />
    </div>

    <div className="form-group">
      <label htmlFor="verify">Verify</label>
      <input type="password" className="form-control input-lg" id="verify" placeholder="Verify password" />
    </div>

    <div className="form-group">
        <button type="submit" className="btn btn-default btn-lg marginTop15 fullWidth">Register</button>
    </div>
  </form>
)
