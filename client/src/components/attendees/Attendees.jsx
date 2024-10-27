// AttendeesList.js
import React from 'react';
import './attendees.css';

const AttendeesList = ({ attendees, onClose }) => {
    return (
        <div className="attendees-list-overlay">
            <div className="attendees-list-container">
                <h2>Event Attendees</h2>
                <button className="close-btn" onClick={onClose}>Close</button>
                {attendees.length > 0 ? (
                    <ul>
                        {attendees.map((attendee) => (
                            <li key={attendee._id} className="attendee-item">
                                <p>Name: {attendee.name}</p>
                                <p>Email: {attendee.email}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No attendees registered yet.</p>
                )}
            </div>
        </div>
    );
};

export default AttendeesList;
