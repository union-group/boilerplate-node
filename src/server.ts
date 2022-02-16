import { app } from './app'

const port = Number(process.env.PORT)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
