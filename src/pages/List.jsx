import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { createRef, useEffect, useState } from "react";
import config from "../config.json"
import axios from "axios";
import SideAd from "../components/SideAd";

const List = () => {
    const main = createRef();

    const [loadingNewPosts,setLoadingNewPosts] = useState(false);
    const [loadedMaxPosts,setLoadedMaxPosts] = useState(false);
    const [videos,setVideos] = useState([]);

    const [page,setPage] = useState(0);

    const scroll = async() => {
        let height = Math.floor(main.current.scrollHeight);
        let bottomOfWindow = Math.floor(main.current.scrollTop + main.current.offsetHeight);

        if(bottomOfWindow > height-200){
            if(loadingNewPosts || loadedMaxPosts) return;

            setLoadingNewPosts(true);

            setPage(page+1);
        }
    };

    useEffect(() => {
        (async() => {            
            let res = await axios.get(`${config.api_url}/retrieveLatest?page=${page}`);
            let data = res.data;
            
            if(data.videos.length < 1) {
                setLoadingNewPosts(false);
                return setLoadedMaxPosts(true);
            };

            setVideos([...videos, ...data.videos]);

            setLoadingNewPosts(false);
        })();
    },[page]);

    if(videos.length < 1) return (
        <div className="w-full h-full flex items-center justify-center">
            <Navbar/>
            <Loading/>
        </div>
    )

    return(
        <div onScroll={scroll} ref={main} className="w-full h-full flex flex-col items-center overflow-auto">
            <div className="lg:w-2/3 w-full h-full flex flex-col items-start gap-5 pt-32 px-5">
                <Navbar/>
                {videos.map((video) => (
                    <Link key={Math.random()} to={`/download/${new URL(video.post_url).pathname.split("/")[2]}/${new URL(video.post_url).pathname.split("/")[4]}`} className="rounded-lg w-full bg-gray-800 hover:bg-gray-700 duration-300 p-4 flex flex-col gap-5 lg:flex-row items-center justify-between">
                        <div className="flex flex-col gap-2">
                            <span>{video.post_title}</span>
                            <span className="text-gray-400">{new Date(video.date.toString()).toLocaleDateString("tr",{
                                day:"numeric",
                                month:"numeric",
                                year:"numeric",
                                hour:"numeric",
                                minute:"numeric",
                                second:"numeric"
                            })}</span>
                        </div>
                        <img
                         onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = "/emptyred.jpg";
                         }}
                         draggable={false} className="rounded-lg w-16 h-16" src={video.thumbnail} alt="" />
                    </Link>
                ))}
                {loadingNewPosts ? (<div className="w-full flex items-center justify-center">
                    <Loading/>
                </div>) : (<></>)}
                {loadedMaxPosts ? (<span className="w-full text-center text-gray-500 select-none">Dostum o kadar çok kaydırdın ki katman kayasına ulaştın. 😐</span>) : (<></>)}
            </div>
        </div>
    )
};

export default List;