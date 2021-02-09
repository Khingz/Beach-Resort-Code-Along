import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer, RoomContext } from '../Context';
import Loading from './Loading';

const RoomsContainer = () => {
    return(
         <RoomConsumer>
            {value => {
                const { loading, sortedRooms, rooms} = value;
                if(loading) {
                    return <Loading />
                }
                return (
                <>
                    <RoomsFilter rooms={rooms} />
                    <RoomsList rooms={sortedRooms} />
                </>
                )
            }}
        </RoomConsumer>
    )
    
}


export default RoomsContainer;