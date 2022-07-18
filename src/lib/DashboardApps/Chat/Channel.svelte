<script>
  import { collection, addDoc,serverTimestamp,doc,onSnapshot,query,orderBy, getDoc,deleteDoc} from "firebase/firestore";
  import bin from "./../../../assets/bin.svg"
  import enter from "./../../../assets/enter.svg"
  import { flip } from 'svelte/animate';
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  export let db
  export let uid
  export let profileImage = 1


  let chat;
  function scrollToBottom(){
    chat.scrollTop = chat.scrollHeight;
  }
  onMount(()=>{
    setTimeout(()=>{
      scrollToBottom()
    },400)
  })
  let inputMessage = ""
  async function sendMessage(){
    if(inputMessage === "") return
    
    try {
      const usersDocRef = doc(db, "users",uid);
      const usersDocSnap = await getDoc(usersDocRef);
      let userName = ""
      let userIdentifier = ""
      if (usersDocSnap.exists()) {
        const user = usersDocSnap.data()
        userName = user.name
        userIdentifier = user.identifier
      } else {
        console.log("No such document!");
      }

      const docRef = await addDoc(collection(db, "messages"), {
        text:inputMessage,
        createdAt:serverTimestamp(),
        sentBy:uid,
        sentByName:userName,
        sentByIdentifier:userIdentifier,
        sentByProfilePic:profileImage
      });
      console.log("Message sent with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    inputMessage = ""
    scrollToBottom()
  }
  function getMessages(callback) {
    return onSnapshot(
        query(
            collection(db, 'messages'),
            orderBy('createdAt', 'asc')
        ),
        (querySnapshot) => {
            const messages = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            callback(messages);
        }
    );
  }

  //deletes only if yours
  async function deleteMessage(id,sentBy){
    if(uid !== sentBy)
      return

    await deleteDoc(doc(db, "messages",id));
  }

  let messages = []
  getMessages((mess)=>{
    messages = mess
    console.log("NOW")
    setTimeout(()=>{
      scrollToBottom()
    },200)
  })

  let sendPromise = null
</script>

<div style="text-align: left;justify-content: left;min-width:30em;" class="chat" bind:this={chat}>
  {#each messages as {id,sentBy,sentByName,sentByIdentifier,text,sentByProfilePic} (id)}
    <div in:scale class="message" animate:flip={{duration:200}}>
      <div class="message-header">
        <img class="message-profile" width="25" src="chatProfilePictures/{sentByProfilePic}.svg" alt="profile picture number:{sentByProfilePic}">
        <abbr title="{sentBy}"><div class="message-sender">
          {sentByName}
          @{sentByIdentifier} 
        </div></abbr>
      </div>

      <div class="message-content">
        {text}
        {#if uid === sentBy}
          <img class="message-bin" src="{bin}" alt="delete message" on:click="{()=>deleteMessage(id,sentBy)}" style="cursor: pointer;">
        {/if}
      </div>
    </div>
  {/each}
</div>

<form on:submit|preventDefault="{()=>sendPromise = sendMessage()}">
  {#await sendPromise}
    <input type="text" disabled/>
    <button type="submit" style="justify-content: center;padding: 0px 15px;" disabled>
      <img style="vertical-align: middle;" src="{enter}" alt="enter" width="20">
    </button>
  {:then}     
    <input type="text" placeholder="Enter your message" bind:value="{inputMessage}"/>
    <button type="submit" style="justify-content: center;padding: 0px 15px;">
      <img style="vertical-align: middle;" src="{enter}" alt="enter" width="20">
    </button>
  {/await}
</form>

<style>
  .chat{
    overflow: auto;
    height: 20em;
    max-height: 20em;
    scroll-behavior: smooth;
    padding: 20px;
  }
/* TODO: this changes when the text message changes size also not centered */
  .message-bin{
    position: absolute;
    border-radius: 4px;
    right: 0;
    top: 40%;
    height: 50%;
    user-select: none;

  }
  .message-profile{
    position: relative;
    top: 0.2em;
    user-select: none;
  }
  .message-sender{
    position: absolute;
    top: 0;
    left: 30px;
  }
  .message-header{
    position: relative;
  }
  .message-content{
    position: relative;
    justify-content: center;
    background-color: rgba(255, 255, 255, 0.151);
    border-radius: 10px;
    border: 1px solid black;
    margin: 10px 0px;
    padding: 10px 10px;
  }

</style>