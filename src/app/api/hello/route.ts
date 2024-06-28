/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     tags: [hello]
 *     responses:
 *       200:
 *         description: Hello World!
 */
export async function GET() {
  return new Response('Hello World!')
}
