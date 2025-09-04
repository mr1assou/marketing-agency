

'use client'
import Accordion2 from "@/components/elements/Accordion2"
import Layout from "@/components/layout/Layout"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { useState } from "react"
import Lightbox from 'react-18-image-lightbox'
import 'react-18-image-lightbox/style.css'
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
                <section className="page-banner-area pt-135 rpt-95 pb-110 rpb-70 rel z-1 bgs-cover" style={{ backgroundImage: 'url(assets/images/background/banner-bg.png)' }}>
                    <div className="container">
                        <div className="banner-inner text-white wow fadeInUp delay-0-2s">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active">Service Details</li>
                                </ol>
                            </nav>
                            <h1 className="page-title style-two">web development</h1>
                        </div>
                    </div>
                </section>

                <div className="service-images-area">
                    <div className="d-flex">
                        {images.map((image, index) => (
                            // <a onClick={() => openLightbox(index)} key={index}>
                            //     <img src={image.url} alt="Gallery" />
                            // </a>
                            <a onClick={() => openLightbox(index)} key={index} className="image wow fadeInUp delay-0-2s">
                                <img src={image.url} alt="Services" />
                            </a>
                        ))}
                        {isOpen && (
                            <Lightbox
                                mainSrc={images[photoIndex]?.url}
                                nextSrc={images[(photoIndex + 1) % images.length].url}
                                prevSrc={images[(photoIndex + images.length - 1) % images.length].url}
                                onCloseRequest={closeLightbox}
                                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                            // imageTitle={images[photoIndex].title}
                            // imageCaption={images[photoIndex].description}
                            />
                        )}
                        {/* <Link href="/assets/images/services/service-details1.jpg" className="image wow fadeInUp delay-0-2s">
                                <img src="/assets/images/services/service-details1.jpg" alt="Services" />
                            </Link>
                            <Link href="/assets/images/services/service-details2.jpg" className="image wow fadeInUp delay-0-3s">
                                <img src="/assets/images/services/service-details2.jpg" alt="Services" />
                            </Link>
                            <Link href="/assets/images/services/service-details3.jpg" className="image wow fadeInUp delay-0-4s">
                                <img src="/assets/images/services/service-details3.jpg" alt="Services" />
                            </Link> */}
                    </div>
                </div>
                {/* Service images Area end */}
                {/* Service Counter Area start */}
                <div className="service-counter-area py-35">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-2s">
                                    <CounterUp count={300} time={3} plus />
                                    <h6 className="counter-title">Customer Take this Great service</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-4s">
                                    <CounterUp count={100} time={3} kPlus />
                                    <h6 className="counter-title">Company Take this Great service</h6>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="counter-item style-two counter-text-wrap wow fadeInUp delay-0-6s">
                                    <CounterUp count={25} time={3} k dolar />
                                    <h6 className="counter-title">Total Revenew Income gained from</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Service Counter Area end */}
                {/* Service Details Area start */}
                <div className="service-details-area pt-100 rpt-70 pb-150 rpb-100">
                    <div className="container">
                        <div className="row gap-50">
                            <div className="col-lg-8">
                                <div className="service-details-content rmb-65 wow fadeInUp delay-0-2s">
                                    <h3>Wealth Management</h3>
                                    <p className="sub-title">Build a unique Website with Pulsar Webflow Template</p>
                                    <h4>Digital Marketing</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis sit amet accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to odio nisi consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis? quis lor Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
                                    <h5>Sed ut perspiciatis unde omnis iste natus et</h5>
                                    <p>Need something changed or is there something not quite working the way you envisaged? Is your Nemo eni little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting ip industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an uia volupt unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not aut only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. sed</p>
                                    <h3>Processing of service</h3>
                                    <p className="sub-title">Build a unique Website with Pulsar Webflow Template</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis Sed ut perspiciatis unde omnis iste naccusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisq uam aut perspiciatis? Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.</p>
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
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-2s">
                                    <h6>Website Development</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-4s">
                                    <h6>Digital Marketin</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-6s">
                                    <h6>Mobile Application</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-2s">
                                    <h6>Content Solutions</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-4s">
                                    <h6>UI/UX Development</h6>
                                    <i className="far fa-long-arrow-alt-right" />
                                </Link>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <Link href="/service-details" className="feature-item wow fadeInUp delay-0-6s">
                                    <h6>Wooden Glass Door</h6>
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