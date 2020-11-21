const Schedule = require("../models/Schedule");

module.exports = {
  async create(request, response) {
    const { user_id, email, name, scheduleDate } = request.body;
    let schedule;

    try {
      schedule = await Schedule.findOne({ scheduleDate });

      if (schedule) {
        return response.status(400).json({ error: "Schedule unavailable" });
      }

      schedule = await Schedule.create({
        user_id,
        email,
        name,
        scheduleDate,
      });

      return response.status(200).json(schedule);
    } catch (error) {
      return response.status(400).json(error.mesage);
    }
  },

  async show(request, response) {
    const { _id } = request.params;

    try {
      const schedules = await Schedule.find({ user_id: _id });

      if (!schedules) {
        return response.json({ message: "No schedule for this user" });
      }

      return response.status(200).json(schedules);
    } catch (error) {
      return response.status(400).json({ error: error.message });
    }
  },
};
