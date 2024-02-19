import { clientCredentials } from "../utils/client";

const getAllCategories = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleCategory = (categoryId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/categories/${categoryId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteBrewCategory = (brewCategoryId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brews/${brewCategoryId}/remove_category`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const createBrewCategory = (categoryId, brewId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}brews/${brewId}/add_item_to_order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(categoryId),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export { getAllCategories, getSingleCategory, deleteBrewCategory, createBrewCategory}
