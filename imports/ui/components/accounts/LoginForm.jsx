import React from 'react';

export default LoginForm = props => (
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
        <button type="submit" className="btn btn-default btn-lg fullWidth marginTop15">Login</button>
    </div>
  </form>
)
