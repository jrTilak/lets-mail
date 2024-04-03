import app from "./app.js";

app.listen(process.env.PORT || 4657, () => {
  console.log(`Server is running on port ${process.env.PORT || 4657}`);
});
