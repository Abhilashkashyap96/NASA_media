import React from "react";
import Navbar from "../Navbar";
import "./style.css";
class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pictureOfTheDay } = this.props;
    return (
      <>
        <Navbar />
        <h2>{pictureOfTheDay.title}</h2>
        <div id="search">
          <input type="Search" placeholder="Search Image" />
          <button>Search</button>
        </div>
        <div id="main">
          <div id="body">
            {pictureOfTheDay && (
              <>
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
                    <footer>&copy;<b>Image Copyright information</b></footer>

                  </div>
                </p>
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Body;
