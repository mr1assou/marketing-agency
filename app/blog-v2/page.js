
"use client"

import Layout from "@/components/layout/Layout"
import Link from "next/link"
import Image from "next/image"
export default function Blog2() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="">
                <div>
                    {/* Blog Page Two Area start */}
                    <div className="blog-page-two pt-100 rpt-70">
                        <div className="container">
                            <div className="row gap-50">
                                <div className="col-lg-8">
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Marketing Strategy</Link>
                                            <Image src="/assets/images/hero/marketing.jpg" alt="Blog" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">Build a data‑driven marketing strategy in 2025</Link></h4>
                                            <p>Turn analytics into action: define measurable goals, map your funnel, and align SEO, PPC, social, and content to a single growth plan with clear KPIs and weekly iteration.</p>
                                        </div>
                                    </div>
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">SEO vs PPC</Link>
                                            <Image src="/assets/images/hero/marketing2.jpg" alt="Blog" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">SEO vs. PPC: when to invest in each for growth</Link></h4>
                                            <p>Use SEO to capture high‑intent searches long‑term and PPC to test messages and scale quickly. Learn budget allocation models that balance CAC, ROAS, and compound organic gains.</p>
                                            <Link href="/blog-details" className="read-more">Read More <i className="far fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                    <div className="blog-standard-item wow fadeInUp delay-0-2s">
                                        <div className="image">
                                            <Link href="#" className="category">Creative Testing</Link>
                                            <Image src="/assets/images/hero/marketing4.jpg" alt="Blog" width={1200} height={675} style={{ width: '100%', height: 'auto' }} />
                                        </div>
                                        <div className="content">
                                            <ul className="blog-meta">
                                                <li><i className="fal fa-user" /> <Link href="#">Mehedii .Ha</Link></li>
                                                <li><i className="fal fa-comments" /> <Link href="#">Coments (03)</Link></li>
                                                <li><i className="fal fa-clock" /> <Link href="#">3 min Read</Link></li>
                                            </ul>
                                            <h4><Link href="/blog-details">A simple framework to scale creative on social</Link></h4>
                                            <p>Test hooks, formats, and offers systematically. Use learnings to iterate weekly, feed winners into prospecting and retargeting, and lift CTR while lowering CPM and CPA.</p>
                                        </div>
                                    </div>
                             
                                </div>
                                <div className="col-lg-4 col-md-7 col-sm-9">
                                    <div className="main-sidebar rmt-65">
                                        <div className="widget widget-author wow fadeInUp delay-0-4s">
                                            <Image src="/assets/images/hero/x.jpg" alt="Author" width={160} height={160} />
                                            <h6>Rosalina D. Willaim</h6>
                                            <span className="designation">CEO</span>
                                            <p>he whimsically named Egg Canvas is the design director and photographer in New York. Why the nam</p>
                                            <div className="social-style-one">
                                                <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="#"><i className="fab fa-twitter" /></Link>
                                                <Link href="#"><i className="fab fa-instagram" /></Link>
                                                <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                            </div>
                                        </div>
                                        <div className="widget widget-search wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">search here</h5>
                                            <form action="#" className="default-search-form">
                                                <input type="text" placeholder="search here..." required />
                                                <button type="submit" className="searchbutton far fa-search" />
                                            </form>
                                        </div>
                                        <div className="widget widget-recent-news wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Our Services</h5>
                                            <ul>
                                                <li>
                                                    <div className="image">
                                                        <Image src="/assets/images/hero/p1.jpg" alt="SEO Optimization" width={80} height={60} style={{ width: '100%', height: 'auto' }} />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="/services/seo"><i className="far fa-cog" /> Service</Link>
                                                        <h6><Link href="/services/seo">SEO Optimization</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <Image src="/assets/images/hero/p2.jpg" alt="Social Media Marketing" width={80} height={60} style={{ width: '100%', height: 'auto' }} />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="/services/social"><i className="far fa-cog" /> Service</Link>
                                                        <h6><Link href="/services/social">Social Media Marketing</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <Image src="/assets/images/hero/p3.jpg" alt="PPC Advertising" width={80} height={60} style={{ width: '100%', height: 'auto' }} />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="/services/ppc"><i className="far fa-cog" /> Service</Link>
                                                        <h6><Link href="/services/ppc">PPC Advertising</Link></h6>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="image">
                                                        <Image src="/assets/images/hero/p4.jpg" alt="Content Strategy" width={80} height={60} style={{ width: '100%', height: 'auto' }} />
                                                    </div>
                                                    <div className="content">
                                                        <Link className="date" href="/services/content"><i className="far fa-cog" /> Service</Link>
                                                        <h6><Link href="/services/content">Content Strategy</Link></h6>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                  
                                        <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                                            <h5 className="widget-title">Popular Tags</h5>
                                            <div className="tag-coulds">
                                                <Link href="/blog">Design</Link>
                                                <Link href="/blog">marketing</Link>
                                                <Link href="/blog">search</Link>
                                                <Link href="/blog">branding</Link>
                                                <Link href="/blog">startup</Link>
                                                <Link href="/blog">tech</Link>
                                                <Link href="/blog">landing</Link>
                                                <Link href="/blog">coding</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Blog Page Two Area end */}
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
                    {/* Headline Area end */}
                </div>

                <style jsx>{`
                    .widget-author img {
                        width: 160px;
                        height: 160px;
                        border-radius: 50%;
                        object-fit: cover;
                        display: block;
                        margin: 0 auto 15px;
                    }
                `}</style>

            </Layout>
        </>
    )
}