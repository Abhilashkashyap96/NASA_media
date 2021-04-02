import React from 'react';
import Body from './Components/Body';
import { API_KEY } from './env';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state ={
      searchResult: [],
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

  searchPictures = (search) =>{
    fetch(`https://images-api.nasa.gov/search?q=${search}`, {
      method: 'GET'
    }).then((response) =>{
        if(response.ok) {
          response.json().then((result)=>{
            this.setState({
              searchResult: result.collection.items
            })
          });
        }
    })
  }

  render () {
    console.log(this.state.searchResult);
    return (
      <>
      <Body data={this.state.data} pictureOfTheDay={this.state.pictureOfTheDay} searchResult={this.state.searchResult} searchPictures={this.searchPictures}/>
      </>
    )
  }
}
export default App;
