import sendRequest from "./sendRequest";

const BASE_URL = '/api/foods';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}

export async function deleteFood(foodId) {
  return sendRequest(BASE_URL + "/" + foodId, "DELETE");
};

export async function updateFood(id, formData) {
  console.log('Service Layer - Payload:', formData);
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', formData);
}

export async function getOne(foodId) {
  return sendRequest(BASE_URL + "/" + foodId);
};