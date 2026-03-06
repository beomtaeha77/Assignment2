import React, { useState, useEffect } from 'react';

const Task = ({ ticket, setInProgressCount, setResolvedCount }) => {
    const [resolvedTasks, setResolvedTasks] = useState([]);
    const [pendingTasks, setPendingTasks] = useState([]);

     useEffect(() => {
        setInProgressCount(pendingTasks.length);
    }, [pendingTasks, setInProgressCount]);


    useEffect(() => {
        setResolvedCount(resolvedTasks.length);
    }, [resolvedTasks, setResolvedCount]);


    useEffect(() => {
        if (ticket && !pendingTasks.find(t => t.id === ticket.id)) {
            setPendingTasks(prev => [...prev, ticket]);
        }
    }, [ticket]);

    // NEW: Function to handle a single task
    const handleCompleteTask = (taskToComplete) => {
        setResolvedTasks([...resolvedTasks, taskToComplete]);
        setPendingTasks(pendingTasks.filter(t => t.id !== taskToComplete.id));
    };

    return (
        <div className="sidebar-container p-4 border rounded shadow-sm mt-6 bg-white md:ml-80">
            <h2 className="text-xl font-bold mb-4">Task Status</h2>
            
            <div className="space-y-3">
                {pendingTasks.length > 0 ? (
                    pendingTasks.map((task) => (
                        <div key={task.id} className="p-3 border rounded bg-gray-50 justify-between items-center">
                            <h3 className="font-medium text-sm">{task.title}</h3>
                            
                            <button 
                                onClick={() => handleCompleteTask(task)} 
                                className="btn btn-success bg-green-600 text-black px-3 py-1 rounded text-xs font-bold w-full"
                            >
                                Complete
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-400">Select a ticket to add to Task Status</p>
                )}
            </div>

            <hr className="my-6" />
            <h3 className="font-bold text-gray-700">Resolved Task</h3>
            
            <div className="space-y-2 mt-3">
                {resolvedTasks.length > 0 ? (
                    resolvedTasks.map((task, index) => (
                        <div key={index} className="p-3 bg-indigo-50 text-indigo-900 rounded text-sm">
                            {task.title}
                        </div>
                    ))
                ) : (
                    <p className="text-sm text-gray-400">No resolved tasks yet.</p>
                )}
            </div>
        </div>
    );
};

export default Task;




















