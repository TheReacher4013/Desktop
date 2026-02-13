const Test = require("../models/Test");

// create data
exports.addTest = async (req, res) => {
    try {
        const data = await Test.create({
            name: req.body.name || "First Data"
        });

        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// get all data
exports.getAllTests = async (req, res) => {
    try {
        const data = await Test.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
