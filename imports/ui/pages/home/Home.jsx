import React from 'react';

export default class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="home" className="col-xs-12">
        <div className="page-header">
          <h1 className="text-center">Mustendance</h1>
        </div>

        <h1 className="text-center">
          This site is still in development.
          <br></br>
          Please hang in there.
        </h1>
      </div>
    )
  }
}
