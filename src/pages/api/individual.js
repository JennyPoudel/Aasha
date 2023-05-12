import connect from "../../../lib/mongodb";
import Individual from "../api/hello"

export default async function handler(req, res) {
  try {
    // Establish database connection
    await connect();
    
    // Create new user
    const user = await Individual.create(req.body);
    
    if (!user) {
      // Return error if user is not created
      return res.status(404).json({ message: 'User is not found' });
    }
    
    // Redirect user to home page
    res.redirect('/');
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
