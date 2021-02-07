import  React from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

class Services extends React.Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'free cocktails',
                info: 'If you are connected but behind a firewall, check that Firefox has permission to access the Web'
            },
            {
                icon: <FaHiking />,
                title: 'endless hiking',
                info: 'If you are connected but behind a firewall, check that Firefox has permission to access the Web'
            },
            {
                icon: <FaShuttleVan />,
                title: 'free shuttle',
                info: 'If you are connected but behind a firewall, check that Firefox has permission to access the Web'
            },
            {
                icon: <FaBeer />,
                title: 'strongest beer',
                info: 'If you are connected but behind a firewall, check that Firefox has permission to access the Web'
            }
        ]
    }

    render() {
        return (
            <>
                <section className='services'>
                    <Title title='services' />
                    <div className='services-center'>
                        {this.state.services.map((items, index) => {
                            return (
                                <article key={index} className='service'>
                                    <span>{items.icon}</span>
                                    <h6>{items.title}</h6>
                                    <p>{items.info}</p>
                                </article>
                            )
                        })}
                    </div>
                </section>
                
                
            </>
        )
    }
}


export default Services