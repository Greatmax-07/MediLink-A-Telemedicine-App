// app.config.js
export default {
  expo: {
    name: "telemedicine-app",
    slug: "telemedicine-app",
    version: "1.0.0",
    extra: {
      GROQ_API_KEY: process.env.GROQ_API_KEY,
      GROQ_URL: process.env.GROQ_URL,
      MODEL: process.env.MODEL,
    },
  },
};
