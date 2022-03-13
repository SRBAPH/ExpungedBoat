exports = {
  run: async (client, message, args) => {
    const simplydjs = require("simply-djs")
    simplydjs.tictactoe(message, {
      embedColor: "#525254"
    })
  }
}

exports.name = "ttt"
