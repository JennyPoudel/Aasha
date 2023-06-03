import connect from "../../../../lib/mongodb";
import UsersL from '../../../../model/login'
import { hash } from 'bcryptjs';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  try {
    // Establish database connection
    await connect();
    
    // Create new user
    const user = await UsersL.create(req.body);
    
    if (!user) {
      // Return error if user is not created
      return res.status(404).json({ message: 'User is not found' });
    }
    
    // Redirect user to home page
    res.redirect('/login');
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}