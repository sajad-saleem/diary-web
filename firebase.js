<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcK_prqkz63X-HlLd_PStYuF4Zz2Bfevo",
    authDomain: "daily-diary-e063d.firebaseapp.com",
    projectId: "daily-diary-e063d",
    storageBucket: "daily-diary-e063d.firebasestorage.app",
    messagingSenderId: "747153610727",
    appId: "1:747153610727:web:62db789b896612a7c94f42",
    measurementId: "G-WJZXTEMSTE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
