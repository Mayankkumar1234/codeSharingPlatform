const Code = require("../models/Code");
const mongoose = require("mongoose")

const codeController = {
  saveCode: async (req, res) => {
    const code = req.body;
    try {
      if (!code) {
        return res.json({
          status: false,
          message: "Data not found...",
        });
      }
      const newCode = new Code(code);
      const response = await newCode.save();
      return res.json({
        status: true,
        message: "Code saved to database successfully..",
        data: {
          code_id: response._id,
        },
      });
    } catch (error) {
      console.log("Failed to save code", error);
      return res.status(500).json({
        success: false,
        message: "Failed to save code",
      });
    }
  },
  getCode: async (req, res) => {

    const { codeId } = req.params; 
  

    try {
      
       const isValid = mongoose.Types.ObjectId.isValid(codeId)
   if(!isValid)   return res.json({
    success:false,
    message:"Please provide a valid object id"
   })
   
      let response = await Code.findById({_id:codeId});
      console.log("response", response)
      if (!response) {
        return res.json({
          status: false,
          message: "Unable to get the data",
        });
      }
      return res.json({
        status: true,
        message: "Fetch the data successfully",
        data: response,
      });
    } catch (err) {
      console.log("Failed to get code", err);
      return res.status(500).json({
        success: false,
        message: "Failed to get code",
      });
    }
  },
  updateCode: async (req, res) => {
    const { codeId } = req.params;
    const { html, css, javascript } = req.body;
    try {
      if (!html || !css || !javascript) {
        return res.json({
          success: false,
          message: "All fields are required...",
        });
      }
      const updatedCode = await Code.findByIdAndUpdate({_id:codeId},{
        html: html,
        css: css,
        javascript: javascript,
      });
      await updatedCode.save();

      return res.json({
        success: true,
        message: "Data has updated successfully...",
      });
    } catch (error) { 
      return res.json({
        success: false,
        message: "Error while fetching the code",
      });
    }
  },
};

module.exports = codeController;
