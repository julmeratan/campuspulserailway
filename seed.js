// // seed.js
// require("dotenv").config();
// const mongoose  = require("mongoose");
// // ← this is your Mongoose model, not the Joi schema:
// const Listing   = require("./models/listing.js");
// const { data: listings } = require("./init/data.js");

// ;(async function seed() {
//   // 1) Connect
//   await mongoose.connect(
//     process.env.MONGO_URL || "mongodb://mongo:ngZXGCqKjSDlpunKMcYAjXTIpenChfpd@mongodb.railway.internal:27017"
//   );
//   console.log("✅ Connected to Mongo");

//   // 2) Wipe out old docs
//   await Listing.deleteMany({});
//   console.log("🗑️  Cleared old listings");

//   // 3) Insert fresh ones from init/data.js
//   await Listing.insertMany(listings);
//   console.log(`🌱 Seeded ${listings.length} listings`);

//   // 4) Disconnect
//   await mongoose.disconnect();
//   console.log("👋 Disconnected, seed complete");
//   process.exit(0);
// })().catch(err => {
//   console.error(err);
//   process.exit(1);
// });
