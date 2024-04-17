const express = require("express");

let PORT =  3488;

(async () => {
  const app = express();

  app
    .listen(PORT, () => {
      console.log(`Express server is running on port ${PORT}`);
    })
    .on("error", (err) => {
      console.log(err);
      process.exit();
    })
    .on("close", () => {
      channel.close();
    });
})();
