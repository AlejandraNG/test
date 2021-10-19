const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
    name:{
        type: String
    },
    lastName:{
        type: String
    },
    birthYear:{
        type: Number
    },
    grade:{
        type: Number
    },
    school:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "school"
    }]
});

const Student = mongoose.model("studen", StudentSchema);
module.exports = Student;