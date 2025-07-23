import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditActivity = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [activity, setActivity] = useState(state.activity);

  const handleSave = () => {
    // Here you would typically save the updated activity
    console.log('Updated Activity:', activity);

    // For now, just navigate back to the event info page
    navigate(`/event-info/${activity.id}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3>Edit Activity</h3>
      <div>
        <label>Name</label>
        <input
          type="text"
          value={activity.name}
          onChange={(e) => setActivity({ ...activity, name: e.target.value })}
          style={{ width: '100%', padding: '8px', margin: '10px 0' }}
        />
      </div>
      <div>
        <label>Details</label>
        <textarea
          value={activity.details}
          onChange={(e) => setActivity({ ...activity, details: e.target.value })}
          style={{ width: '100%', padding: '8px', margin: '10px 0' }}
        />
      </div>
      <button onClick={handleSave} style={{ padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>
        Save Changes
      </button>
    </div>
  );
};

export default EditActivity;
