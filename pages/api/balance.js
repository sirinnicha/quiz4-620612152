import { checkToken } from "../../backendLibs/checkToken";
import { readUsersDB } from "../../backendLibs/dbLib";

export default function balanceRoute(req, res) {
  if (req.method === "GET") {
    //check authentication
    const user = checkToken(req);
    // return res.status(403).json({ok: false,message: "You do not have permission to check balance",});
    if (!user || user.isAdmin === true) {
      return res.status(403).json({
        ok: false,
        message: "You do not have permission to check balance",
      });
    }
    const foundUser = users.find((x) => user.username === x.username);
    const money = foundUser.money;
    const users = readUsersDB();
    //find user in DB and get their money value
    res.json({
      ok: true,
      money,
    });
    //return response
  } else {
    return res.status(400).json({ ok: false, message: "Invalid HTTP Method" });
  }
}
