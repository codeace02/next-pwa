import React from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';

export default function Last() {

    return (
        <>
            <div className={`my-5 mx-2 mx-md-0`}>
                <Container className={`d-flex ${styles.triangleOuter} py-5 px-4 p-lg-0`}>
                    <Row>
                        <Col
                            className={`mt-lg-5 mb-lg-3 pt-lg-5 ps-lg-5 ms-lg-5`}
                            style={{
                                zIndex: '2'
                            }}
                        >
                            <p className={`fontKarla my-0 ${styles.triangleTitle}`}>
                                Get Started with Toothreferral Today!
                            </p>

                            <p className={`fontInter my-2 ${styles.triangleDescription}`}>
                                Make a messy, cumbersome referral process a thing of the past
                            </p>

                            <button className={`mt-4 fontInter ${styles.contactUs}`}>
                                Get started for free
                            </button>

                            <div className={`d-fle`}>
                                <Image
                                    src='/images/m8images/playstore.png'
                                    className={`${styles.triangleGoogle} img img-fluid me-2 cursor-pointer`}
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                />
                                <Image
                                    src='/images/m8images/appstore.png'
                                    className={`${styles.triangleGoogle} img img-fluid cursor-pointer`}
                                    style={{
                                        objectFit: 'contain'
                                    }}
                                />
                            </div>

                        </Col>
                        <Col
                            className='pe-0 d-lg-block d-none'
                            style={{
                                alignContent: 'end',
                                zIndex: '2'
                            }}
                        >
                            <Image
                                src='/images/m8images/triangle3.png'
                                className={`img img-fluid`}
                                style={{
                                    objectFit: 'contain',
                                    borderRadius: '0 0 40px 0',
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
