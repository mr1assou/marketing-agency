
'use client'
import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
import Image from "next/image"
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})

const images = [
    {
        id: 1,
        url: '/assets/images/services/service-details1.jpg',
        title: 'Image 1',
        description: 'This is the first image',
    },
    {
        id: 2,
        url: '/assets/images/services/service-details2.jpg',
        title: 'Image 2',
        description: 'This is the second image',
    },
    {
        id: 3,
        url: '/assets/images/services/service-details3.jpg',
        title: 'Image 3',
        description: 'This is the third image',
    }
]
export default function ServiceDetails() {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)

    const openLightbox = (index) => {
        setPhotoIndex(index)
        setIsOpen(true)
    }

    const closeLightbox = () => {
        setIsOpen(false)
    }
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>

                <section className="py-120 rpy-80">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <h1 className="mb-15">SEO Optimization</h1>
                                <p className="mb-20">Improve search visibility and capture demand with a comprehensive SEO program: technical fixes, on‑page optimization, content strategy, and authoritative link building.</p>
                                <ul className="list-style-two mb-25">
                                    <li>Technical audits & implementation</li>
                                    <li>Keyword research & on‑page optimization</li>
                                    <li>Content strategy and briefs</li>
                                    <li>Analytics, reporting, and growth planning</li>
                                </ul>
                                <Link href="/contact" className="theme-btn style-two">Request SEO Audit</Link>
                            </div>
                            <div className="col-lg-5">
                                <div className="rounded overflow-hidden">
                                    <Image src="/assets/images/hero/seo.jpg" alt="SEO Service" width={1200} height={800} style={{ width: '100%', height: 'auto' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

               
                {/* Service images Area end */}
                {/* Service Counter Area start */}
                <div className="service-counter-area py-35">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-2s">
                                    <CounterUp count={300} time={3} plus />
                                    <h6 className="counter-title">SEO audits delivered <br/><br/></h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-4s">
                                    <CounterUp count={100} time={3} kPlus />
                                    <h6 className="counter-title">Keywords tracked monthly</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-6s">
                                    <CounterUp count={25} time={3} k dolar />
                                    <h6 className="counter-title">Monthly organic visits</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service Counter Area end */}
                <style jsx>{`
                    .service-counter-area .counter-item {
                        min-height: 140px;
                        padding: 25px 20px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        text-align: center;
                    }
                    .service-counter-area .counter-item .counter-title {
                        margin-top: 8px;
                    }
                `}</style>
                {/* Service Details Area start */}
                <div className="service-details-area pt-100 rpt-70 pb-150 rpb-100">
                    <div className="container">
                        <div className="row gap-50">
                            <div className="col-lg-8">
                                <div className="service-details-content rmb-65 wow fadeInUp delay-0-2s">
                                    <h3>SEO Strategy & Roadmap</h3>
                                    <p className="sub-title">How we grow your organic traffic</p>
                                    <h4>Technical • Content • Authority</h4>
                                    <p>We start with a full technical audit to remove crawl and indexing barriers, then build a content plan mapped to intent and funnel stage. Finally, we strengthen authority with high‑quality links and digital PR to accelerate rankings.</p>
                                    <h5>What you’ll get</h5>
                                    <p>A prioritized roadmap, page‑level optimizations, content briefs, internal linking plans, and clear KPIs for traffic, rankings, and conversions. We iterate monthly based on performance data.</p>
                                    <h3>Our SEO Process</h3>
                                    <p className="sub-title">Proven, repeatable, performance‑driven</p>
                                    <p>Audit → Research → Strategy → Implementation → Measure → Optimize. We combine analytics with human expertise to compound results over time while keeping stakeholders aligned.</p>
                                    <h3>Frequently Ask Question</h3>
                                    <p className="sub-title">Build a unique Website with Pulsar Webflow Template</p>
                                    <Accordion2 />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-sidebar">
                                    <div className="widget widget-cta wow fadeInUp delay-0-2s">
                                        <div className="icon"><i className="fal fa-phone-volume" /></div>
                                        <h4>Looking for <br />Web Design service Provider?</h4>
                                        <span className="sub-title">Call anytime</span>
                                        <Link href="/callto:+(2)871382023" className="theme-btn style-two w-100">+(2) 871 382 023</Link>
                                    </div>
                                    <h4 className="service-title">Get In Touch</h4>
                                    <div className="widget widget-form wow fadeInUp delay-0-2s">
                                        <form action="#" className="widget-contact-form">
                                            <input type="text" placeholder="Your Name" required />
                                            <input type="email" placeholder="Enter Email" required />
                                            <textarea rows={3} placeholder="Enter Message" required />
                                            <button className="theme-btn style-two" type="submit">Send Messege</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service Details Area end */}
                {/* Features Area start */}
                <section className="features-area bgc-lighter pt-110 rpt-100 pb-70 rel z-1">
                    <div className="container">
                        <div className="row gap-50">
                            <div className="col-lg-6 col-md-6">
                                <Link href="/services/seo" className="feature-item wow fadeInUp delay-0-2s">
                                    <h6>SEO Optimization</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Link href="/services/ppc" className="feature-item wow fadeInUp delay-0-3s">
                                    <h6>PPC Advertising</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Link href="/services/social" className="feature-item wow fadeInUp delay-0-4s">
                                    <h6>Social Media Marketing</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <Link href="/services/content" className="feature-item wow fadeInUp delay-0-5s">
                                    <h6>Content Strategy</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Features Area end */}
                {/* Lets Talk Area start */}
                <div className="lets-talk-area text-center pt-120 rpt-90 pb-75 rpb-100">
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

            </Layout>
        </>
    )
}
