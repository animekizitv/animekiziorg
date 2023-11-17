import React, { useEffect } from "react"
import { isMobile } from "react-device-detect"

const Ad = ({slot}) => {
  useEffect(() => {
    let interval = setInterval(() => {
        try {
            const adsbygoogle = window.adsbygoogle;
            adsbygoogle.push({});
            clearInterval(interval);
            setTimeout(() => {
                document.getElementById('root').style.height = "100%";
            }, 100);
        } catch (e) {
            console.error("err");
        }
    }, 100);
  }, [])

    return (
        <div className="w-full" style={{width:"100%",height:"90px"}} align="center">
            <ins className="adsbygoogle" style={{display:"block",height:"90px",width:"728px"}} data-ad-client="ca-pub-6068047345199355" data-ad-slot={slot}></ins>
        </div>
    )
}

export default Ad;
