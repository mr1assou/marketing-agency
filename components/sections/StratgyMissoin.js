
import dynamic from 'next/dynamic'
import Image from 'next/image'
const CounterUp = dynamic(() => import('@/components/elements/CounterUp'), {
    ssr: false,
})
export default function StratgyMissoin() {
    return (
        <>
            <section className="stratgy-missoin-area pt-140 rpt-100 pb-85 rpb-45 rel z-1">
                <div className="container">
                    <div className="row align-items-center justify-content-between">
                        <div className="col-xl-6 wow fadeInRight delay-0-2s">
                            <div className="stratgy-missoin-left mb-55">
                                <div className="section-title mb-30">
                                    <span className="sub-title mb-15">Our strategy & mission</span>
                                    <h2>Driving Growth with Data‑Driven Marketing</h2>
                                </div>
                                <h5 className="first-letter-big">We help brands attract, convert, and retain customers using the right mix of SEO, paid media, social, and content—guided by data and executed with creativity.</h5>
                                <div className="row pt-20">
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={8} time={3} k />
                                            <h6 className="counter-title">projects delivered</h6>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={28} time={3} />
                                            <h6 className="counter-title">industry awards</h6>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-3 col-md-4 col-6 col-small">
                                        <div className="counter-item counter-text-wrap">
                                            <CounterUp count={80} time={3} k />
                                            <h6 className="counter-title">satisfied clients</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 wow fadeInLeft delay-0-2s">
                            <div className="stratgy-missoin-right mb-55">
                                <div className="image"><Image src="/assets/images/hero/strategy.jpg" alt="Mission" width={800} height={600} style={{ width: '100%', height: 'auto' }} /></div>
                                <div className="skillbar" data-percent={88}>
                                    <span className="skillbar-title">Marketing</span>
                                    <div className="progress-bar-striped skillbar-bar progress-bar-animated" role="progressbar" aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} style={{ width: "88%" }}>
                                        <span className="skill-bar-percent" /></div>
                                </div>
                                <div className="row justify-content-between pt-5">
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon"><Image src="/assets/images/icons/light.png" alt="Icon" width={48} height={48} /></div>
                                            <h6>Performance‑first creative</h6>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="service-stye-two">
                                            <div className="icon"><Image src="/assets/images/icons/development.png" alt="Icon" width={48} height={48} /></div>
                                            <h6>Full‑funnel campaign execution</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
