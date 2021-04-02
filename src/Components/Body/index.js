import React from "react";
import Navbar from "../Navbar";
import "./style.css";
const pageSize = 3;
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      search: "",
      show: true
    };
  }
  changeHandler = (e) =>{
    this.setState({search: e.target.value})
  }
  onClick = (e) =>{
    e.preventDefault();
    this.setState({
      show: false
    });
    this.props.searchPictures(this.state.search);
  }
  previous = () => {
    if (this.state.counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      })
    }
  };
  next = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  };
  render() {
    const { pictureOfTheDay, searchResult } = this.props;
    const index1 = this.state.counter * pageSize;
    const index2 = index1 + pageSize - 1;
    const data = searchResult.filter((item, index) => index >= index1 && index <= index2);
    return (
      <>
        <Navbar />
        <div id="search">
          <input type="text" value={this.state.search} onChange={this.changeHandler} placeholder="Search Image" />
          <button value="submit" onClick={this.onClick}>Search</button>
        </div>
        <div id="main">
          <div id="body">
            {this.state.show && pictureOfTheDay && (
              <>
                <h2>{pictureOfTheDay.title}</h2>
                {pictureOfTheDay.media_type === "video" && (
                  <iframe
                    width="420"
                    height="400"
                    src={pictureOfTheDay.url}
                  ></iframe>
                )}
                {pictureOfTheDay.media_type === "image" && (
                  <img width="420" height="400" src={pictureOfTheDay.url} />
                )}
                <p>
                  <div id="desc">
                    <b>Description:</b> {pictureOfTheDay.explanation}
                    <h4>Date: {pictureOfTheDay.date}</h4>
                    <footer><b>&copy;Image Copyright information</b></footer>

                  </div>
                </p>

              </>
            )}
            {data.map((item, key) => (
              <div key={`${this.state.counter}-${key}`}>
                {item.links && <img src={item.links[0].href} />}
                <h5>{item.data[0].title}</h5>
                <h5>{item.data[0].date_created}</h5>
              </div>
            ))}
            {searchResult.length > 0 && (
              <>
                <button onClick={this.previous}>Prev</button>
                <button onClick={this.next}>Next</button>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Body;
