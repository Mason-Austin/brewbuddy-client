import { useAuth } from '../../utils/context/authContext';
import BrewForm from "../../components/forms/brewForm";

const NewBrew = () => {
  const { user } = useAuth();

  return (
    <div>
      <h2>Create New Brew</h2>
      <BrewForm user={user} />
    </div>
  )
}

export default NewBrew;
