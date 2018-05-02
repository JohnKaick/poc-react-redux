import React from 'react'

const styles = {
    h: {
        fontWeight: '500',
        fontSize: '0.80rem',
        marginBottom: 0,
        textTransform: 'uppercase',
        fontFamily: 'Raleway'
    },
    p: {
        fontSize: '1.05rem',
        fontFamily: 'Roboto'
    },
    i: {
        borderLeft: 'solid 2px #2d84c6',
        paddingLeft: 20
    }
}

export default ({
    title, value
}) => (
        <div style={styles.i}>
            <span style={styles.h}>{title}</span>
            <p style={styles.p}>{value}</p>
        </div>
    )