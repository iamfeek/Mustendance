import React from 'react';

export default class Dashboard extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id='dashboard'>
        <div className="page-header">
          <h1>Dashboard</h1>
        </div>
      </div>
    )
  }
}
