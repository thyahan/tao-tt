// import React from 'react';
// import { Bio, Location }from './components'

// class App extends React.Component {
//   state = {
//     allData: []
//   }  
  
//   getAllData = () => {
//     const bio = this.bioNode.getValue();
//     const location = this.locationNode.getValue();
//     this.setState({
//       allData: [
//         bio.value, 
//         location.value
//       ]});
//   }

//   renderValue = (items) => {
//     console.log(items);
//     return items.map( item => {
//       return <li key={item}>{item}</li>
//     })
//   }

//   render(){
//     return (
//     <div>
//       <Bio ref={element => this.bioNode = element}/>
//       <Location ref={element => this.locationNode = element} />
//       <button onClick={this.getAllData}>Get Value All</button>
//       <hr />
//       <ul>{this.renderValue(this.state.allData)}</ul>
//     </div>
//   );}
// };
// export default App;

import React from 'react';
import { Bio, Location }from './components'

class App extends React.Component {
  state = {
    bio: '',
    location: '',
    showData: false
  }  

  handleOnChange = (value, key) => {
    this.setState({ [key]: value});
  }
  
  renderValue = (items) => {
    return <>
      <li>{items.bio}</li>
      <li>{items.location}</li>
    </>
  }

  render(){
    const { bio, location, showData } = this.state;
    return (
    <div>
      <Bio value={bio} onChange={value => this.handleOnChange(value, 'bio')}/>
      <Location value={location} onChange={value => this.handleOnChange(value, 'location')}/>
      <button onClick={()=>this.handleOnChange(!showData, 'showData')}>Get Value All</button>
      <hr />
      <ul>{showData ? this.renderValue(this.state) : null}</ul>
    </div>
  );}
};
export default App;