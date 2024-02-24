import { useState, useEffect } from 'react';
import { getBrews } from '../API/brewApi';
import BrewCard from '../components/brewCard';

function Home() {
  const [brews, setBrews] = useState([]);
  const getAllBrews = () => {
    getBrews().then(setBrews);
  };

  useEffect(() => {
    getAllBrews();
  }, []);

  return (
    <div>
      {brews.map((brew) => (
        <BrewCard key={brew.id} brew={brew} onUpdate={getAllBrews} />
      ))}
    </div>
  );
}

export default Home;
