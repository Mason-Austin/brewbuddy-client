import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSingleBrew } from "../../API/brewApi";
import { getBrewLogByBrew } from "../../API/brewLogApi"
import BrewLogCard from "../../components/brewLogCard"
import BrewLogModel from "../../components/BrewLogModel";

export default function ViewBrew() {
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
            <p>Completed: {brew.completed ? "Yes" : "No"}</p>
            <img src={'https://myfermentedfoods.com/wp-content/uploads/2019/11/Mead.jpg'} alt={brew.name} />
          </div>
          <div>
            <BrewLogModel brew={brew} onUpdate={getAllBrewlogs} />
            {brewLogs.map((brewLog) => (
              <BrewLogCard key={brewLog.id} brew={brew} brewLog={brewLog} onUpdate={getAllBrewlogs} />
            ))}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
