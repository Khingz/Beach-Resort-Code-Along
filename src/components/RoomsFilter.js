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
    //map through jsx for people
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
                        <div className='form-group'>
                            <label htmlFor='size'>room size</label>
                            <div className='size-inputs'>
                                <input type='number' name='minSize' id='size' value={minSize} onChange={handleChange} className='size-input' />
                                <input type='number' name='maxSize' id='size' value={maxSize} onChange={handleChange} className='size-input' />
                            </div>
                        </div>
                    {/* end of size */}
                    {/* extras */}
                        <div className='form-group'>
                            <div className='single-extra'>
                                <input type='checkbox' name='breakfast' id='breakfast' checked={breakfast} onChange={handleChange} />
                                <label htmlFor='breakfast'>breakfast</label>
                            </div>
                            <div className='single-extra'>
                                <input type='checkbox' name='pets' id='pets' checked={pets} onChange={handleChange} />
                                <label htmlFor='pets'>pets</label>
                            </div>
                        </div>
                    {/* end of extras for checkboxes */}
                </form>
            </section>
        </>
    )
}



export default RoomsFilter;