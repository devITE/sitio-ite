// // import { response } from "express";
// import React, { Component, useEffect, useState } from "react";

// const API = "AIzaSyD1abko477C4VuO61LNX6D_kTmeS0oi50g";
// const channelId = "UCUBfUX_c54NfhhvZRzK0k1w";

// var fetchurl = `https://www.googleapis.com/youtube/v3/search?key${API}&channelId=${channelId}$part=snippet,id&order=date&maxResults=20`;

// export const PRUEBAS = () => {
//   const [allvideos, setAllVideos] = useState([]);
//   useEffect(() => {
//     fetch(fetchurl)
//       .then((response) => response.json())
//       .then((resJson) => {
//         const result = resJson.items.map((doc) => ({
//           ...doc,
//           Videolink: "https://www.youtube.com/embed/" + doc.id.videoId,
//         }));
//         setAllVideos(result);
//       });
//   }, []);
//   console.log(allvideos);
//   return (
//     <div>
//       <iframe id="uno" width="560" height="315" src="" />
//     </div>
//   );
// };

import React, { Component } from "react";

export default class PRUEBAS extends Component {
  render() {
    return <div>PRUEBAS</div>;
  }
}
