import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { deleteCollector } from '@/domain/actions/collectors'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/collectors?id={id}:
 *   delete:
 *     description: Delete a collector
 *     tags: [collectors]
 *     parameters:
 *       - name: id
 *         in: query
 *         required: true
 *         description: The collector id to delete
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Collector updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Collector deleted successfully!'
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

    await deleteCollector(Number(id))

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
