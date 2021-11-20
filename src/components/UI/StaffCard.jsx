import React from 'react'
import styles from './styles.module.css'
import { Center } from '@chakra-ui/layout'

const StaffCard = ({ title, count, Icon, color }) => {
    return (
        <div className={styles.hcard}>
            <div className={styles.hlgrid}>
                <div className={styles.icons}>
                    <div className={`${styles.square} ${color}`}>
                        <Center>
                            <i>{<Icon />}</i>
                        </Center>

                    </div>
                </div>
                <div className={styles.text}>
                    <p>{title}</p>
                    <h1>{count}</h1>
                </div>
            </div>
        </div>
    )
}

export default StaffCard
