import React, { useEffect } from "react"
import { isMobile } from "react-device-detect"

const DownloadAd = ({slot}) => {
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
        <div className="w-full h-auto mt-4 mb-4" align="center">
            <ins class="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-6068047345199355" data-ad-slot={slot} data-ad-format="auto" data-full-width-responsive="true"></ins>
        </div>
    )
}

export default DownloadAd;
