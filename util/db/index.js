const { Guild } = require('./models')

module.exports = {
    // Getting collections
    getGuild: (id) => {
        return Guild.findOne({ id_: id })
    }
}