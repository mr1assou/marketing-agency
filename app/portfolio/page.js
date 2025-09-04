
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Portfolio() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Portfolio Page">
                <div>
                    <section className="portfolio-area pt-140 rpt-100 pb-90 rpb-50 rel z-1">
                        <div className="row portfolio-masonry-active style-one">
                            <div className="col-xl-3 col-sm-6">
                                <div className="portfolio-item wow fadeInUp delay-0-2s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio1.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View Project</span>
                                        <i className="fal fa-long-arrow-down" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 order-xl-2">
                                <div className="portfolio-item wow fadeInUp delay-0-6s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio3.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View Project</span>
                                        <i className="fal fa-long-arrow-down" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="portfolio-item wow fadeInUp delay-0-4s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio2.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View Project</span>
                                        <i className="fal fa-long-arrow-down" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                                <div className="portfolio-item wow fadeInUp delay-0-2s">
                                    <div className="portfolio-image">
                                        <img src="/assets/images/portfolio/portfolio4.jpg" alt="Portfolio" />
                                    </div>
                                    <Link className="hover-box" href="/portfolio-details">
                                        <span>View Project</span>
                                        <i className="fal fa-long-arrow-down" />
                                    </Link>
                                    <div className="portfolio-content">
                                        <h6><Link href="/portfolio-details">Digital Marketing</Link></h6>
                                        <Link className="tag-category" href="/blog">Art , Direction</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Portfolio Area end */}
                    {/* Lets Talk Area start */}
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