import Link from "next/link"
import Menu from "../Menu"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isSidebar, handleSidebar }) {
    return (
        <>

            <header className={`main-header no-border ${scroll ? "fixed-header" : ""}`}>
                {/*Header-Upper*/}
                <div className="header-upper">
                    <div className="container container-1695 clearfix">
                        <div className="header-inner rpy-10 rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo"><Link href="/"><img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" /></Link></div>
                            </div>
                            <div className="nav-outer ms-lg-auto clearfix">
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-lg">
                                    <div className="navbar-header">
                                        <div className="mobile-logo">
                                            <Link href="/">
                                                <img src="/assets/images/logos/logo.png" alt="Logo" title="Logo" />
                                            </Link>
                                        </div>
                                        {/* Toggle Button */}
                                        <button type="button" className="navbar-toggle" onClick={handleMobileMenu}>
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                            <span className="icon-bar" />
                                        </button>
                                    </div>
                                    <div className={`navbar-collapse collapse clearfix ${isMobileMenu ? "show" : ""}`}>
                                        <Menu />
                                    </div>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                            {/* Menu Button */}
                            <div className="menu-btns ms-lg-auto">
                                <button className="cart"><i className="far fa-shopping-cart" /></button>
                                {/* menu sidbar */}
                                <div className="menu-sidebar" onClick={handleSidebar}>
                                    <button><img src="/assets/images/icons/toggler.png" alt="Toggler" /></button>
                                </div>
                                <Link href="/contact" className="theme-btn">let,s talk</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
            </header>

        </>
    )
}
