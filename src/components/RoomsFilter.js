import React from 'react';
import { RoomConsumer } from '../context';
import Title from './Title';

const getUnique = ( items, value ) => {
    return [...new Set( items.map( item => item[value ] ))]
}

const RoomsFilter = ({ rooms }) => {

    let types = getUnique( rooms, 'type' );
    types = ['all', ...types];
    types = types.map( ( item, index ) => {
        return <option value={item} key={index}> {item} </option>
    });

    let people = getUnique( rooms, 'capacity' );
    people = people.map( (item, index) => {
        return <option key={index} value={item}> {item} </option>
    });

    return (
        <RoomConsumer>
            { (context) => {
                
                const { handleChange,
                        type, 
                        capacity, 
                        price, 
                        minPrice,
                        maxPrice,
                        minSize,
                        maxSize,
                        breakfast,
                        pets
                        } = context;

                return(
                    <section className="filter-container">
                        <Title title="search rooms" />
                        <form className="filter-form">

                            {/* select type */}
                            <div className="form-group">
                                <label htmlFor="type">room type</label>
                                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}> {types} </select> 
                            </div>
                            {/* end of select type */}

                            {/* guests */}
                            <div className="form-group">
                                <label htmlFor="capacity">guests</label>
                                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}> {people} </select> 
                            </div>
                            {/* end of guests */}

                            {/* price */}
                            <div className="form-group">
                                <label htmlFor="price">room price ${price}</label>
                                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} className="form-control"></input>
                            </div>
                            {/* end price */}

                            {/* size */}
                            <div className="form-group">
                                <label htmlFor="size">room size</label>
                            </div>
                            <div className="size-inputs">
                                <input type="number" name="minSize" id="size" value={minSize} onChange={handleChange} className="size-input" />
                                <input type="number" name="maxSize" id="size" value={maxSize} onChange={handleChange} className="size-input" />
                            </div>
                            {/* end size */}

                            {/* checkboxes */}
                            <div className="form-group">
                                <div className="single-extra">
                                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                                    <label htmlFor="breakfast">breakfast</label>
                                </div>
                                <div className="single-extra">
                                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                                    <label htmlFor="breakfast">pets</label>
                                </div>
                            </div>
                            {/* end checkboxes */}

                        </form>
                    </section>
                )
            }}
        </RoomConsumer>
    );
};

export default RoomsFilter;