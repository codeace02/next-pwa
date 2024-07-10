import React from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Row } from 'react-bootstrap';

export default function Streamline() {

    return (
        <>
            <div className={`my-5 py-5 ${styles.streamlineOuter}`}>
                <Container className={`py-lg-5`}>
                    <Row className='mx-0 px-0'>
                        <Col sm={12} lg={5} className='mt-5 mb-md-5 mb-2 mx-0 px-0'>
                            <p
                                className={`bg-white d-inline-block ${styles.work}`}
                            >
                                How it works
                            </p>
                            <p
                                className={`${styles.streamlineTitle} text-white`}
                            >
                                Streamline A Time- Consuming Referral Process. Here's how:
                            </p>
                            <button className={`${styles.trialButton}`}>
                                Start Free Trial
                            </button>
                        </Col>

                        <Col sm={12} md={6} lg={true} className=''>
                            <div className={`d-flex my-4 my-md-5`}>
                                <div>
                                    <p className={`${styles.numeric} me-2 my-0`}>1</p>
                                </div>
                                <div>
                                    <p className={`${styles.trialTitle} mt-0 mb-1`}>
                                        Office Staff Initiates Referral
                                    </p>

                                    <p className={`${styles.trialDescription} my-0`}>
                                        Pre-populate your information and use your Favorites List to expedite the process. NewReferral sources can also be identified based on the patient's insurance and/or urgency.
                                    </p>
                                </div>
                            </div>

                            <div className={`d-flex my-4 my-md-5`}>
                                <div>
                                    <p className={`${styles.numeric} me-2 my-0`}>2</p>
                                </div>
                                <div>
                                    <p className={`${styles.trialTitle} mt-0 mb-1`}>
                                        Send Referral & Check Status Updates
                                    </p>

                                    <p className={`${styles.trialDescription} my-0`}>
                                        Click and and visit the Referral Status Portal to view its status in real-time. Patients can log in to find or redirect referrals based on their criteria, saving your practice time.
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} md={6} lg={true} className='d-md-flex flex-column'>
                            <div className={`d-flex mb-4 my-md-5`}>
                                <div>
                                    <p className={`${styles.numeric} me-2 my-0`}>3</p>
                                </div>
                                <div>
                                    <p className={`${styles.trialTitle} mt-0 mb-1`}>
                                        Breeze Through Filling Out
                                    </p>

                                    <p className={`${styles.trialDescription} my-0`}>
                                        Easily select the appropriate referral data using our pre-made templates to streamline the process.
                                    </p>
                                </div>
                            </div>

                            <div className={`d-flex my-4 my-md-5`}>
                                <div>
                                    <p className={`${styles.numeric} me-2 my-0`}>4</p>
                                </div>
                                <div>
                                    <p className={`${styles.trialTitle} mt-0 mb-1`}>
                                        Communicate With Specialists
                                    </p>

                                    <p className={`${styles.trialDescription} my-0`}>
                                        Forget to send clearances, photos, or need to chat with referral office? Use our secure, HIPPA-compliant chat and send the information directly to the specialty office.
                                    </p>
                                </div>
                            </div>

                        </Col>

                    </Row>
                </Container>
            </div>
        </>
    )
}
