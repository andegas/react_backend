import React from 'react';


const Point = (props) => {
    const {point} = props;
    return (
        <div>
            <div>City : {point.city}</div>
            <div>Country : {point.country}</div>
            <div>Get : {point.geo}</div>
            <div>Street : {point.street}</div>
            <div>Zip : {point.zip}</div>
        </div>

    );
};

export default Point;
