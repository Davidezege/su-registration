const Counter = require('../models/counter.model');

const getNextCampId =  async (req, res) => {
  const counter = await Counter.findOneAndUpdate(
    { _id: "campId" },
    { $inc: { seq: 1 } },
    { returnDocument: 'after', upsert: true }
  );

  res.json({ counter: counter.seq });
}

module.exports = { getNextCampId }