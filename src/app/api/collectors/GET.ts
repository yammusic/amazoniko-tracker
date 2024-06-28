import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

import { getCollector, getCollectors } from '@/domain/actions/collectors'
import {
  NotFoundException,
  apiMiddleware,
  responseApiException,
  responseApiSuccess,
} from '@/domain/providers/http'

/**
 * @swagger
 * /api/collectors:
 *   get:
 *     description: Retrieve a list of collectors
 *     tags: [collectors]
 *     responses:
 *       200:
 *         description: A list of collectors
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Get collectors successfully!'
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Collector'
 *       404:
 *         description: Collectors not found
 *       500:
 *         description: Internal server error
 *
 * /api/collectors?id={id}:
 *   get:
 *     description: Retrieve a collector
 *     tags: [collectors]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The collector id to retrieve
 *         schema:
 *           type: number
 *     responses:
 *       200:
 *         description: Get a collector
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Get collector successfully!'
 *                 data:
 *                   $ref: '#/components/schemas/Collector'
 *       404:
 *         description: Collector not found
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
        ? await getCollector(Number(id))
        : await getCollectors()
    )

    if (!data) { throw new NotFoundException() }
    const isPlural = data instanceof Array

    return responseApiSuccess(res, {
      content: {
        message: `Get ${!isPlural ? 'collector' : 'collectors'} successfully!`,
        data,
      },
    })
  } catch (exception) {
    console.error(exception)
    return responseApiException(res, exception)
  }
}
