import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { getSingleBrew } from '../../../API/brewApi';
import BrewForm from '../../../components/forms/brewForm';
import { useAuth } from '../../../utils/context/authContext';

const NewBrew = () => {
  const { user } = useAuth;
  const [brew, setBrew] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleBrew(id).then(setBrew);
  }, [id]);

  return (
    <div>
      <h2>Create New Brew</h2>
      <BrewForm user={user} initalBrew={brew} />
    </div>
  );
};

export default NewBrew;
