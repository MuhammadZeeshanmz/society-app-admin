import axios from 'axios';
import { useEffect, useState } from 'react';

function SocietyList() {
  const [societies, setSocieties] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/societies')
      .then(response => setSocieties(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <ul>
      {societies.map((society) => (
        <li key={society.id}>{society.name}</li>
      ))}
    </ul>
  );
}

export default SocietyList;
