import React from 'react'
import { useSelector } from 'react-redux';
import TrendingCarousal from '../Carousal/TrendingCarousal/TrendingCarousal';

const COMEDY = () => {
    const AllEvents = useSelector((state) =>
        state.events.AllEvents?.slice(22, 30)
    );
    return (
        <>
            <TrendingCarousal data={AllEvents} title={"Comedy Live Events"} image="https://content.tripster.com/media/product/gallery/original/Nathan_Burton_Comedy_Magic_(75707).jpg" />
        </>
    )
}

export default COMEDY