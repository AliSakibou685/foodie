import sendRequest from "./sendRequest";

const BASE_URL = '/api/foods';

export async function index() {
  return sendRequest(BASE_URL);
}

export async function create(formData) {
  return sendRequest(BASE_URL, 'POST', formData);
}