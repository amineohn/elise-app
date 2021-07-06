import { sql_query } from '../../libs/database'

const handler = async (_, res) => {
    try {
        const results = await sql_query(`SELECT * FROM data`)
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler
