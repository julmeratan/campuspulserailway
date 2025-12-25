require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const User = require("./models/user");
const { data: listings } = require("./init/data");

const MONGO_URL =
  process.env.MONGO_URL ||
  "mongodb://mongo:ngZXGCqKjSDlpunKMcYAjXTIpenChfpd@trolley.proxy.rlwy.net:58470";

async function seed() {
  try {
    console.log("🔗 Connecting to MongoDB...");
    await mongoose.connect(MONGO_URL);

    console.log("🧹 Clearing old data...");
    await Listing.deleteMany({});
    await User.deleteMany({});

    console.log("👤 Creating default user...");
    const user = new User({
      username: "admin",
      email: "admin@campuspulse.com",
    });
    await User.register(user, "admin123");

    console.log("🌱 Seeding listings...");
    const seededListings = listings.map(l => ({
      ...l,
      owner: user._id,
    }));

    await Listing.insertMany(seededListings);

    console.log(`✅ Seeded ${seededListings.length} listings`);
    console.log("🎉 SEED COMPLETE");

    process.exit(0);
  } catch (err) {
    console.error("❌ Seed failed:", err);
    process.exit(1);
  }
}

seed();
