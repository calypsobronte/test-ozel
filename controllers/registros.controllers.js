import Registros from "../models/Registros";

export const createRegistros = async (req, res) => {
    try {
        const { name, lastname, email, dni, password } = req.body;
        const registros = new Registros({
            name,
            lastname,
            email,
            dni,
            password: await Registros.encryptPassword(password),
        });
        const savedRegistros = await registros.save();
        return res.status(201).json(savedRegistros);
    } catch (error) {
        console.error(error);
    }
};

export const getRegistros = async (req, res) => {
    try {
        await Registros.find({}, (err, dataList) => {
            return res.status(200).json(dataList);
        });
    } catch (error) {
        console.error(error);
    }
}

export const getRegisterbyId = async (req, res) => {
    try {
        let { id } = req.params;
        await Registros.findOne({ _id: id }).exec((err, userList) => {
            return res.status(200).json(userList);
        });
    } catch (error) {
        console.error(error);
    }
};

export const patchRegistros = async (req, res) => {
    let result = null;
    try {
        let { id } = req.params;
        const { name, lastname, email, dni, password } = req.body;
        if (name) {
            await Registros.findByIdAndUpdate(id, { $set: { name: name, update: new Date } });
            result = name
        }
        if (lastname) {
            await Registros.findByIdAndUpdate(id, { $set: { lastname: lastname, update: new Date } });
            result = lastname
        }
        if (email) {
            await Registros.findByIdAndUpdate(id, { $set: { email: email, update: new Date } });
            result = email
        }
        if (dni) {
            await Registros.findByIdAndUpdate(id, { $set: { dni: dni, update: new Date } });
            result = dni
        }
        if (password) {
            await Registros.findByIdAndUpdate(id, { $set: { password: password, update: new Date } });
            result = password
        }
        return res.status(200).json({ status: true, message: `Cambios actualizados con éxito ${result}` });
    } catch (error) {
        console.error(error);
    }
}

export const deleteRegistros = async (req, res) => {
    try {
        let id = req.params.id;

        await Registros.findByIdAndDelete({ _id: id }, (err, registros) => {
            return res.status(200).send({ message: "Se eliminaron correctamente los datos del usuario" });
        });
    } catch (error) {
        console.error(error);
    }
};