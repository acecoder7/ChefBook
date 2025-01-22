import Message from "../models/messageSpace.js";

export const getMessages = async (req, res) => {
  try {
    const { filter } = req.query; // Get the filter from query params
    let dateRange = {};

    // Determine the date range based on the filter
    const now = new Date();
    switch (filter) {
      case "last24hours":
        dateRange = { $gte: new Date(now - 24 * 60 * 60 * 1000) }; // Last 24 hours
        break;
      case "lastWeek":
        dateRange = { $gte: new Date(now - 7 * 24 * 60 * 60 * 1000) }; // Last week
        break;
      case "lastMonth":
        dateRange = { $gte: new Date(now.setMonth(now.getMonth() - 1)) }; // Last month
        break;
      case "lastYear":
        dateRange = { $gte: new Date(now.setFullYear(now.getFullYear() - 1)) }; // Last year
        break;
      default:
        break;
    }

    // Fetch messages based on the filter and isDeleted flag
    const query = { isDeleted: false };
    if (filter) {
      query.createdAt = dateRange;
    }

    const messages = await Message.find(query).sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createMessage = async (req, res) => {
  try {
    const currentTime = new Date();
    const formattedTime = `${currentTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${currentTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;

    // Check if the time matches "11:11"
    const isManifestingTime = formattedTime === "11:11" || formattedTime === "23:11";

    // Create the message with isManifesting set based on the time
    const message = new Message({
      ...req.body,
      isManifesting: isManifestingTime,
    });

    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const addReaction = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    message.reactions.push(req.body);
    await message.save();
    res.json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const toggleStar = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    message.isStarred = !message.isStarred;
    await message.save();
    res.json(message);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteMessage = async (req, res) => {
  try {
    const updatedMessage = await Message.findByIdAndUpdate(
      req.params.id,
      { isDeleted: true },
      { new: true }
    );

    if (!updatedMessage) {
      return res.status(404).json({ error: "Message not found" });
    }

    res.json({ message: "Message marked as deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
