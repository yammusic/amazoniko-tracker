import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { createCollector } from '@/domain/actions/collectors'
import {
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/collectors:
 *   post:
 *     description: Create a new collector
 *     tags: [collectors]
 *     requestBody:
 *       description: The collector data to create
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               collector:
 *                 $ref: '#/components/schemas/Collector'
 *     responses:
 *       200:
 *         description: Collector created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Collector created successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/Collector'
 *       500:
 *         description: Internal server error
 */
export async function POST(req: NextRequest) {
  const res = NextResponse
  const params = await req.json()
  const { collector: collectorData } = params ?? {}

  try {
    await apiMiddleware(req, params, res, {
      only: ['POST'],
      permit: ['collector'],
    })

    const collector = await createCollector(collectorData)

    return responseApiSuccess(res, {
      content: {
        message: 'Collector created successfully!',
        data: collector,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
