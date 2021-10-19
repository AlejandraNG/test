const Student = require('../models/StudentSchema');

exports.student_create = async (req, res) => {
    const {body} = req;

    let student = new Student(body);

    await student
        .save()
        .catch((err) => console.log('oops!',err));


    res(student);
}

exports.student_getall = async (rea, res) => {
    const data = await Student.find().populate("school");

    res.send(data);
}