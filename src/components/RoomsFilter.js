import React, { useContext } from 'react';
import { RoomContext } from '../Context';
import Title from './Title';


//get all unique values using set func
const getUnique = (items, value) => {
    let arr = items.map(item => item[value]);
    return [...new Set(arr)]
    // return [...new Set(items.map(item => item[value]))]
}

const RoomsFilter = ({ rooms }) => {
    const context = useContext(RoomContext);
    const {
        handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets
    } = context;
    //get unique types
    let types = getUnique(rooms, 'type');
    //add all option
    types = [...types, 'all'];
    //map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    })
    //get unique capacity
    let people = getUnique(rooms, 'capacity');
    //map through jsx
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })

    return (
        <>
            <section className='filter-container'>
                <Title title='search rooms' />
                <form className='filter-form'>
                    {/* select type */}
                    <div className='form-group'>
                        <label htmlFor='type'>room type</label>
                        <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
                            {types}
                        </select>
                    </div>
                    {/* end of select type */}

                    {/* select guess */}
                    <div className='form-group'>
                        <label htmlFor='capacity'>guess</label>
                        <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
                            {people}
                        </select>
                    </div>
                    {/* end of select guess */}

                    {/* start of price */}
                        <div className='form-group'>
                            <label htmlFor='price'>
                                room price ${price}
                            </label>
                            <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='from-control' />
                        </div>
                    {/* end of price */}
                    {/* size */}

                    {/* end of size */}
                </form>
            </section>
        </>
    )
}



export default RoomsFilter;