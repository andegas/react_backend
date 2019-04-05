import React from 'react';

const styles = {
    point: {
        paddingBottom: 10,
        borderBottomStyle: 'solid',
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        marginBottom: 10,
        backgroundColor: '#81b71a'
    },
};
const Point = (props) => {
    const {point} = props;
    return (
        <div style={styles.point}>
            <div>City : {point.city}</div>
            <div>Country : {point.country}</div>
            <div>Get : {point.geo}</div>
            <div>Street : {point.street}</div>
            <div>Zip : {point.zip}</div>
        </div>

    );
};

export default Point;
