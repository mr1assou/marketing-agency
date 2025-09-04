"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from "react"
export default function Contact() {
    const [submitted, setSubmitted] = useState(false)

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact Us">
                <div>
                    <section className="contact-page py-140 rpy-100 rel z-1">
                        <div className="container">
                            <div className="row pb-60 justify-content-center">
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-2s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact1.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Phone Number</h5>
                                            <Link href="/callto:+12555686523">+1255 - 568 - 6523</Link><br />
                                            <Link href="/callto:+12555686523">+1255 - 568 - 6523</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-4s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact2.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Address line</h5>
                                            <span>Bowery St, New York, NY<br /> 10013,USA</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="contact-info-item wow fadeInUp delay-0-6s">
                                        <div className="icon">
                                            <img src="/assets/images/icons/contact3.png" alt="Icon" />
                                        </div>
                                        <div className="content">
                                            <h5>Phone Number</h5>
                                            <span>Moday - Friday<br /> 09:00 AM - 05:00 PM</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-page-form wow fadeInUp delay-0-2s">
                                {!submitted && (
                                <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                                    <div className="row">
                                        <div className="col-md-6 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <input type="text" id="fname" name="fname" className="form-control" placeholder="First Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-4s">
                                            <div className="form-group">
                                                <input type="text" id="lname" name="lname" className="form-control" placeholder="Last Name*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <input type="email" id="email" name="email" className="form-control" placeholder="Email Address*" />
                                            </div>
                                        </div>
                                        <div className="col-md-6 wow fadeInUp delay-0-4s">
                                            <div className="form-group">
                                                <input type="text" id="phone" name="phone" className="form-control" placeholder="Phone Number*" />
                                            </div>
                                        </div>
                                        <div className="col-md-12 wow fadeInUp delay-0-2s">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control" rows={8} placeholder="Enter Your Messege" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 text-center wow fadeInUp delay-0-2s">
                                            <button type="submit" className="theme-btn style-two">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                                )}
                                {submitted && (
                                    <div className="alert alert-success text-center mt-3" role="alert">
                                        Thank you! Your message has been sent.
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                    {/* Contact Page Area end */}
                    {/* Location Map Area Start */}
                    <div className="contact-page-map wow fadeInUp delay-0-2s">
                        <div className="our-location">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m10!1m3!1d142190.2862584524!2d-74.01298319978558!3d40.721725351435126!2m1!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1663473911885!5m2!1sen!2sbd" style={{ border: 0, width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                    {/* Location Map Area End */}
                    {/* Lets Talk Area start */}
                    <div className="lets-talk-area text-center pt-110 rpt-80 pb-75 rpb-100">
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