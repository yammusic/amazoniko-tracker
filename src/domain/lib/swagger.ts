import { createSwaggerSpec } from 'next-swagger-doc'
import { APP_TITLE } from '../constants/app'

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'src/app/api',
    definition: {
      openapi: '3.0.0',
      info: {
        title: `${APP_TITLE} - API Documentation`,
        version: '1.0',
      },
      components: {},
      security: [],
    },
  })
  return spec
}
