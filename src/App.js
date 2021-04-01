import React from 'react';
import Body from './Components/Body';
import { API_KEY } from './env';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state ={
      pictureOfTheDay: {},
      data: []
    }
  }

  componentDidMount () {
    this.fetchPictureOfTheDay();
  };

  fetchPictureOfTheDay = () =>{
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`,{
      method: 'GET'
    }).then((response) => {
      if (response.ok) {
        response.json().then((result) => {
          this.setState({
            pictureOfTheDay: result
          });
        });
      }
    }).catch((err) => {
        console.log(err);
    });
  }

  render () {
    console.log(this.state.pictureOfTheDay);
    return (
      <>
      <Body data={this.state.data} pictureOfTheDay={this.state.pictureOfTheDay}/>
      </>
    )
  }
}
export default App;
