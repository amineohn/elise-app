import { sql_query } from '../../libs/database'

const handler = async (_, res, params) => {
    try {
        const results = await sql_query(
            `INSERT INTO data (type, weight, matter) VALUES (type, weight, matter)`
        )
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler
