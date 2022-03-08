const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  cell: {
    type: Number,
  },
  email: {
    type: String,
  },
  role: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
