import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getCollectedRoute, getCollectedRoutes } from '@/domain/actions/routes'
import {
  NotFoundException,
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/routes:
 *   get:
 *     description: Retrieve a list of collected routes
 *     tags: [routes]
 *     responses:
 *       200:
 *         description: A list of collected routes
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Get routes successfully!'
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/CollectedRoute'
 *       404:
 *         description: Collected routes not found
 *       500:
 *         description: Internal server error
 *
 * /api/routes?id={id}:
 *   get:
 *     description: Retrieve a collected route
 *     tags: [routes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The collected route id to retrieve
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Get a collected route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Get route successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/CollectedRoute'
 *       404:
 *         description: Collected route not found
 *       500:
 *         description: Internal server error
 */
export async function GET(req: NextRequest) {
  const res = NextResponse
  const params = Object.fromEntries(
    req.nextUrl.searchParams.entries()
  )
  const { id } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['GET'],
      permit: ['id'],
    })

    const data = (
      id
        ? await getCollectedRoute(Number(id))
        : await getCollectedRoutes()
    )

    if (!data) { throw new NotFoundException() }
    const isPlural = data instanceof Array

    return responseApiSuccess(res, {
      content: {
        message: `Get ${!isPlural ? 'route' : 'routes'} successfully!`,
        data,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
