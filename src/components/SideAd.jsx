import React, { useEffect } from "react"
import { isDesktop, isMobile } from "react-device-detect"

const SideAd = ({left, right, slot}) => {
  useEffect(() => {
    if(!isDesktop) return;

    let interval = setInterval(() => {
      if(!isDesktop) return;
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

  if(!isDesktop) return (<></>);

  return (
    <>
      <ins className={`adsbygoogle fixed top-0 bottom-0 my-auto z-50 right-${right} left-${left}`} style={{width: '160px', height: '600px'}} data-ad-client="ca-pub-6068047345199355" data-ad-slot={slot}/>
    </>
  )
}

export default SideAd;
