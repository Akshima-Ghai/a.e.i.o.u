import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; //since token is in the first position in the array after we split it.
    const isCustomAuth = token.length < 500 ? true : false; //whether token is custom or google's auth, if it's > than 500 then its google auth
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, process.env.SECRET_KEY);
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub; //for google auth
    }
    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
