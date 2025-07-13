// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUAGgBNMHgDh7iSmntE8ng7vXLoCcbmMM",
  authDomain: "tripnow-aea87.firebaseapp.com",
  projectId: "tripnow-aea87",
  storageBucket: "tripnow-aea87.firebasestorage.app",
  messagingSenderId: "914296862057",
  appId: "1:914296862057:web:bf0f0c39f2249b7ea2b9f8"
};

firebase.initializeApp(firebaseConfig);

window.auth = firebase.auth(); // 전역으로 설정
window.db = firebase.firestore();