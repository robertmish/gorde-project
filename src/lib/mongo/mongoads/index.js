// import clientPromise from ".";

// let client;
// let db;
// let ads;

// async function init() {
//   if (db) return;
//   try {
//     client = await clientPromise;
//     db = await client.db("uicnomedb");
//     ads = await db.collection("ads");
//   } catch (error) {
//     throw new Error("Failed to connect to database");
//   }
// }

// (async () => {
//   await init();
// })();

// ////ADS////

// export async function getAds() {
//   try {
//     if (!ads) await init();
//     const result = await ads
//       .find({})
//       .limit(20)
//       .map((ad) => ({ ...ad, _id: ad._id.toString() }))
//       .toArray();
//     return { ads: result };
//   } catch (error) {
//     return { error: "Failed to fetch ads" };
//   }
// }
