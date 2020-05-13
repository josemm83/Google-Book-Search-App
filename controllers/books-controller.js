const db = require("../models");

module.exports = {
  findAll: (req, res) => {
    db.Book.find(req.query)
      .sort({ title: 1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
  findById: (req, res) => {
    db.Book.find({ _id: req.params.id })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
  create: (req, res) => {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
  update: (req, res) => {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
  remove: (req, res) => {
    db.Book.findById({ _id: req.params.id })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.json(err));
  },
};
