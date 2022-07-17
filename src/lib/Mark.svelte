<script>
  import { initializeApp } from "firebase/app";
  import { getFirestore, collection, addDoc  } from "firebase/firestore";

  // TODO: Replace the following with your app's Firebase project configuration
  // See: https://firebase.google.com/docs/web/learn-more#config-object
  const firebaseConfig = {
    apiKey: "AIzaSyDfTlyymXdtHDP1i_WfqjA_nA_i07lhDbw",
    authDomain: "nodisjuncture.firebaseapp.com",
    projectId: "nodisjuncture",
    storageBucket: "nodisjuncture.appspot.com",
    messagingSenderId: "1033748997874",
    appId: "1:1033748997874:web:17429a28993f3e08ca926b",
    measurementId: "G-4VMFZLJ0QN"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  async function init(){
    // Initialize Cloud Firestore and get a reference to the service
    const db = getFirestore(app);
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Alan",
        middle: "Mathison",
        last: "Turing",
        born: 1912
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  init()
  const source = `
  # This is a header

  This is a paragraph.

  * This is a list
  * With two items
    1. And a sublist
    2. That is ordered
      * With another
      * Sublist inside

  | And this is | A table |
  |-------------|---------|
  | With two    | columns |`
</script>

