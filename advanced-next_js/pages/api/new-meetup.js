import { MongoClient } from "mongodb";
// code stored here will never reach client side
//  /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://djolosamja:751sZdSGMvbBTTfK@cluster0.urw3plx.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();
    res.status(201).json({ message: "Meetup inserted" });
  }
}

export default handler;
