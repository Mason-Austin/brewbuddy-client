import { clientCredentials } from '../utils/client';

const getBrews = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleBrew = (brewId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews/${brewId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createBrew = (brew) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brew),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const updateBrew = (brew) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews/${brew.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brew),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const deleteSingleBrew = (brewId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews/${brewId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {
  getBrews,
  getSingleBrew,
  createBrew,
  updateBrew,
  deleteSingleBrew,
};
