import Registros from "../models/Registros";

export const login = async (req, res) => {
    try {
      // Request body email can be an email or username
      const userFound = await Registros.findOne({ email: req.body.email })
      if (!userFound) return res.status(401).json({ message: 'El correo ingresado no esta en nuestra base de datos ingrese una correcta' });
        
      const matchPassword = await Registros.comparePassword(
        req.body.password,
        userFound.password
      );
  
      if (!matchPassword)
        return res.status(401).json({
          message: "Contraseña inválida ingresala nuevamente",
        });
  
      res.json({ 'Datos usuario': userFound });
        
  
    } catch (error) {
      return res.status(400).json(error.message)
    }
  };
  