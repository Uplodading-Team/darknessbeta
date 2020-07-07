const { model } = require("mongoose");
const { GuildSchema, UserSchema } = require('./schemas')

module.exports = {
    // MODELS
    Guild: new model("GuildSchema", GuildSchema)
}