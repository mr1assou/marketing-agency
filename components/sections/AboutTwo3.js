
import Link from "next/link"
import Image from "next/image"
import VideoPopup from "../elements/VideoPopup"

export default function AboutTwo3() {
    return (
        <>
            <section id="about" className="about-two-area py-135 rpy-100 rel z-1">
                <div className="container">
                    <div className="row gap-110 align-items-center">
                        <div className="col-lg-6 wow fadeInRight delay-0-2s">
                            <div className="about-two-images rmb-75">
                                <div className="image one"><Image src="/assets/images/hero/hero-small.png" alt="About" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                <div className="image two"><Image src="/assets/images/hero/service4.png" alt="About" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                <VideoPopup style={2}/>
                                <div className="experince-years"><b>13</b> <span>Years of Experince</span></div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInLeft delay-0-2s">
                            <div className="about-two-content">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-10">Trusted digital marketing agency</span>
                                    <h2>Get Best Marketing <span>Solution</span> Over The World</h2>
                                </div>
                                <h5>Data-driven campaigns that build brands and accelerate growth</h5>
                                <p>We plan, launch, and optimize multi-channel marketing across search, social, and content to increase traffic, leads, and revenue.</p>
                                <div className="service-stye-two pb-10">
                                    <div className="icon">
                                        <Image src="/assets/images/icons/writing.png" alt="Icon" width={48} height={48} />
                                    </div>
                                    <h6>A simple, proven process to create high-converting campaigns and content</h6>
                                </div>
                                <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100}  style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div>
                                <div className="author-name-btn pt-30">
                                    <Link href="/about" className="theme-btn style-two">More about us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
