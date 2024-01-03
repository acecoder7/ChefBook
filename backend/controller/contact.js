import Contact from "../models/contact.js";

//Create Faq Query
export const createContactQuery = async (req,res) => {
    try{
        const newContactData = {
            name: req.body.name,
            email: req.body.email,
            subject: req.body.subject,
            message: req.body.message,
        };
  
      const contact = await Contact.create(newContactData);
  
      res.status(201).json({
        success: true,
        message: "Your Tasty Inquiry is cooking! 🌮👩‍🍳 We've received your message and will whip up a response for you shortly. Stay tuned for more Tasty Tips!",
        contact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};


// Get All Faq Queries
export const getallContactQ = async (req, res) => {
    try {
      const contact = await Contact.find().sort({ createdAt: -1 });
  
      res.status(200).json({
        success: true,
        contact,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
};