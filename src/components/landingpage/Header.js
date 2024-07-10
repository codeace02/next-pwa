'use client'

import { useState } from 'react';
import { Image, Container, Nav, Navbar } from 'react-bootstrap';
import font from '../../stylesheet/font.module.scss';
import newstyles from '../../stylesheet/newheader.module.scss';
import Link from 'next/link';
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { useRouter } from 'next/navigation';

export default function Header() {

    const [showLogin, setShowLogin] = useState(false);
    const [firstToggleExpanded, setFirstToggleExpanded] = useState(false);

    const router = useRouter();

    return (

        <Navbar sticky='top' collapseOnSelect expand="xl" style={{ background: '#FFFFFF' }}>
            <Container fluid className={`mx-xl-5 pb-lg-2`}>

                <Navbar.Brand>
                    <Link href="/">
                        <Image
                            src='/images/newlogo.png'
                            className='img img-fluid'
                            alt='drz'
                            width={170}
                            height={170}
                        />
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle
                    onClick={() => {
                        setFirstToggleExpanded(!firstToggleExpanded)
                    }}
                >
                    {
                        firstToggleExpanded ?
                            <RxCross2
                                size={20}
                            />
                            :
                            <IoIosMenu
                                size={20}
                            />
                    }
                </Navbar.Toggle>

                <Navbar.Collapse>
                    <Nav className="mt-lg-2 pt-lg-1 mx-auto">
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/"
                        >
                            <span
                                className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/' ? font.weight6 : font.weight4} ${font.lh279}`}
                            >
                                Home
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="#about-us"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/general' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/general' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                General Dentist
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/plan"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/specialist' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/specialist' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                Specialist
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/plan"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/features' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/features' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                Features
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/plan"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/pricing' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/pricing' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                Pricing
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/plan"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/advisory' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/advisory' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                Advisory Panel
                            </span>
                        </Link>
                        <Link
                            className={`text-decoration-none my-2 my-lg-0`}
                            href="/plan"
                        >
                            <span className={`ps-2 px-lg-4 px-xl-2 px-xxl-4 ${font.interTight} ${font.size16} ${router.asPath == '/about-us' ? font.homeNavBlack : font.homeNavGray} ${router.asPath == '/about-us' ? font.weight6 : font.weight4} ${font.lh279}`}>
                                About Us
                            </span>
                        </Link>

                        <span className={`d-flex justify-content-center my-2 my-lg-0 flex-wrap`}>
                            <p
                                className={`me-lg-3 my-lg-0 text-decoration-none position-relative`}
                                onMouseEnter={() => setShowLogin(true)}
                                onMouseLeave={() => setShowLogin(false)}
                            >
                                <span
                                    className={`${font.interTight} cursor-pointer ps-lg-5 pe-lg-3 ${font.size16} ${font.weight5} ps-3 pe-5`}
                                    onClick={() => (window.innerWidth < 992) ?
                                        setShowLogin(!showLogin)
                                        :
                                        ""
                                    }
                                    style={{
                                        color: '#075DC1',
                                        lineHeight: '19.36px'
                                    }}
                                >
                                    Log in {!showLogin ? <PiCaretDownBold
                                        color='dark'
                                        className="transition"
                                        style={{
                                            color: '#075DC1'
                                        }}
                                    />
                                        :
                                        <PiCaretUpBold
                                            color='dark'
                                            style={{
                                                color: '#075DC1'
                                            }}
                                        />
                                    }
                                </span>
                                {/* showLogin && */}

                                {showLogin &&
                                    <div className={`${newstyles.loginHoverOuter1}`}>
                                        <section className={`py-2 mt-4 ${newstyles.loginHoverOuter}`}>
                                            <p
                                                className={`${newstyles.practiceLogin} ${font.interTight} cursor-pointer px-2 text-center py-2 mx-3 ${font.size16} ${font.newFontLink} my-2`}
                                                onClick={() => router.push('/login')}
                                            >
                                                Practice Login
                                            </p>
                                            <p
                                                className={`${newstyles.practiceLogin} ${font.interTight} cursor-pointer px-2 text-center py-2 mx-3 ${font.size16} ${font.newFontLink} my-2`}
                                                onClick={() => router.push('/customer-login')}
                                            >
                                                Patient Login
                                            </p>

                                            <p
                                                className={`${newstyles.practiceLogin} ${font.interTight} cursor-pointer px-2 text-center py-2 mx-3 ${font.size16} ${font.newFontLink} my-2`}
                                            // onClick={() => router.push('/customer-login')}
                                            >
                                                Guest Login
                                            </p>
                                        </section>
                                    </div>
                                }
                            </p>
                            <span className={`my- my-lg-0`}>
                                <Link
                                    className={`text-decoration-none`}
                                    href="/customer-signup"
                                >
                                    <span
                                        className={`${font.interTight} ${font.size16} ${font.fontWhite} ${font.weight5} ${newstyles.signUp} py-2 px-4`}
                                        style={{
                                            lineHeight: '19.36px'
                                        }}
                                    >
                                        Try for free
                                    </span>
                                </Link>
                            </span>
                        </span>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


