import '@/domain/polyfills'

/**
 * @swagger
 * components:
 *   schemas:
 *     CollectedRoute:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         collectorId:
 *           type: number
 *         name:
 *           type: string
 *         company:
 *           type: string
 *         address:
 *           type: string
 *         phone:
 *           type: string
 *         material:
 *           type: string
 *         collectedAt:
 *           type: timestamp
 *         latitude:
 *           type: number
 *         longitude:
 *           type: number
 *         collector:
 *           $ref: '#/components/schemas/Collector'
 *       example:
 *         id: 1
 *         collectorId: 1
 *         name: 'Client name 1'
 *         company: 'Company 1'
 *         address: 'Address 1'
 *         phone: 'Phone 1'
 *         material: 'Material 1'
 *         collectedAt: '2022-01-01T00:00:00.000Z'
 *         latitude: 1.10849
 *         longitude: 1.10159
 */

export * from './DELETE'
export * from './GET'
export * from './POST'
export * from './PATCH'
