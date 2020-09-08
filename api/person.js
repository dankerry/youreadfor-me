import Chance from "chance";
const chance = new Chance();

export default function personRoute(req, res, next) {
  if (req.method === "GET") {
    // I guess it doesn't have res.json like express? -TC
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        firstName: chance.first(),
        lastName: chance.last(),
        age: chance.age(),
        email: chance.email()
      })
    );
  }
  next();
}
