const EventModel = require("../models/EventModel");

module.exports = {
  index: (req, res, next) => {
    res.json({
      events: [
        {
          name: "Liczi fretka",
          event: { key: "front-end", val: "Front End" },
          city: { key: "warsaw", val: "Warszawa" },
        },
        {
          name: "Lolo fretka",
          event: { key: "back-end", val: "Back End" },
          city: { key: "cracow", val: "Krakow" },
        },
      ],
    });
    console.log(":)");
  },

  create: (req, res, next) => {
    const event = new EventModel({
      name: req.body.name,
      event: req.body.event,
      city: req.body.city,
    });
    event
      .save()
      .then((event) => {
        // if (err) {
        //   return res.status(500).json ({
        //     message: 'Error while creating Event',
        //     error: err
        //   })
        // }
        console.log(event);
        return res.status(201).json(event);
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Error while creating Event",
          error: err,
        });
      });
  },

  delete: (req, res) => {
    const id = req.params.id;

    EventModel.findByIdAndDelete(id)
      .then((event) => {
        // return res.status("200").json({
        //   id: id,
        //   deleted: true,
        // });
        console.log(event)
      })
      .catch((err) => {
        return res.status(500).json({
          message: "Error while deleting Event",
          error: err,
        });
      });
  },
};
