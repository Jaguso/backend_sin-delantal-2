const {Users} = require('../models');


const signUp = async(req, res) => {

  console.log(req.body)
  let user = await Users.create(req.body)

  if(!user) return res.status(400).json({message: "Couldn't create user"})
  
  return res.status(201).json({message: "User created", id:user.id}) //esto es lo que tiene que devolver el json al hacer la petición 
}

module.exports = {
  signUp
}