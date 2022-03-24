const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema(
  {
    requestTitle: {
      type: String,
      required: true,
      },    

      teacherName: {
        type: String,
        required: true,
      },    

      Date: {
        type: Date,
        required: true,
      },

      time: {
        type: String,
        required: true,
      },

      description: {
        type: String,
        required: true,
      },       
  },
  { timestamps: true },
);


module.exports = mongoose.model("TeacherRequest", RequestSchema);