const mongoose = require("mongoose");
const positionSchema = new mongoose.Schema({
  top: {
    type: String,
    require: true
  },
  left: {
    type: String,
    require: true
  }
});
const characterFacingSchema = new mongoose.Schema({
  top: {
    type: Boolean,
    require: true
  },
  down: {
    type: Boolean,
    require: true
  },
  left: {
    type: Boolean,
    require: true
  },
  right: {
    type: Boolean,
    require: true
  }
});
const characterItemSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  explain: {
    type: String,
    reuqire: true
  }
});

const enemySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  position: {
    type: positionSchema,
    reuqire: true
  }
});

const characterSchema = new mongoose.Schema({
  characterPositionInMap: {
    type: positionSchema,
    require: true
  },
  characterFacing: {
    type: characterFacingSchema,
    require: true
  },
  characterBag: {
    type: [characterItemSchema],
    require: true
  },
  moving: Boolean,
  preMove: Number
});

const mapSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  noEntry: {
    type: [positionSchema],
    require: true
  },
  enemy: {
    type: [enemySchema],
    require: true
  }
});

const DataSchema = new mongoose.Schema({
  character: {
    type: characterSchema,
    require: true
  },
  position: {
    type: positionSchema,
    require: true
  },
  map: {
    type: mapSchema,
    require: true
  },
  openMenu: {
    type: Boolean,
    require: true
  },
  moving: { type: Boolean },
  user: { type: String, require: true }
});

const Data = mongoose.model("Data", DataSchema);

module.exports = Data;
