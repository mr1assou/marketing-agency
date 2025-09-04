"use client"

import Link from "next/link"
import Image from "next/image"

export default function ServicesThree2() {
    return (
        <>
            <section className="services-area-three py-130 rpy-100 rel z-1" style={{ backgroundImage: 'url(assets/images/services/service-bg.png)' }}>
                <div className="container">
                    <div className="row pb-30 align-items-center justify-content-between">
                        <div className="col-xl-6 col-lg-8 wow fadeInLeft delay-0-2s">
                            <div className="section-title mb-20 rmb-35">
                                <span className="sub-title mb-15">Trusted digital marketing services</span>
                                <h2>Digital Marketing <span>Services</span> That Grow Your Business</h2>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 wow fadeInRight delay-0-2s">
                            <div className="text mb-20">We plan and execute data‑driven campaigns across SEO, paid media, and social to increase qualified traffic, leads, and revenue.</div>
                        </div>
                    </div>
                </div>
                <div className="container container-1450">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                            <Link href="/services/seo" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div className="service-style-three wow fadeInUp delay-0-2s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', backgroundColor: '#fff', cursor: 'pointer' }}>
                                    <div className="image"><Image src="/assets/images/hero/p1.jpg" alt="Service" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                    <div className="hover-content">
                                   
                                        <h6>SEO Optimization</h6>
                                    </div>
                                    <div className="content">
                                        <h6>SEO Optimization</h6>
                                        <p>Improve rankings, increase organic traffic, and capture demand.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                            <Link href="/services/social" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div className="service-style-three wow fadeInUp delay-0-3s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', backgroundColor: '#fff', cursor: 'pointer' }}>
                                    <div className="image"><Image src="/assets/images/hero/p2.jpg" alt="Service" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                    <div className="hover-content">
                                  
                                        <h6>Social Media Marketing</h6>
                                    </div>
                                    <div className="content">
                                        <h6>Social Media Marketing</h6>
                                        <p>Build awareness and engagement on the channels your audience uses.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                            <Link href="/services/ppc" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div className="service-style-three wow fadeInUp delay-0-4s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', backgroundColor: '#fff', cursor: 'pointer' }}>
                                    <div className="image"><Image src="/assets/images/hero/p3.jpg" alt="Service" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                    <div className="hover-content">
                           
                                        <h6>PPC Advertising</h6>
                                    </div>
                                    <div className="content">
                                        <h6>PPC Advertising</h6>
                                        <p>Launch targeted campaigns that drive leads and measurable ROI.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 mb-30">
                            <Link href="/services/content" style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                                <div className="service-style-three wow fadeInUp delay-0-5s" style={{ borderRadius: '15px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.1)', transition: 'all 0.3s ease', backgroundColor: '#fff', cursor: 'pointer' }}>
                                    <div className="image"><Image src="/assets/images/hero/p4.jpg" alt="Service" width={600} height={400} style={{ width: '100%', height: 'auto' }} /></div>
                                    <div className="hover-content">
                              
                                        <h6>Content Strategy</h6>
                                    </div>
                                    <div className="content">
                                        <h6>Content Strategy</h6>
                                        <p>Produce conversion‑focused content that educates and converts.</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                <style jsx>{`
                    .service-style-three:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
                    }
                    .service-style-three .content {
                        padding: 30px 25px 35px 25px;
                        min-height: 120px;
                    }
                    .service-style-three .hover-content {
                        padding: 20px 25px;
                    }
                    .service-style-three .icon {
                        margin-bottom: 15px;
                    }
                    .service-style-three .image img {
                        transition: transform 0.3s ease;
                    }
                    .service-style-three:hover .image img {
                        transform: scale(1.05);
                    }
                    .service-style-three h6 {
                        font-weight: 600;
                        color: #333;
                        transition: color 0.3s ease;
                    }
                    .service-style-three:hover h6 {
                        color: #fff;
                    }
                    .service-style-three p {
                        color: #666;
                        line-height: 1.6;
                        margin-bottom: 0;
                        transition: color 0.3s ease;
                    }
                    .service-style-three:hover p {
                        color: #fff;
                    }
                `}</style>
                </div>
            </section>
        </>
    )
}
