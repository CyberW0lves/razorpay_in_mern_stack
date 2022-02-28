const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("./Routes/payment");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api/payment/", paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
