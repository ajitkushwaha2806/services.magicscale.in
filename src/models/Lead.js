import mongoose, { Schema } from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false,
    },
    restaurantName: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: false,
    },
    dailyOrders: {
      type: String,
      required: false,
    },
    meetingDate: {
      type: String,
      required: false,
    },
    meetingSlot: {
      type: String,
      required: false,
    },
    businessActivity: {
      type: String,
      required: false,
    },
    turnover: {
      type: String,
      required: false,
    },
    planId: {
      type: String,
    },
    remarks: {
      type: String,
      required: false,
    },
    status: {
      type: String,
      enum: ["NEW", "CALLBACK", "CALL_DONE", "CONVERTED", "NOT_INTERESTED"],
      default: "NEW"
    },
    waMessaged: {
      type: Boolean,
      default: false
    },
    callbackDate: {
      type: Date
    }
  },
  {
    timestamps: true,
  },
);

export const Lead = mongoose.models.Lead || mongoose.model("Lead", leadSchema);

