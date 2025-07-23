import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';

import disImage from "../assets/dicussion.jpg"
import elctImage from "../assets/election.jpg"

const EventInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [event, setEvent] = useState({
    id: id,
    name: 'Event Name',
    description: 'This is a description of the event. More details about the event will be provided here.',
    activities: [
      { id: 1, name: 'Activity 1', details: 'Details about activity 1.' },
      { id: 2, name: 'Activity 2', details: 'Details about activity 2.' },
      { id: 3, name: 'Activity 3', details: 'Details about activity 3.' },
    ],
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newActivity, setNewActivity] = useState({ name: '', details: '' });

  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [activityToUpdate, setActivityToUpdate] = useState({ id: null, name: '', details: '' });

  const handleAdd = () => {
    if (newActivity.name && newActivity.details) {
      const newActivityObject = {
        id: event.activities.length + 1,
        name: newActivity.name,
        details: newActivity.details,
      };
      setEvent((prevEvent) => ({
        ...prevEvent,
        activities: [...prevEvent.activities, newActivityObject],
      }));
      setIsModalOpen(false);
      setNewActivity({ name: '', details: '' });
    } else {
      alert('Please provide both activity name and details.');
    }
  };

  const handleUpdate = () => {
    if (activityToUpdate.name && activityToUpdate.details) {
      setEvent((prevEvent) => ({
        ...prevEvent,
        activities: prevEvent.activities.map((activity) =>
          activity.id === activityToUpdate.id ? { ...activity, ...activityToUpdate } : activity
        ),
      }));
      setIsUpdateModalOpen(false);
      setActivityToUpdate({ id: null, name: '', details: '' });
    } else {
      alert('Please provide both activity name and details.');
    }
  };

  const handleDelete = (activityId) => {
    setEvent((prevEvent) => ({
      ...prevEvent,
      activities: prevEvent.activities.filter((activity) => activity.id !== activityId),
    }));
  };

  const openUpdateModal = (activity) => {
    setActivityToUpdate(activity);
    setIsUpdateModalOpen(true);
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
          <h2 style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>Event Info</h2>
        </div>
      </header>

      <main style={{ padding: '80px 20px' }}>
        {/* Circle Avatar Image and Event Name */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              backgroundColor: '#ddd',
              margin: '0 auto',
              overflow: 'hidden',
              marginBottom: '10px',
            }}
          >
            <img
              src="https://via.placeholder.com/120"
              alt="Event"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>{event.name}</h3>
        </div>

        {/* Activities List */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {event.activities.map((activity) => (
            <div
              key={activity.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                padding: '15px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
              }}
            >
              <h4 style={{ fontSize: '18px', fontWeight: 'bold' }}>{activity.name}</h4>
              <p style={{ fontSize: '14px', color: '#555' }}>{activity.details}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <FaEdit
                  onClick={() => openUpdateModal(activity)}
                  style={{ color: 'blue', cursor: 'pointer', fontSize: '18px' }}
                />
                <FaTrash
                  onClick={() => handleDelete(activity.id)}
                  style={{ color: 'red', cursor: 'pointer', fontSize: '18px' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Add Activity */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <FaPlus
            onClick={() => setIsModalOpen(true)}
            style={{ color: '#4A4A4A', cursor: 'pointer', fontSize: '30px' }}
          />
        </div>

        {/* Election & Discussion Cards */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '20px',
            marginBottom: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Election Card */}
<div
  style={{
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    flex: '1 1 45%',
    transition: 'transform 0.3s',
  }}
  onClick={() => navigate('/election')}
>
  <div
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%', // Make the image container circular
      backgroundColor: '#ddd',
      margin: '0 auto',
      overflow: 'hidden', // Ensure image fits within circle
    }}
  >
    <img
      src={elctImage}
      alt="Election"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>Election</h4>
  <p style={{ fontSize: '14px', color: '#555' }}>Manage and view candidates for election.</p>
</div>

{/* Discussion Card */}
<div
  style={{
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    flex: '1 1 45%',
    transition: 'transform 0.3s',
  }}
  onClick={() => navigate('/discussion')}
>
  <div
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%', // Make the image container circular
      backgroundColor: '#ddd',
      margin: '0 auto',
      overflow: 'hidden', // Ensure image fits within circle
    }}
  >
    <img
      src={disImage}
      alt="Discussion"
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  </div>
  <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>Discussion</h4>
  <p style={{ fontSize: '14px', color: '#555' }}>Join discussions and interact with members.</p>
</div>

        </div>

        {/* Add Modal */}
        {isModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
              <h3>Add New Activity</h3>
              <input
                type="text"
                placeholder="Activity Name"
                value={newActivity.name}
                onChange={(e) => setNewActivity({ ...newActivity, name: e.target.value })}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <textarea
                placeholder="Activity Details"
                value={newActivity.details}
                onChange={(e) => setNewActivity({ ...newActivity, details: e.target.value })}
                style={{ width: '100%', padding: '8px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <button
                  onClick={handleAdd}
                  style={{
                    backgroundColor: '#4A4A4A',
                    color: 'white',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    flex: 1,
                  }}
                >
                  Add
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    backgroundColor: 'grey',
                    color: 'white',
                    padding: '8px 12px',
                    border: 'none',
                    borderRadius: '4px',
                    flex: 1,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Update Modal */}
        {isUpdateModalOpen && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', width: '300px' }}>
              <h3>Update Activity</h3>
              <input
                type="text"
                placeholder="Activity Name"
                value={activityToUpdate.name}
                onChange={(e) => setActivityToUpdate({ ...activityToUpdate, name: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <textarea
                placeholder="Activity Details"
                value={activityToUpdate.details}
                onChange={(e) => setActivityToUpdate({ ...activityToUpdate, details: e.target.value })}
                style={{
                  width: '100%',
                  padding: '8px',
                  marginBottom: '10px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                <button
                  onClick={handleUpdate}
                  style={{ backgroundColor: '#4A4A4A', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px' }}
                >
                  Update
                </button>
                <button
                  onClick={() => setIsUpdateModalOpen(false)}
                  style={{ backgroundColor: 'grey', color: 'white', padding: '8px 12px', border: 'none', borderRadius: '4px' }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EventInfo;
