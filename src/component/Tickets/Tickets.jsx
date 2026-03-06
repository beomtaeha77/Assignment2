import React from 'react';
import { use } from 'react';
import Ticket from '../Ticket/Ticket';
import './Tickets.css'

const Tickets = ({ ticketsPromise, onSelect }) => {
    const tickets =use(ticketsPromise)
    //console.log(tickets)
    return (
        <div className='mx-auto'>
            
                <h3 className='font-semibold text-xl'>Customer Tickets</h3>
            
            <ul className='tickets-container md:w-220 grid grid-cols-1 md:grid-cols-2'>
                {
                tickets.map(ticket => <Ticket key={ticket.id} ticket={ticket}  onSelect={() => onSelect(ticket)}></Ticket>)
            }
            </ul>
        </div>
    );
};

export default Tickets;