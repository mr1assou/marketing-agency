"use client"


import Link from "next/link"

export default function Hero2() {
    return (
        <>
            <section className="hero-area-two pt-200 rpt-150 pb-90 rel z-1" style={{ minHeight: '100vh', width: '100vw', position: 'relative', overflow: 'hidden' }}>
                <div className="hero-image-two" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(assets/images/hero/hero-main.png)', position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-11">
                            <div className="hero-content-two">
                                <h1 className="wow fadeInUp delay-0-2s">m<span>a</span>rketing <i className="fas fa-star-of-life" /></h1>
                                <div className="hero-sub-heading mb-25 wow fadeInUp delay-0-4s">
                                    <div className="text">We are a digital agency crafting brands, websites, and campaigns that drive growth. From strategy to execution, we help you stand out and scale.</div>
                                    <span className="agency-text">agency</span>
                                </div>
                                <div className="hero-scroll-down wow fadeInDown delay-0-6s">
                                    <Link href="#about"><i className="far fa-arrow-down" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-contact-info">
                    <Link className="number" href="/callto:(603)5550123">(603) 555-0123</Link>
                    <Link className="email" href="mailto:contact@gmail.com">Contact@gmail.com</Link>
                </div>
                <div className="hero-shape-two">
                    <img src="/assets/images/hero/hero-shape-two.png" alt="Shape" />
                </div>
                <style jsx>{`
                    .hero-image-two { background-position: center; }
                    @media (max-width: 767px) {
                        .hero-image-two { background-position: right center; }
                    }
                `}</style>
            </section>
        </>
    )
}
