import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomUser = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get('https://randomuser.me/api?results=20');
        if (response.status === 200) {
          setUser(response.data.results);
          setLoading(false);
          setError(false); 
        }
      } catch (error) {
        console.error('Error fetching random user:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        user.map((userData, index) => (
          <div key={index} style={{ display: 'inline-block', margin: '10px' }}>
            <img src={userData.picture.large} alt={userData.name.first} />
            <p>
              {userData.name.first} {userData.name.last}
            </p>
            <p>{userData.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RandomUser;
