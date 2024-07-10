import React from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';

const data = [
    {
        id: 1,
        src: '/images/m8images/referrals/r1.png',
        title: `Referrals Don't Have To Be One Way`,
        description: `Specialists often need referral sources for patients seeking new dentists. Whether it's a disgruntled patient needing a change, an uninsured patient looking for a membership plan, or an immediate need filled through same-day availability, make it easy for specialists to refer patients to your practice.`,
    },
    {
        id: 2,
        src: '/images/m8images/referrals/r2.png',
        title: `Grow Your Membership Base`,
        description: `Broadcast your membership to patients looking for a new dentist and continued care. Provide your practice with a healthy stream of revenue by broadcasting your membership plan within the database.`,
    },
    {
        id: 3,
        src: '/images/m8images/referrals/r3.png',
        title: `Gain Actionable Referral Insights`,
        description: `Manage your practice opportunities with reports and dashboards. Track referral sources, referred-out procedures, and use these actionable insights to assess the health of your practice or as valuation metrics.`,
    },
]

export default function Referrals() {

    return (
        <>
            <div className={`my-5 pt-lg-5`}>
                <Container>
                    <Row>
                        {
                            data?.map((item) => (
                                <Col sm={12} md={6} lg={4} key={item?.id} className='d-flex px-0'>
                                    <div className={`${styles.referralOuter} my-3 mx-2`}>
                                        <Image
                                            src={item?.src}
                                            alt='image'
                                            className={`img img-fluid ${styles.referralImage}`}
                                        />

                                        <p className={`my-3 ${styles.referralTitle}`}>
                                            {item?.title}
                                        </p>

                                        <p className={`mt-3 ${styles.referralDescription}`}>
                                            {item?.description}
                                        </p>
                                    </div>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </div>
        </>
    )
}
