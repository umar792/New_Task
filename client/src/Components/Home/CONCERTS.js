import React from 'react'
import { useSelector } from 'react-redux';
import TrendingCarousal from '../Carousal/TrendingCarousal/TrendingCarousal';

const CONCERTS = () => {
    const AllEvents = useSelector((state) =>
        state.events.AllEvents?.slice(20, 22)
    );
    return (
        <>
            <TrendingCarousal data={AllEvents} title={"Live CONCERTS"} image="https://tse2.mm.bing.net/th?id=OIP.WYLL8g1ILhl5ER_bp7GH2wHaE8&pid=Api&P=0&h=220" />
        </>
    )
}

export default CONCERTS