const mongoose = require("mongoose");
const bodyparser = require("body-Parser");

mongoose.connect('mongodb+srv://appformeruser:appformer@cluster0.xmgkg.mongodb.net/appformers', {
    useNewUrlParser: true ,
     useUnifiedTopology: true 
  })
  .then( () => {
    console.log("connection success");
  })
  .catch( (error) => {
    console.log(error);
  });
