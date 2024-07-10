import React from 'react';
import styles from '../../stylesheet/m8landing.module.scss';
import font from '../../stylesheet/font.module.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa6';
// import { FaFacebook } from 'react-icons/fa';

export default function Footer() {

    const router = useRouter();

    return (
        <>
            <div
                className={`${styles.background} pt-5 pb-4 px-lg-3`}
                style={{
                    background: '#323232'
                }}
            >
                <Container fluid className={`px-lg-5 ps-4`}>
                    <Row className={``}>
                        <Col sm={12} md={6} lg={3} className={``}>
                            <Image
                                src='/images/whiteFooter.png'
                                className='mb-2 img img-fluid cursor-pointer me-3'
                                alt='logo'
                                width={200}
                                height={200}
                                onClick={() => router.push('/')}
                                style={{
                                    marginLeft: '-6px'
                                }}
                            />

                            <p
                                className={`my-2 ${font.size14} ${font.weight4} ${font.footerGrey}`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Contact us via email
                            </p>

                            <p
                                className={`mt-2 mb-4 ${font.size18} ${font.weight5}`}
                                style={{
                                    lineHeight: '21.78px',
                                    color: '#F2AC59'
                                }}
                            >
                                info@toothreferral.com
                            </p>

                            <p
                                className={`my-2 ${font.size14} ${font.weight4} ${font.footerGrey}`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Socials
                            </p>

                            <div className='d-flex align-items-center flex-wrap flex-sm-nowrap'>

                                <FaFacebook
                                    color='white'
                                    size={23}
                                    className='me-4 cursor-pointer'
                                />

                                <FaYoutube
                                    color='white'
                                    size={23}
                                    className='me-4 cursor-pointer'
                                />
                            </div>
                        </Col>

                        <Col sm={12} md={6} lg={3} className='ps-lg-5 mt-4 mt-md-0'>
                            <p
                                className={`my-3 ${font.size16} ${font.weight7} text-white`}
                                style={{
                                    lineHeight: '18.7px',
                                    letterSpacing: '-1px'
                                }}
                            >
                                Home
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                General Dentist
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Specialist
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Features
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Pricing
                            </p>

                            <p
                                className={`hoverLink my-3 cursor-pointer ${font.size14} ${font.weight4} ${font.footerGrey}`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Advisory Panel
                            </p>

                        </Col>

                        <Col sm={12} md={6} lg={3} className='ps-lg-5 mt-4 mt-lg-0'>
                            <p
                                className={`my-3 ${font.size16} ${font.weight7} text-white`}
                                style={{
                                    lineHeight: '18.7px',
                                    letterSpacing: '-1px'
                                }}
                            >
                                Company
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Home
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                About Us
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                FAQs
                            </p>

                        </Col>

                        <Col sm={12} md={6} lg={3} className='ps-lg-5 mt-4 mt-lg-0'>
                            <p
                                className={`my-3 ${font.size16} ${font.weight7} text-white`}
                                style={{
                                    lineHeight: '18.7px',
                                    letterSpacing: '-1px'
                                }}
                            >
                                Legal
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Privacy Policy
                            </p>

                            <p
                                className={`hoverLink my-3 ${font.size14} ${font.weight4} ${font.footerGrey} cursor-pointer`}
                                style={{
                                    lineHeight: '18.2px'
                                }}
                            >
                                Terms of Use
                            </p>
                        </Col>
                    </Row>

                    <div className={`${styles.footerHr} mt-5 mb-4`} />

                    <p
                        className={`my-0 text-center ${font.size12} ${font.weight4} ${font.footerGrey}`}
                        style={{
                            lineHeight: '15.6px'
                        }}
                    >
                        Copyright © {new Date().getFullYear()} Toothreferral.com
                    </p>
                </Container>
            </div>
        </>
    )
}