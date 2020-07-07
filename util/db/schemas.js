const { Schema } = require("mongoose");

module.exports = {
  GuildSchema: new Schema({
    id_: String,
    prefix: {
      default: "?",
      type: String
    },
    admins: {
      default: [],
      type: Array
    },
    mods: {
      default: [],
      type: Array
    }
  })
};
