import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import config from '../config.json'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import SideAd from "../components/SideAd";
import Ad from "../components/Ad";

function App() {

  //const [latestVideos, setLatestVideos] = useState({});
  const [url, setUrl] = useState("");

  const total = useSelector((state) => state.value);

  /*const loadLatestVideos = async () => {
      const res = await fetch("https://reddit.egely1337.com/api/retrieveLatest");
      const json = await res.json();
      setLatestVideos(json);
  };*/

  const downloadFile = (url) => {
    let parsedUrl = new URL(url);
    let pathName = parsedUrl.pathname;

    pathName = pathName.split("/");

    const fileName = `${pathName[3]}.mp4`;

    const a = document.createElement('a');

    a.href = url;
    a.setAttribute('download', fileName);

    document.body.appendChild(a);

    a.click();
    a.remove();

    //loadLatestVideos();
  } 

  const downloadVideo = async () => {
    const res = await fetch(`${config.api_url}/download`, {
      method: "POST",
      body: JSON.stringify({videoUri: url}),
      headers: {"content-type" : "application/json"}
    })

    const json = await res.json();
    toast[json.status ? "success" : "error"](json.status ? "Successfully downloded video.": "Failed to download video.");

    if(json.path === "not_found.html" || res.status === 500) return;

    downloadFile(`${config.api_url}/videos/${json.path}`);
  } 
 
  useEffect(() => {
    //loadLatestVideos();
  }, []);

  return (
    <div onContextMenu={(e) => e.preventDefault()} className="w-full h-full overflow-auto">
      <Navbar/>
      <section id="home" className="w-full h-full flex flex-col items-center justify-center">
        <div className="card justify-center">
          <h1 className="text-2xl text-center">animekizi.org</h1>
          <span className="text-gray-400">Downloads Reddit videos with a couple seconds.</span>
          <span className="text-gray-400 text-xs">{total?.totalDownloaded ?? "0"} videos downloaded.</span>
          <div className="flex flex-col lg:flex-row items-center w-full justify-center gap-5">
            <input onChange={r => setUrl(r.currentTarget.value)} value={url} placeholder="Please enter a Reddit Video URL" className="lg:w-1/2 w-full" type="text" />
            <button onClick={downloadVideo} className="green lg:w-auto w-full">Download</button>
          </div>
        </div>
      </section>
      <section id="about" className="w-full h-full flex items-center justify-center relative">
        <img src="/anime2.png" width={384} className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto" draggable="false" alt="" />
        <div className="card lg:h-5/6 items-center gap-0 justify-center">
          <span className="text-2xl w-full text-center mb-4">About animekizi.org</span>
          <span className="text-gray-400">animekizi.org is a Reddit Video Downloader, you can download reddit videos in a couple seconds.</span>
          <span className="text-gray-400">with a power of Echo (go http library) backend.</span>
        </div>
      </section>
      <section id="usage" className="w-full relative h-full flex items-center justify-center">
        <img src="/anime3.png" width={384} className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto" draggable="false" alt="" />
        <div className="card lg:h-5/6 items-start gap-0 justify-center">
          <span className="text-2xl w-full text-center mb-4">How to use?</span>
          <span className="text-gray-400">Step 1: Open Reddit find video you want to download.</span>
          <span className="text-gray-400">Step 2: Click on "Share" and copy and paste the post link on the text field above on animekizi.org</span>
          <span className="text-gray-400">Step 3: Click the Download Video button to download and save the video to your device.</span>
        </div>
      </section>
      <section id="faq" className="w-full h-full flex items-center justify-center relative">
        <img src="/mai.png" width={432} className="absolute left-0 right-0 top-0 bottom-0 mx-auto my-auto" draggable="false" alt="" />
        <div className="card lg:h-5/6 items-start">
          <span className="text-2xl w-full text-center">FAQ</span>
          <div className="flex flex-col">
            <span className="text-gray-500 font-bold">Is it safe to use animekizi.org?</span>  
            <span className="text-gray-400">Yes it is safe to use animekizi.org to download Reddit Videos</span>
          </div>
          <div className="flex flex-col">
            <span className="text-gray-500 font-bold">How can I download reddit videos on Android?</span>  
            <span className="text-gray-400"> You can download reddit videos on android by following the steps provided under our how to section.</span>
          </div>  
          <div className="flex flex-col">
            <span className="text-gray-500 font-bold">Downloaded a video but no sound, why?</span>  
            <span className="text-gray-400">Some reddit videos have no sound or it might be an animated gif. </span>
          </div>  
          <div className="flex flex-col">
            <span className="text-gray-500 font-bold">Where are the files I downloaded on my device?</span>  
            <span className="text-gray-400">All downloaded videos are stored in your device's default download folder. </span>
          </div>  
          <div className="flex flex-col">
            <span className="text-gray-500 font-bold">Why can't I download a reddit video?</span>  
            <span className="text-gray-400">It is possible that the video is embedded from a third party site we do not support, e.g YouTube, Twitter, Instagram. </span>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
