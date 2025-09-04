'use client'
import Link from "next/link"
import { useState } from 'react'

export default function Menu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    const linkStyle = { color: '#fff' }

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                <li className="dropdown"
                    onMouseEnter={() => handleClick(1)} onMouseLeave={() => handleClick(1)}>
                    <Link href="/" style={linkStyle}>Home</Link>
                    {/* <ul style={{ display: isActive.key == 1 ? 'block' : 'none' }}>
                        <li><Link href="/" style={linkStyle}>Home One</Link></li>
                        <li><Link href="/index2" style={linkStyle}>Home Two</Link></li>
                        <li><Link href="/index3" style={linkStyle}>Home Three</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"
                    onMouseEnter={() => handleClick(2)}
                    onMouseLeave={() => handleClick(2)}>
                    <Link href="/about" style={linkStyle}>About Us</Link>
                    {/* <ul style={{ display: isActive.key == 2 ? 'block' : 'none' }}>
                        
                        <li><Link href="/faqs" style={linkStyle}>faqs</Link></li>
                        <li><Link href="/shop" style={linkStyle}>Products</Link></li>
                        <li><Link href="/product-details" style={linkStyle}>Product Details</Link></li>
                        <li><Link href="/team" style={linkStyle}>Team Members</Link></li>
                        <li><Link href="/team-details" style={linkStyle}>Team Details</Link></li>
                        <li><Link href="/404" style={linkStyle}>404 error</Link></li>
                    </ul> */}
                </li>
                <li className="dropdown"
                    onMouseEnter={() => handleClick(3)}
                    onMouseLeave={() => handleClick(3)}>
                    <Link href="/services" style={linkStyle}>Services</Link>
                    <ul style={{ display: isActive.key == 3 ? 'block' : 'none' }}>
                        <li><Link href="/services/content" style={linkStyle}>content</Link></li>
                        <li><Link href="/services/ppc" style={linkStyle}>ppc</Link></li>
                        <li><Link href="/services/seo" style={linkStyle}>seo</Link></li>
                        <li><Link href="/services/social" style={linkStyle}>social</Link></li>
                    </ul>
                </li>
             
                <li className="dropdown"
                    onMouseEnter={() => handleClick(5)}
                    onMouseLeave={() => handleClick(5)}>
                    <Link href="/blog-v2" style={linkStyle}>blog</Link>
                    {/* <ul style={{ display: isActive.key == 5 ? 'block' : 'none' }}>
                        <li><Link href="/blog" style={linkStyle}>blog v1</Link></li>
                        <li><Link href="/blog-v2" style={linkStyle}>blog v2</Link></li>
                        <li><Link href="/blog-details" style={linkStyle}>blog details</Link></li>
                    </ul> */}
                </li>
                <li><Link href="/contact" style={linkStyle}>Contact</Link></li>
            </ul>
        </>
    )
}
