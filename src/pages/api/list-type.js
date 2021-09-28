import { executeQuery } from '../../libs/database'

const handler = async (_, res) => {
    try {
        const results = await executeQuery(`SELECT * FROM type`)
        return res.json(results)
    } catch (e) {
        res.status(500).json({ message: e.message })
    }
}

export default handler
