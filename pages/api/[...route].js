import { Hono } from 'hono'
import { handle } from 'hono/vercel'

export const config = {
  runtime: 'edge'
}

const app = new Hono().basePath('/api')

app.get('/hello', (c) => {
  return c.json({
    message: 'Hello from Hono!'
  })
})
app.get('/home', (c) => {
  return c.json({
    message: 'Welcxome Home Barudak!'
  })
})

export default handle(app)
