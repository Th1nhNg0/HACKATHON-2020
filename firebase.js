var admin = require("firebase-admin");
var serviceAccount = require("./firebase-admin.json");
const app = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = app.firestore();
const auth = app.auth();
const quesCollection = db.collection("questions");
const messagesCollection = db.collection("messages");
// export utils/refs
module.exports = { db, auth, quesCollection, messagesCollection };
