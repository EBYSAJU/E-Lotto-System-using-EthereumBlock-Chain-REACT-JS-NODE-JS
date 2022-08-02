import firebase from 'firebase'

// change lines below with your own Firebase snippets!
var config = {
    apiKey: "AIzaSyDR6UUJN66X8yVYjV92Kb-LytYvXDfOHF0",
    authDomain: "lotteryticket-4010c.firebaseapp.com",
    databaseURL: "https://lotteryticket-4010c.firebaseio.com",
    projectId: "lotteryticket-4010c",
    storageBucket: "lotteryticket-4010c.appspot.com",
    messagingSenderId: "1012826764225"
  };
 const fire= firebase.initializeApp(config);



export default fire;
