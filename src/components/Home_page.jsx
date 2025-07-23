import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import profileImage from "../assets/profile.jpeg";
import computerScienceImg from "../assets/computer_science.jpg";
import chemistryImg from "../assets/chemistry.jpeg";
import enterImg from "../assets/enter_society.png";

const Home = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [societies, setSocieties] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
   axios.get('http://127.0.0.1:8000/api/societies')
      .then(res => setSocieties(res.data))
      .catch(err => console.error('Error fetching societies:', err));
  }, []);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const handleLogout = () => navigate('/');
  const handleEventsNavigation = () => navigate('/events');
  const handleAlertsNavigation = () => navigate('/alerts');
  const handleMySocietiesNavigation = () => navigate('/my-societies');

  const getImage = (name) => {
    if (name.toLowerCase().includes('computer')) return computerScienceImg;
    if (name.toLowerCase().includes('chemical')) return chemistryImg;
    if (name.toLowerCase().includes('entrepreneur')) return enterImg;
    return 'https://via.placeholder.com/80'; // fallback
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', height: '100vh', margin: 0, backgroundColor: '#F4F4F4' }}>
      {/* ... your drawer and header code remains same ... */}

      <main style={{ padding: '20px' }}>
        {societies.length === 0 ? (
          <p>Loading societies...</p>
        ) : (
          societies.map((society, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'white',
                borderRadius: '10px',
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
                marginBottom: '20px',
                padding: '10px',
              }}
            >
              <img
                src={getImage(society.name)}
                alt="Society"
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  marginRight: '15px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  borderLeft: '2px solid #ccc',
                  paddingLeft: '15px',
                }}
              >
                <h3 style={{ margin: 0 }}>{society.name}</h3>
                <p style={{ margin: '5px 0', color: '#666' }}>
                  {society.description || 'No description available.'}
                </p>
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
};

export default Home;
