import React, { Component } from 'react';
import DogImage from './DogImage';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogImages: []
    }
  }
  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/8")
    .then(res => res.json())
    .then((data) => {
      this.setState({ dogImages: data.message })
    })
  }
  render() {
    const dogList = this.state.dogImages.map((url,i) => {
      return <DogImage key={i} url={url}/>
    })
  return (
    <div className="App">
    <h1>Dog Images</h1>
    {dogList}
    </div>
  );
}
}

export default App;
