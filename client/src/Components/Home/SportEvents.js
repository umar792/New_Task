import React from 'react'
import { useSelector } from 'react-redux';
import TrendingCarousal from '../Carousal/TrendingCarousal/TrendingCarousal';
import imagwsport from "../../assets/sport.png";


const SportEvents = () => {
    const AllEvents = useSelector((state) =>
        state.events.AllEvents?.slice(12, 20)
    );
    return (
        <>
            <TrendingCarousal data={AllEvents} title={"Sports Tickets"} image={imagwsport} />
        </>
    )
}

export default SportEvents