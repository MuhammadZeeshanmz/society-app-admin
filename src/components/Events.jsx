import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import flutterImage from '../assets/flutter.webp';
import partyImage from '../assets/party.webp';
import projectImage from '../assets/project_d.webp';

const Events = () => {
  const navigate = useNavigate();

  // Initial state with unique IDs for each event
  const [events, setEvents] = useState([
    { id: 1, name: 'Event Name ', venue: 'Hall A', timing: '9 to 12', date: '1-1-2025', image:  flutterImage},
    { id: 2, name: 'Event Name ', venue: 'Hall B', timing: '1 to 4', date: '2-1-2025', image: projectImage},
    { id: 3, name: 'Event Name ', venue: 'Hall C', timing: '3 to 6', date: '3-1-2025', image: partyImage},
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ name: '', venue: '', timing: '', date: '', image: 'https://via.placeholder.com/80' });
  const [eventToUpdate, setEventToUpdate] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEventToUpdate({ ...eventToUpdate, [name]: value });
  };

  const addEvent = () => {
    if (!newEvent.name || !newEvent.venue || !newEvent.timing || !newEvent.date) {
      alert('Please fill in all fields!');
      return;
    }
    const newId = events.length > 0 ? events[events.length - 1].id + 1 : 1;
    setEvents([...events, { ...newEvent, id: newId }]);
    setNewEvent({ name: '', venue: '', timing: '', date: '', image: 'https://via.placeholder.com/80' });
    setShowModal(false);
  };

  const updateEvent = () => {
    if (!eventToUpdate.name || !eventToUpdate.venue || !eventToUpdate.timing || !eventToUpdate.date) {
      alert('Please fill in all fields!');
      return;
    }

    const updatedEvents = events.map((event) =>
      event.id === eventToUpdate.id ? { ...event, ...eventToUpdate } : event
    );

    setEvents(updatedEvents);
    setShowUpdateModal(false);
    setEventToUpdate(null);
  };

  const deleteEvent = (event) => {
    setEvents(events.filter((e) => e.id !== event.id));
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#F4F4F4', minHeight: '100vh', margin: 0 }}>
      {/* Header */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#4A4A4A',
          color: 'white',
          padding: '10px 20px',
          zIndex: 1000,
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() => navigate('/home')}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'white',
              fontSize: '20px',
              marginRight: '10px',
              cursor: 'pointer',
            }}
          >
            &#8592; {/* Left arrow */}
          </button>
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold' }}>Events</h2>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ padding: '80px 20px' }}>
        {events.map((event) => (
          <div
            key={event.id}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '15px',
              margin: '10px 0',
              display: 'flex',
              alignItems: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
            }}
            onClick={() => navigate(`/event_info/${event.id}`)}
          >
            {/* Event Image */}
            <div
              style={{
                flexShrink: 0,
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                backgroundColor: '#ddd',
              }}
            >
              <img
                src={event.image}
                alt={event.name}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Vertical Divider */}
            <div
              style={{
                width: '1px',
                height: '80px',
                backgroundColor: '#ddd',
                margin: '0 20px',
              }}
            ></div>

            {/* Event Details */}
            <div>
              <h3 style={{ margin: '5px 0', fontSize: '16px', fontWeight: 'bold' }}>{event.name}</h3>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
                <strong>Venue:</strong> {event.venue}
              </p>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
                <strong>Timing:</strong> {event.timing}
              </p>
              <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
                <strong>Date:</strong> {event.date}
              </p>
            </div>

            {/* Edit & Delete Icons */}
            <div style={{ marginLeft: 'auto', display: 'flex', gap: '10px' }}>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Stop the event from propagating
                  setEventToUpdate(event);
                  setShowUpdateModal(true);
                }}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                📝 {/* Edit Icon */}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Stop the event from propagating
                  deleteEvent(event);
                }}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
              >
                🗑️ {/* Delete Icon */}
              </button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer
        style={{
          position: 'fixed',
          bottom: '20px',
          left: 0,
          right: 0,
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <button
          onClick={() => setShowModal(true)}
          style={{
            backgroundColor: '#4A4A4A',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            cursor: 'pointer',
            borderRadius: '8px',
            fontSize: '14px',
          }}
        >
          Add New Event
        </button>
      </footer>

      {/* Modal for adding new event */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
            }}
          >
            <h3>Add Event</h3>
            <input
              type="text"
              name="name"
              value={newEvent.name}
              onChange={handleInputChange}
              placeholder="Event Name"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="text"
              name="venue"
              value={newEvent.venue}
              onChange={handleInputChange}
              placeholder="Venue"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="text"
              name="timing"
              value={newEvent.timing}
              onChange={handleInputChange}
              placeholder="Timing"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="date"
              name="date"
              value={newEvent.date}
              onChange={handleInputChange}
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="text"
              name="image"
              value={newEvent.image}
              onChange={handleInputChange}
              placeholder="Image URL"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button
                onClick={addEvent}
                style={{
                  backgroundColor: '#4A4A4A',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontSize: '14px',
                  marginBottom: '8px',
                }}
              >
                Add Event
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  backgroundColor: 'grey',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for updating event */}
      {showUpdateModal && eventToUpdate && (
        <div
          style={{
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '300px',
            }}
          >
            <h3>Update Event</h3>
            <input
              type="text"
              name="name"
              value={eventToUpdate.name}
              onChange={handleUpdateChange}
              placeholder="Event Name"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="text"
              name="venue"
              value={eventToUpdate.venue}
              onChange={handleUpdateChange}
              placeholder="Venue"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="text"
              name="timing"
              value={eventToUpdate.timing}
              onChange={handleUpdateChange}
              placeholder="Timing"
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <input
              type="date"
              name="date"
              value={eventToUpdate.date}
              onChange={handleUpdateChange}
              style={{ width: '100%', padding: '8px', margin: '5px 0' }}
            />
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              <button
                onClick={updateEvent}
                style={{
                  backgroundColor: '#4A4A4A',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontSize: '14px',
                  marginBottom: '8px',
                }}
              >
                Update Event
              </button>
              <button
                onClick={() => setShowUpdateModal(false)}
                style={{
                  backgroundColor: 'grey',
                  color: 'white',
                  border: 'none',
                  padding: '10px 20px',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  fontSize: '14px',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
