/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { getAllCategories } from '../../API/categoryApi';
import { createBrew, updateBrew } from '../../API/brewApi';

const initalState = {
  name: '',
  description: '',
  stage: '',
  image: '',
};

function BrewForm({ user, initalBrew }) {
  const router = useRouter();
  const [brew, setBrew] = useState(initalBrew || initalState);
  const [categories, setCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categoriesIdFromBrew = (arry) => {
    const categoryArry = [];
    arry?.forEach((category) => {
      categoryArry.push(category.id);
    });
    setSelectedCategories(categoryArry);
  };

  useEffect(() => {
    getAllCategories().then(setCategories);
    if (initalBrew) {
      setBrew(initalBrew);
      categoriesIdFromBrew(initalBrew.categories);
    }
  }, [initalBrew]);

  const handleCheckChange = (categoryId) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories((prevCategories) => prevCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, categoryId]);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBrew((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentBrew = {
      name: brew.name,
      description: brew.description,
      image: brew.image,
      stage: brew.stage,
      categories: selectedCategories,
      userId: user?.id,
    };

    // Send POST request to your API
    if (initalBrew) {
      updateBrew(brew).then(() => router.push('/'));
    } else {
      createBrew(currentBrew).then(() => router.push('/'));
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Brew Name</Form.Label>
          <Form.Control name="name" required value={brew.name} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brew description</Form.Label>
          <Form.Control name="description" required value={brew.description} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brew image</Form.Label>
          <Form.Control name="image" value={brew.image} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Brew Stage</Form.Label>
          <Form.Select
            aria-label="Class"
            name="stage"
            onChange={handleChange}
            className="mb-3"
            value={brew.stage}
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="Fermenting">Fermenting</option>
            <option value="Conditioning">Conditioning</option>
            <option value="Aging">Bulk Aging</option>
            <option value="Bottled">Bottled</option>

          </Form.Select>
        </Form.Group>
        {categories.map((category) => (
          <div key={category.id} className="mb-3">
            <Form.Check // prettier-ignore
              type="checkbox"
              id={category.id}
              label={category.label}
              checked={selectedCategories.includes(category.id)}
              onChange={() => { handleCheckChange(category.id); }}
            />
          </div>
        ))}
        <Button variant="primary" type="submit">
          {initalBrew ? 'Save' : 'Create'}
        </Button>
      </Form>
    </>
  );
}

export default BrewForm;

BrewForm.propTypes = {
  user: PropTypes.object,
  initalBrew: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    stage: PropTypes.string,
    image: PropTypes.string,
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string,
      }),
    ),
  }),
};
