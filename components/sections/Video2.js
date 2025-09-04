
import Link from "next/link"
import VideoPopup from "../elements/VideoPopup"

export default function Video2() {
    return (
        <>
            <div className="video-area-two pt-115 rel z-1">
                <div className="container">
                    <div className="video-inner-two py-180 bgs-cover rpy-130 text-center" style={{ backgroundImage: 'url(assets/images/hero/mk.jpg)' }}>
                        <VideoPopup style={3}/>
                 
                        <div className="video-shape wow zoomIn delay-0-2s">
                            <img src="/assets/images/video/video-shape.png" alt="Shape" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
