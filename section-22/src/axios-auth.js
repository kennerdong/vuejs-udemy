import axios from "axios";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/identitytoolkit/v3/relyingparty"
});

// instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;

/*
<script src="https://www.gstatic.com/firebasejs/5.3.1/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAya1A6omFRD-7I4s3QTehDw5SFioP2Vn4",
    authDomain: "vuejs-udemy-course-8712f.firebaseapp.com",
    databaseURL: "https://vuejs-udemy-course-8712f.firebaseio.com",
    projectId: "vuejs-udemy-course-8712f",
    storageBucket: "vuejs-udemy-course-8712f.appspot.com",
    messagingSenderId: "13127294139"
  };
  firebase.initializeApp(config);
</script>
*/
