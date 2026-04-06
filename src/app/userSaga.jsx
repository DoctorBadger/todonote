import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
} from "./userSlice";

const BASE_URL = "https://dummyjson.com/users";

const fetchIPDetails = async () => {
    const response = await fetch("https://ipapi.co/json");
    if (!response.ok) {
        throw new Error("Failed to fetch IP data");
    }
    return response.json();
};

const fetchUsersApi = () =>
  fetch(BASE_URL).then((res) => res.json());

const addUserApi = (user) =>
  fetch(`${BASE_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());

const updateUserApi = (user) =>
  fetch(`${BASE_URL}/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  }).then((res) => res.json());

const deleteUserApi = (id) =>
  fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());

function* fetchUsersHandler() {
  try {
    const data = yield call(fetchUsersApi);
    yield put(fetchUsersSuccess(data.users));
  } catch (e) {
    yield put(fetchUsersFailure(e.message));
  }
}

function* addUserHandler(action) {
  try {
    const ipData = yield call(fetchIPDetails);
    const userWithIp = { ...action.payload, ip: ipData.ip, address: { city: ipData.city, country: ipData.country } };
    const data = yield call(addUserApi, userWithIp);
    yield put(addUserSuccess(data));
  } catch (e) {
    yield put(addUserFailure(e.message));
  }
}

function* updateUserHandler(action) {
  try {
    const data = yield call(updateUserApi, action.payload);
    yield put(updateUserSuccess(data));
  } catch (e) {
    yield put(updateUserFailure(e.message));
  }
}

function* deleteUserHandler(action) {
  try {
    yield call(deleteUserApi, action.payload);
    yield put(deleteUserSuccess(action.payload));
  } catch (e) {
    yield put(deleteUserFailure(e.message));
  }
}

export default function* userSaga() {
  yield takeLatest(fetchUsersRequest.type, fetchUsersHandler);
  yield takeLatest(addUserRequest.type, addUserHandler);
  yield takeLatest(updateUserRequest.type, updateUserHandler);
  yield takeLatest(deleteUserRequest.type, deleteUserHandler);
}