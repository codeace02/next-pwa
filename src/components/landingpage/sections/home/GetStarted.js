import React from 'react';
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { FaCheck } from "react-icons/fa6";

const plan = [
    {
        id: 1,
        planName: 'PLAN 1',
        planDescription: 'Best for the hard players',
        price: '0',

        plans: [
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, '
        ]
    },
    {
        id: 2,
        planName: 'PLAN 2',
        planDescription: 'Best for the hard players',
        price: '70',

        plans: [
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, '
        ]
    },
    {
        id: 3,
        planName: 'PLAN 1',
        planDescription: 'Best for the hard players',
        price: '130',

        plans: [
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, ',
            'Lorem ipsum dolor sit amet, bhfhfgk consectetur adipiscing elit, '
        ]
    },
]

export default function GetStarted() {
    return (
        <>
            <div className={`my-5`}>
                <Container>
                    <div className='text-center'>
                        <p className={`text-center ${styles.plan}`}>
                            Ready to get <span> started?</span>
                            <Image
                                src='/images/m8images/started.png'
                                className={`${styles.startLine} img img-fluid`}
                                alt='line'
                            />
                        </p>
                    </div>

                    <Row className='mt-5 justify-content-center justify-content-md-start'>
                        {
                            plan.map((item) => (
                                <Col
                                    xs={12}
                                    sm={10}
                                    md={6}
                                    lg={4}

                                    key={item?.id}
                                    className={`my-3`}
                                >
                                    <div className={`${styles.planOuter}`}>
                                        <div className={`text-center`}>
                                            <p
                                                className={`mt-0 mb-2 ${styles.planTitle}`}
                                                style={{
                                                    color: item?.id == 1 ? '#536ECD' : item?.id == 2 ? '#17813C' : item?.id == 3 && '#EE9421'
                                                }}
                                            >
                                                {item?.planName}
                                            </p>
                                            <p className={`${styles.planDescription} my-2`}>
                                                {item?.planDescription}
                                            </p>
                                            <p className={`my-4 ${styles.planPrice}`}>
                                                ${item?.price}<span>/year</span>
                                            </p>

                                            <button className={`${styles.getStarted} mb-3`}>
                                                Get Started
                                            </button>
                                        </div>

                                        {
                                            item?.plans?.map((individualPlan, id) => (
                                                <div key={id} className={`d-flex align-items-start mt-3`}>
                                                    <Image
                                                        src='/images/m8images/tick.png'
                                                        height={10}
                                                        width={20}
                                                        className='img img-fluid mt-2 me-1'
                                                        style={{
                                                            objectFit: 'contain'
                                                        }}
                                                    />
                                                    <p className={`my-0 ${styles.individualPlan}`}>
                                                        {individualPlan}
                                                    </p>
                                                </div>
                                            ))
                                        }
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
