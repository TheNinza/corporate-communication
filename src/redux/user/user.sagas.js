import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  signInWithGoogle,
} from "../../firebase/firebase.utils";
import {
  setUserToNull,
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from "./user.actions";
import UserActionTypes from "./user.types";

// Handling signIn with google

// setting local state and making data consistent with firestore
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();

    // invoking success call
    yield put(signInSuccess({ ...userSnapshot.data() }));
  } catch (error) {
    // invoking failure call
    yield put(signInFailure(error));
  }
}

export function* signInStart() {
  try {
    // getting the userAuth object
    const userAuth = yield signInWithGoogle();
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    // invoking failure call
    yield put(signInFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInStart);
}

// checking current user for session persistence

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) {
      yield put(setUserToNull());
    } else {
      yield getSnapshotFromUserAuth(userAuth);
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

// handling signout
export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield console.log("hello");
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

// creating a local saga from all the different sagas and exporting

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
  ]);
}
