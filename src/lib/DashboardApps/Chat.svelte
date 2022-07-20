<script>
  import Popup from "./../Popup.svelte"
  import Chat from "./Chat/Channel.svelte"
  import { initializeApp } from "firebase/app";
  import { getFirestore ,setDoc,doc,getDoc} from "firebase/firestore";
  import { getAuth, signInAnonymously, onAuthStateChanged, getRedirectResult,signInWithPopup, GoogleAuthProvider, linkWithCredential} from "firebase/auth";
  //Exports
  export let visible = false
  export let title = "New window"
  export let isPinned = false

  const numOfProfilePics = 7
  let selectedProfilePic = 2

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
  const db = getFirestore(app);

  let displayName = ""
  let permanentName = ""
  let loggedIn = false
  let uid = "error"
  let permanentNameInput
  async function init(){
    const auth = getAuth();
    try{
      await signInAnonymously(auth)
    } catch (e){
      console.error("Error logging in: ", e);
    }

    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        uid = user.uid;

        console.log("SIGN IN??",uid)
        const usersDocRef = doc(db, "users",uid);
        const usersDocSnap = await getDoc(usersDocRef);
        if (usersDocSnap.exists()) {
          const userData = usersDocSnap.data()
          displayName = userData.name
          permanentName = userData.identifier
        } else {
          permanentNameInput.disabled = false
          console.log("No such document!");
        }

      } else {
        console.log("Signed out :(")
      }
    });

  }

  async function login(){
    const auth = getAuth();
    try{
      await signInAnonymously(auth)
    } catch (e){
      console.error("Error logging in: ", e);
    }

    onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;

      console.log("SIGN IN??",uid)
      const usersDocRef = doc(db, "users",uid);
      const usersDocSnap = await getDoc(usersDocRef);
      if (!usersDocSnap.exists()) {
        await setDoc(doc(db, "users", uid), {
          identifier: permanentName,
        },{merge:true});
      } else {
        console.log("No such document!");
      }
      await setDoc(doc(db, "users", uid), {
        name: displayName,
      },{merge:true});

      loggedIn = true
    } else {
      console.log("Signed out :(")
    }
    });

  }

  async function loginUpgrade(){
    const auth = getAuth();
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        linkWithCredential(auth.currentUser, credential)
          .then((usercred) => {
            const user = usercred.user;
            console.log("Anonymous account successfully upgraded", user);
          }).catch((error) => {
            console.log("Error upgrading anonymous account", error);
          });
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        // ...
        onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      uid = user.uid;
      console.log("SIGN IN??",uid)
      const usersDocRef = doc(db, "users",uid);
      const usersDocSnap = await getDoc(usersDocRef);
      if (!usersDocSnap.exists()) {
        await setDoc(doc(db, "users", uid), {
          identifier: permanentName,
        },{merge:true});
      } else {
        console.log("No such document!");
      }
      await setDoc(doc(db, "users", uid), {
        name: displayName,
      },{merge:true});

      loggedIn = true
    } else {
      console.log("Signed out :(")
    }
    });
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
      

  }
  // @ts-ignore
  window.loginUpgrading = loginUpgrade


</script>

<Popup bind:visible bind:isPinned title="{title}" centered>
  {#await init()}
    <p>Loading user...</p>
  {:then}  
    {#if !loggedIn}
      <p><i>Do not share any sensitive information here okay?</i></p>
      <label>
        Permanent  name (You can't change this!): 
        <input type="text" bind:value={permanentName} bind:this="{permanentNameInput}" maxlength="20" disabled/>
      </label><br>
      <label>
        Display name:
        <input type="text" bind:value={displayName} maxlength="20"/>
      </label>
      <br>
      {#each Array.from({length: numOfProfilePics}, (x, i) => i) as profileNum }
      <img draggable="false" on:click="{()=>selectedProfilePic=profileNum+1}" class="profile-pic" class:selected-profile-pic={selectedProfilePic===profileNum+1} width="25" src="chatProfilePictures/{profileNum+1}.svg" alt="profile picture number: {profileNum+1}">
      {/each}
      <br>
      <button on:click="{login}">LOGIN</button>
      <button on:click="{loginUpgrade}">UPGRADE LOGIN</button>
    {:else}
      <button on:click="{()=>loggedIn=false}">SIGN OUT</button>
      <Chat profileImage={selectedProfilePic} db={db} uid={uid}/>
    {/if}
  {/await}
</Popup>

<style>
  .selected-profile-pic{
    background-color: rgba(0, 0, 0, 0.116);
    transform: scale(2) !important;
  }
  .profile-pic{
    margin: 30px 10px;
    padding: 5px;
    border-radius: 100%;
    cursor: pointer;
    user-select: none;
    transition: transform 0.15s;
  }
  .profile-pic:hover{
    transform: scale(1.3);
  }
</style>