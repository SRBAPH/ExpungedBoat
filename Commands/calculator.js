exports = {
  run: async (client, message, args) => {
    const simplydjs = require("simply-djs")
    simplydjs.calculator(message, {
      embedColor: "#525254"
    })
  }
}

exports.name = "calculator"
