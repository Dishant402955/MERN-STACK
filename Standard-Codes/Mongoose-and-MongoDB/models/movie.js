import mongoose, { modelNames } from "mongoose";

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  ratings: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

const movieModel = new mongoose.model("movie", movieSchema);

const insertOneDoc = async () => {
  try {
    const m = new movieModel({
      name: "dummy",
      ratings: 5,
      money: 10000,
      genre: ["dummy1", "dummy2"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });

    const result = await movieModel.insertOne(m);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const insertManyDocs = async () => {
  try {
    const m1 = new movieModel({
      name: "3 idiots",
      ratings: 5,
      money: 1000000000,
      genre: ["public", "reallife"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });
    const m2 = new movieModel({
      name: "PK",
      ratings: 4.5,
      money: 20000000,
      genre: ["comedy", "reallife"],
      isActive: true,
      comments: [
        { value: "That was an amazing movie and story was pretty good." },
      ],
    });
    const m3 = new movieModel({
      name: "Dangal",
      ratings: 4,
      money: 1000000,
      genre: ["sports", "petriotism"],
      isActive: true,
      comments: [{ value: "A wonderful reallife story." }],
    });

    const result = await movieModel.insertMany([m1, m2, m3]);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getSingleDoc = async () => {
  try {
    const result = await movieModel.findById("67a73f2c326ded8b4d8db9ea");
    // const result = await movieModel.findById("67a73f2c326ded8b4d8db9ea", "name");
    // const result = await movieModel.findById("67a73f2c326ded8b4d8db9ea", "ratings");

    return result;
  } catch (error) {
    console.log(error);
  }
};

const getAllDocs = async () => {
  try {
    const result = await movieModel.find(); // can use every single query syntax which are used in mongosh
    // const result = await movieModel.find({}, {name:1, ratings:1});
    // const result = await movieModel.find({ratings:{$gte : 4}}, {comments:1});

    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateById = async (id) => {
  try {
    const result = await movieModel.updateOne({ _id: id }, { name: "updated" });

    return result;
  } catch (error) {
    console.log(error);
  }
};

const updateManyDocs = async () => {
  try {
    const result = await movieModel.updateMany(
      { ratings: 5 },
      { genre: ["updated genre"] }
    );

    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteOneDoc = async (id) => {
  try {
    const result = await movieModel.findByIdAndDelete(id);

    return result;
  } catch (error) {
    console.log(error);
  }
};

const deleteManyDocs = async () => {
  try {
    const result = await movieModel.deleteMany({ ratings: { $lt: 5 } });

    return result;
  } catch (error) {
    console.log(error);
  }
};

export {
  insertManyDocs,
  insertOneDoc,
  getAllDocs,
  getSingleDoc,
  updateById,
  updateManyDocs,
  deleteOneDoc,
  deleteManyDocs,
};
