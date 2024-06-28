import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createCollectedRoute } from '@/domain/actions/routes'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/routes:
 *   post:
 *     description: Create a new collected route
 *     tags: [routes]
 *     requestBody:
 *       description: The collected route data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               route:
 *                 $ref: '#/components/schemas/CollectedRoute'
 *     responses:
 *       200:
 *         description: Collected route created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Route created successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/CollectedRoute'
 *       500:
 *         description: Internal server error
 */
export async function POST(req: NextRequest) {
  const res = NextResponse
  const params = await req.json()
  const { route: routeData } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['POST'],
      permit: ['route'],
    })

    const route = await createCollectedRoute(routeData)

    return responseApiSuccess(res, {
      content: {
        message: 'Route created successfully!',
        data: route,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
