import React from 'react';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import { RoomConsumer } from '../context';
import Loading from './Loading';

const RoomsContainer = () => {
    return(
        <RoomConsumer>
            {(context => {

                const { loading, sortedRooms, rooms } = context;

                if (loading) {
                    return (
                        <Loading />
                    );
                }

                return (
                    <>
                        <RoomsFilter rooms={rooms}/>
                        <RoomsList rooms={sortedRooms}/>
                    </>
                );
            })}
        </RoomConsumer>
    )
};

export default RoomsContainer;