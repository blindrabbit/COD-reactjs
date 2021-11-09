import React, { PureComponent, Fragment } from 'react';
import ReactDOM from 'react-dom';

var MySelect = React.createClass({
  getInitialState: function() {
      return {
          value: 'select'
      }
  },
  change: function(event){
      this.setState({value: event.target.value});
  },
  render: function(){
     return(
        <div>
            <select id="lang" onChange={this.change.bind(this)} value={this.state.value}>
               <option value="select">Select</option>
               <option value="Java">Java</option>
               <option value="C++">C++</option>
            </select>
            <p></p>
            <p>{this.state.value}</p>
        </div>
     );
  }
 });
 React.render(<MySelect />, document.body); 