import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express()
const port = process.env.PORT

app.use(cors({
    origin: ['*']
}))

app.listen(port, () => {
    console.log('Port ->', port)
})