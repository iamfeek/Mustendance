import React from 'react';

export default NotFound = props => {
  DocHead.setTitle("404 - Mustendance");

  return(
    <div id="not-found" className="text-center">
      <div className="page-header">
          <h1>
            Alright, bad news mate...
            <br></br>
            <span className="bold">You are lost.</span>
          </h1>
      </div>


      <h4><a href={FlowRouter.path("dashboard")}>Back to dashboard, maybe?</a></h4>
    </div>
  )
}
