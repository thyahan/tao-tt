import React, { Component } from 'react';

class Location extends Component {
  render() {
    return (
      <div>
        <label>Location</label>
        <input type='text' value={this.props.value} onChange={e=>{
          this.props.onChange(e.target.value)
        }}/>
      </div>
    );
  }
}

export default Location;