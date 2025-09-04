
import Layout from "@/components/layout/Layout"
import Testimonials1 from "@/components/sections/Testimonials1"
import Link from "next/link"
import ServicesThree2 from "@/components/sections/ServicesThree2"
export default function Service() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="">
                <div>
                      <ServicesThree2 />
                    {/* About Two Area end */}
                    {/* Services Area start */}
                
                  
                    <div className="lets-talk-area text-center pb-75 rpb-100">
                        <div className="container">
                            <Link href="/contact" className="lets-talk-text wow zoomIn delay-0-2s">Let’s Talk <i className="fal fa-arrow-right" /></Link>
                        </div>
                    </div>
                    {/* Lets Talk Area end */}
                    {/* Headline area start */}
                    <div className="headline-area bgc-primary py-20">
                        <div className="headline-wrap style-two color-black">
                            <span className="marquee-wrap">
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                                <span className="marquee-inner left">
                                    <span className="marquee-item"><b>customer business solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>web development based company</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b><span>design</span> - customer centric solution</b><i className="fas fa-bahai" /></span>
                                    <span className="marquee-item"><b>marketing based devlopment</b><i className="fas fa-bahai" /></span>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}