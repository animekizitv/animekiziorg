import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import config from "../config.json"
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import axios from "axios";
import DownloadAd from "../components/DownloadAd";

const Download = () => {
    const {subreddit, postUri} = useParams("");
    const [err,setErr] = useState(null);
    const [post, setPost] = useState({});
    const [loading, setLoading] = useState(true);


    const src = "/emptyred.jpg";

    useEffect(() => {
        axios.post(`${config.api_url}/download`,{
            videoUri: `https://reddit.com/r/${subreddit}/comments/${postUri}`
        }).then((res) => {
            setPost(res.data);
            setLoading(false);
        }).catch((err) => {
            //setErr(err.response.data.err)
            setErr(err.message);
            setLoading(false);
        })
    }, [subreddit,postUri])

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
      } 

    if(loading) return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <Navbar/>
            <Loading/>
        </div>
    )

    if(err) return(
        <div className="w-full h-full flex items-center justify-center">
            <Navbar/>
            <div className="lg:w-2/3 w-full py-2 px-4 bg-red-100 text-red-600 rounded-full">
                {err}
            </div>
        </div>
    )

    return(
        <div className="w-full h-full flex flex-col items-center overflow-auto pt-32 z-30">
            <Navbar/>
            <div className="w-full h-full flex flex-col items-center">
                <div className="lg:w-2/3 w-full h-full bg-gray-800 flex flex-col items-center justify-center rounded-lg border-[1px] border-gray-600 bg-opacity-50 p-6 gap-5">
                    <img onError={(currentTarget) => {
                            currentTarget.currentTarget.onerror = null;
                            currentTarget.currentTarget.src = src
                        }}
                    draggable={false} src={post.post?.thumbnail} className="rounded w-[256px] h-[256px]" alt="img" width={256} height={256}/>
                    <span className="text-gray-400 font-semibold">{post.post?.title}</span>
                    <span className="text-gray-400 font-semibold">{new Date(post.post.date.toString()).toLocaleDateString("tr",{day:"numeric", month:"numeric", year:"numeric", hour:"numeric", minute:"numeric", second:"numeric"})}</span> 
                    <button onClick={() => downloadFile(`${config.api_url}/videos/${post?.path}`)} className="green mt-4 py-2 w-1/2">Download</button> 
                </div>
            </div>
            <DownloadAd slot={"3811866549"}/>
            <div className="w-full h-full flex flex-col items-center">
                <div className="lg:w-2/3 w-full h-full bg-gray-800 flex flex-col justify-center rounded-lg border-[1px] border-gray-600 bg-opacity-50 p-6 gap-5">
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
            </div>
        </div>
    )
}

export default Download;