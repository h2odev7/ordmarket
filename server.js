import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/create-psbt", async (req,res)=>{
  const {inscriptionId,buyer,price} = req.body;

  // ⚠️ Replace with real PSBT logic later
  const fakePsbt = "cHNidP8BAHECAAAAA...";

  res.json({psbt:fakePsbt});
});

app.listen(3000,()=>console.log("Server running on port 3000"));
