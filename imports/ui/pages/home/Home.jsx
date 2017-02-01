import React from 'react';
import AccountsWidget from '/imports/ui/components/accounts/AccountsWidget';

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

        <AccountsWidget />
      </div>
    )
  }
}
