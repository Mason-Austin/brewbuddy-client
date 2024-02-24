/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleBrew } from '../../API/brewApi';
import { getBrewLogByBrew } from '../../API/brewLogApi';
import Loading from '../../components/Loading';
import BrewLogCard from '../../components/brewLogCard';
import BrewLogModel from '../../components/BrewLogModel';
import { useAuth } from '../../utils/context/authContext';

export default function ViewBrew() {
  const { user } = useAuth();
  const [brew, setBrew] = useState(null);
  const [brewLogs, setBrewLogs] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getAllBrewlogs = () => {
    getBrewLogByBrew(id).then(setBrewLogs);
  };

  useEffect(() => {
    getSingleBrew(id).then(setBrew);
    getAllBrewlogs();
  }, [id]);

  return (
    <div>
      {brew ? (
        <>
          <div>
            <h1>{brew.name}</h1>
            <p>By: {brew.user.name}</p>
            <p>Description: {brew.description}</p>
            <p>Categories: {brew.categories.map((category, index) => {
              if (index === brew.categories.length - 1) {
                return category.label;
              }
              return `${category.label}, `;
            })}
            </p>
            <p>Completed: {brew.completed ? 'Yes' : 'No'}</p>
            <img src={brew.image} alt={brew.name} />
          </div>
          <div>
            {brew.user.id === user.id && (<BrewLogModel brew={brew} onUpdate={getAllBrewlogs} />)}
            {brewLogs.map((brewLog) => (
              <BrewLogCard key={brewLog.id} brew={brew} brewLog={brewLog} onUpdate={getAllBrewlogs} />
            ))}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}
