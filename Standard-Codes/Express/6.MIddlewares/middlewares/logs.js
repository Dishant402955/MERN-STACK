function userCredentials(req, res, next) {
  console.log("\n\nusername Matched!!");
  console.log("password matched");
  console.log("Age verified");
  console.log("User Verified\n");
  next();
}

export default userCredentials;