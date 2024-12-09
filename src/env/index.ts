import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  API_URL: z.string().default('http://192.168.1.3:3333'),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

export const env = _env.data
