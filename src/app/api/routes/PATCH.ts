import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getCollectedRoute, updateCollectedRoute } from '@/domain/actions/routes'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/routes:
 *   patch:
 *     description: Update a collected route
 *     tags: [routes]
 *     requestBody:
 *       description: The collected route data to update
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
 *         description: Collected route updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Route updated successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/CollectedRoute'
 *       500:
 *         description: Internal server error
 */
export async function PATCH(req: NextRequest) {
  const res = NextResponse
  const params = await req.json()
  const { route: routeData } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['PATCH'],
      permit: ['route'],
    })

    await updateCollectedRoute(routeData)
    const route = await getCollectedRoute(routeData.id)

    return responseApiSuccess(res, {
      content: {
        message: 'Route updated successfully!',
        data: route,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
