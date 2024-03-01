import React from 'react'
import { useSelector } from 'react-redux';
import TrendingCarousal from '../Carousal/TrendingCarousal/TrendingCarousal';
import trendingimage from "../../assets/trending.png"

const TrendEvents = () => {
    const AllEvents = useSelector((state) =>
        state.events.AllEvents?.slice(0, 12)
    );
    return (
        <>
            <TrendingCarousal data={AllEvents} title={"TRENDING LIVE EVENTS"} image={trendingimage} />
        </>
    )
}

export default TrendEvents