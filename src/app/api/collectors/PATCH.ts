import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getCollector, updateCollector } from '@/domain/actions/collectors'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/collectors:
 *   patch:
 *     description: Update a collector
 *     tags: [collectors]
 *     requestBody:
 *       description: The collector data to update
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               route:
 *                 $ref: '#/components/schemas/Collector'
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
 *                   example: 'Collector updated successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/Collector'
 *       500:
 *         description: Internal server error
 */
export async function PATCH(req: NextRequest) {
  const res = NextResponse
  const params = await req.json()
  const { collector: collectorData } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['PATCH'],
      permit: ['collector'],
    })

    await updateCollector(collectorData)
    const collector = await getCollector(collectorData.id)

    return responseApiSuccess(res, {
      content: {
        message: 'Collector updated successfully!',
        data: collector,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
