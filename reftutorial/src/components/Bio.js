import React, { Component } from 'react';

class Bio extends Component {
  render() {
    return (
      <div>
        <label>Bio</label>
        <input type='text' value={this.props.value} onChange={e=>{
          this.props.onChange(e.target.value)
        }}/>
      </div>
    );
  }
}

export default Bio;