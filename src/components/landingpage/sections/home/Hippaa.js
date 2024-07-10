import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import font from '../../../../stylesheet/font.module.scss';
import styles from '../../../../stylesheet/m8landing.module.scss';

export default function Hippaa() {
    return (
        <>
            <Container
                className={`my-5 ${styles.hippaOuter} py-3 py-md-4 d-flex justify-content-evenly align-items-center`}
                style={{
                    // background: '#F6F6F6',
                    borderRadius: '12px'
                }}
            >

                <Image
                    src='/images/m8images/hippa1.png'
                    // height={120}
                    // width={120}
                    alt='hippa'
                    className={`img img-fluid ${styles.hippaImg}`}
                />

                <Image
                    src='/images/m8images/hippa2.png'
                    // height={120}
                    // width={120}
                    alt='hippa'
                    className={`img img-fluid ${styles.hippaImg}`}
                />

                <Image
                    src='/images/m8images/hippa3.png'
                    // height={120}
                    // width={120}
                    alt='hippa'
                    className={`img img-fluid ${styles.hippaImg}`}
                />
            </Container>
        </>
    )
}
