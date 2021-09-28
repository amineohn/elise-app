const insert = async (_, res, data) => {
    try {
        const results = executeQuery({
            query: `INSERT INTO data (matter, type, weight) VALUES (?, ?, ?)`,
            values: [data.matter, data.type, data.weight],
        })
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default insert
