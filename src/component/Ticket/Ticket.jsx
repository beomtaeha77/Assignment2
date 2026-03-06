import React from 'react';
import './Ticket.css'

const Ticket = ({ ticket, onSelect }) => {
        if (!ticket) return null;
    
   const { title, status, description, id, priority, customer, createdAt } =ticket;
   console.log(ticket);

   const priorityColors = {
        'high': 'text-red-600',
        'medium': 'text-yellow-600',
        'low': 'text-green-600',
    };


       const statusStyles = {
       
        'in progress': 'bg-yellow-100 text-yellow-700 dot-bg-yellow-500',
        'open': 'bg-green-100 text-green-700 dot-bg-green-500',
        
    };

    
    const priorityClass = priorityColors[priority?.toLowerCase()] || 'text-gray-500';

    const currentStatusStyle = statusStyles[status?.toLowerCase()] || 'bg-gray-100 text-gray-700 dot-bg-gray-500';




    return (
        <div className='p-4 border rounded-lg shadow-sm bg-white cursor-pointer hover:bg-gray-50' onClick={() => onSelect(ticket)}>
                     <div  className='flex justify-between'>
                             <div className='flex justify-between items-start mb-1'>
                                          <h4 className='text-lg font-bold text-slate-800'>{title}</h4>
                                  <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${currentStatusStyle}`}>
                                   <span className={`w-2 h-2 rounded-full ${currentStatusStyle.split(' ').find(c => c.includes('dot-bg'))?.replace('dot-', '')}`}></span>
                                {status}
                </div>

                     </div>
                         </div>
                             <p className='text-gray-500 text-sm mb-4 line-clamp-2'>{description}</p>
                    
                                  <div className='flex justify-between'>
                                     <div className='flex '>
                                      <p className='text-gray-400'>#{id}</p>
                                      <p className={`uppercase tracking-tight md:tracking-wider ${priorityClass}`}>{priority}</p>
                                 </div>
                                 <div className='flex'>
                                          <p>{customer}</p>
                                         <p>{createdAt}</p>
                                 </div>
                         </div>
        </div>
    );
};

export default Ticket;




// import React from 'react';

// const Ticket = ({ ticket, onSelect }) => {
//     if (!ticket) return null;

//     const { title, status, description, id, priority, customer, createdAt } = ticket;

//     return (
//         <div 
//             className='card p-4 border rounded-lg shadow-sm bg-white cursor-pointer hover:bg-gray-50' 
//             onClick={() => onSelect(ticket)}
//         >
//             {/* Header: Title and Status Badge */}
//             <div className='flex justify-between items-start mb-2'>
//                 <h4 className='text-lg font-bold text-slate-800'>{title}</h4>
//                 <span className='flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold'>
//                     <span className='w-2 h-2 bg-green-500 rounded-full'></span>
//                     {status}
//                 </span>
//             </div>

//             {/* Description */}
//             <p className='text-gray-500 text-sm mb-4 line-clamp-2'>
//                 {description}
//             </p>

//             {/* Footer: ID, Priority, Customer, and Date */}
//             <div className='flex justify-between items-center text-xs font-medium'>
//                 <div className='flex gap-3'>
//                     <span className='text-gray-400'>#{id}</span>
//                     <span className='text-red-500 uppercase tracking-wider'>{priority}</span>
//                 </div>
//                 <div className='flex items-center gap-4 text-gray-500'>
//                     <span>{customer}</span>
//                     <div className='flex items-center gap-1'>
//                         {/* Simple SVG Calendar Icon */}
//                         <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
//                         {createdAt}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Ticket;
