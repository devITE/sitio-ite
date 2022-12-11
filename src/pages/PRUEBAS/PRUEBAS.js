import React, { Component } from "react";

export default class PRUEBAS extends Component {
  state = {
    data: {
      results: [],
    },
  };
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    const response = await fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD1abko477C4VuO61LNX6D_kTmeS0oi50g&channelId=UCUBfUX_c54NfhhvZRzK0k1w&part=snippet,id&order=date&maxResults=50"
    );
    const data = await response.json();
    this.setState({
      data: data,
    });
  };

  render() {
    //  return this.state.data.results.map((info) => (
    //    <div key={info.etag}>
    //      <h1>{info.title}</h1>
    //    </div>
    //  ));
    return <h1>PRUEBAS</h1>;

    //  return this.state.data.results.map((character) => (
    //    <div key={character.kind}>
    //      {/* <CharacterCard character={character} /> */}
    //      <h1>{character.kind}</h1>
    //    </div>
    //  ));
  }
}
