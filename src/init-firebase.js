// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/database'

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB6XKu5IczLu-Rs2KQH3neUiHhekPJPOj4',
  authDomain: 'shout-it-loud.web.app',
  databaseURL: 'https://shout-it-loud.firebaseio.com'
}

firebase.initializeApp(firebaseConfig)
