import mongoose from "mongoose";

const ReportSchema = new mongoose.Schema(
    {
        type: {
            type: String,
            required: true,
            enum: ["UFO", "GHOST", "POLTERGEIST", "CREATURE"],
        },

        intensity: {
            type: Number,
            min: 1,
            max: 5,
            required: true,
        },

        location: {
            lat: {
                type: Number,
                required: true,
            },
            lng: {
                type: Number,
                required: true,
            },
        },

        address: {
            street: String,
            neighborhood: String,
            city: String,
            state: String,
            country: String,
        },

        image: {
            type: String, // URL ou base64 (decidimos depois)
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Report", ReportSchema);
