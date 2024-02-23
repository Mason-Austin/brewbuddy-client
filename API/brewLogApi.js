import { clientCredentials } from "../utils/client";

const getBrewLogByBrew = (brewId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brew_logs?brew=${brewId}`)
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const getSingleBrewLog = (brewLogId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brew_logs/${brewLogId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const createBrewLog = (brewLog) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brew_logs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brewLog),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const updateBrewLog = (brewLog) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brew_logs/${brewLog.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(brewLog),
  })
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

const deleteSingleBrewLog = (brewLogId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/brew_logs/${brewLogId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

export {getBrewLogByBrew, getSingleBrewLog, createBrewLog, updateBrewLog, deleteSingleBrewLog}
