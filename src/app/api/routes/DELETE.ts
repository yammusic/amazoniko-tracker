import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { deleteCollectedRoute } from '@/domain/actions/routes'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/routes?id={id}:
 *   delete:
 *     description: Delete a collected route
 *     tags: [routes]
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: The collected route id to delete
 *         schema:
 *           type: number
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
 *                   example: 'Collected route deleted successfully!'
 *       500:
 *         description: Internal server error
 */
export async function DELETE(req: NextRequest) {
  const res = NextResponse
  const params = Object.fromEntries(
    req.nextUrl.searchParams.entries()
  )
  const { id } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['DELETE'],
      permit: ['id'],
    })

    await deleteCollectedRoute(Number(id))

    return responseApiSuccess(res, {
      content: {
        message: 'Collector deleted successfully!',
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
