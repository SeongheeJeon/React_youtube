import { useEffect, useState } from "react";
import "./app.css";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDrzJ3VS3VJ3s9CdRAQKlOZpVrFkc8w57U&part=snippet&chart=mostPopular&maxResults=25",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  });

  return <VideoList videos={videos} />;
}

export default App;
