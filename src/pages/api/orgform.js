import connect from "../../../lib/mongodb";
import Organization from "./helloorg";
connect()
export default async function handler(req, res) {
    try {
      const user = await Organization.create(req.body);
      res.redirect('/');
      if (!user) {
        return res.json({ code: 'User is not found' });
      }
    } catch (error) {
      res.status(400).json({ status: 'Not able to create a new user' });
    }
  }
  