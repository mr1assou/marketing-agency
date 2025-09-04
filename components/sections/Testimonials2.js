'use client'
import Slider from "react-slick"

const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 600,
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000,
}

export default function Testimonials2() {
    return (
        <>
            <section className="testimonials-two-area pb-115 rpb-80 rel z-1">
                <div className="container">
                    <div className="testimonials-two-inner" style={{ backgroundImage: 'url(assets/images/testimonials/testimonials-bg.png)' }}>
                        <div className="row align-items-center justify-content-between">
                            <div className="col-lg-3 wow fadeInRight delay-0-2s">
                                <div className="testimonials-image rmb-55">
                                    <img src="/assets/images/testimonials/testimonials-two-left.png" alt="Testimonials" />
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-9 wow fadeInLeft delay-0-2s">
                                <Slider {...settings} className="testimonials-two-active">
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Quality Services</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Leslie Alexander</h6>
                                                <span className="designation">ThemeForest Exclusive</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Quality Services</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Cameron Williamson</h6>
                                                <span className="designation">graphics Design</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Quality Services</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo enim ipsam voluptatem</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Leslie Alexander</h6>
                                                <span className="designation">ThemeForest Exclusive</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="testimonial-item">
                                        <div className="testimonial-header">
                                            <h6>Quality Services</h6>
                                            <div className="ratting">
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                                <i className="fas fa-star" />
                                            </div>
                                        </div>
                                        <div className="author-speech">
                                            <p>Totam rem aperiam eaqu ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium sunt explicabo enim ipsam voluptatem</p>
                                        </div>
                                        <div className="testimonial-author">
                                            <div className="author-image">
                                                <i className="fal fa-comments" />
                                            </div>
                                            <div className="author-info">
                                                <h6>Cameron Williamson</h6>
                                                <span className="designation">graphics Design</span>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
