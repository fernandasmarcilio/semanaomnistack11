const dbConnection = require('../database/dbConnection');

module.exports = {
    async create(req, res) {
        const { id } = req.body;
        
        const ong = await dbConnection('ongs')
            .where('id', id)
            .select('name')
            .first();

        if(!ong) {
            return res.status(400).json({ error: 'No ONG find with this ID'})
        }

        return res.json(ong);
    }
}