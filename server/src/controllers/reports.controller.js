import Report from "../models/Report.js";

export const createReport = async (req, res) => {
    try {
        const {
            type,
            intensity,
            location,
            address,
            image,
        } = req.body;

        // validação mínima
        if (!type || !intensity || !location) {
            return res.status(400).json({
                message: "Campos obrigatórios ausentes",
            });
        }

        const report = await Report.create({
            type,
            intensity,
            location,
            address,
            image,
        });

        return res.status(201).json(report);
    } catch (error) {
        console.error("Erro ao criar report:", error);
        return res.status(500).json({
            message: "Erro interno do servidor",
        });
    }
};
