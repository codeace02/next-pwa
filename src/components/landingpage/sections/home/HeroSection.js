import React from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

export default function HeroSection() {
    return (
        <>
            <div
                className='border border-danger'
                style={{
                    backgroundColor: '#F9F9FA'
                }}
            >
                <Container
                    className={`${styles.heroOuter} d-flex align-items-center`}
                >
                    <Row className=''>
                        <Col lg={8} className='border'>
                            <p
                                className={`bg-white my-0 ${font.size14} ${font.weight5}`}
                                style={{
                                    lineHeight: '16.94px',
                                    borderRadius: '24px',
                                    padding: '8px 12px 8px 12px',
                                    display: 'inline-block',
                                }}
                            >
                                Connect, Collaborate & Grow
                            </p>

                            <p className={`${styles.heroTitle} ${font.interTight}`}>
                                Send <span className={`${font.interTight}`}>
                                    Dental
                                </span> Referrals In Seconds
                            </p>

                            <p>
                                Streamline your specialist referrals with real-time provider information and a unified online referral system
                            </p>

                            <button>
                                Start Free Trial
                            </button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
