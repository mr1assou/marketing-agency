import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="main-footer footer-one pt-70 pb-20 bgc-black bordered-top rel z-1">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-about wow fadeInUp delay-0-2s">
                                <div className="footer-logo mb-15">
                                    <Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" /></Link>
                                </div>
                                <p>Bjørn is an award UI/UX designs and branding agency based in New York, USA.</p>
                                <div className="social-style-one mt-15">
                                    <Link href="#"><i className="fab fa-twitter" /></Link>
                                    <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link href="#"><i className="fab fa-instagram" /></Link>
                                    <Link href="#"><i className="fab fa-pinterest-p" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-3s">
                                <h6 className="footer-title">Our Links</h6>
                                <ul>
                                    <li><Link href="/services">Features</Link></li>
                                    <li><Link href="/team">Team Member</Link></li>
                                    <li><Link href="/contact">Our Careers</Link></li>
                                    <li><Link href="/contact">Login Here</Link></li>
                                    <li><Link href="/contact">Registered</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-6">
                            <div className="footer-widget widget-links wow fadeInUp delay-0-4s">
                                <h6 className="footer-title">Find It Fast</h6>
                                <ul>
                                    <li><Link href="/index2">Home</Link></li>
                                    <li><Link href="/services">Services</Link></li>
                                    <li><Link href="/about">About Us</Link></li>
                                    <li><Link href="/services">Features</Link></li>
                                    <li><Link href="/contact">Contacts</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="footer-widget widget-text wow fadeInUp delay-0-5s">
                                <div className="text">
                                    <p>New South Head Rd, Double Bay NSW 2028, New York</p>
                                    <Link href="mailto:contact@bjorn.com">contact@bjorn.com</Link><br />
                                    <Link href="/callto:+1300877503">+1300 877 503</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
