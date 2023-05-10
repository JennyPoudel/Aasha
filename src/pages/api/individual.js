import connect from "../../../lib/mongodb";
import Individual from "../api/hello"

connect()
export default async function handler(req, res) {
    try {
      const user = await Individual.create(req.body);
      res.redirect('/');
      if (!user) {
        return res.json({ code: 'User is not found' });
      }
    } catch (error) {
      res.status(400).json({ status: 'Not able to create a new user' });
    }
  }
  