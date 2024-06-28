import '@/domain/polyfills'

/**
 * @swagger
 * components:
 *   schemas:
 *     Collector:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         phone:
 *           type: string
 *         avatar:
 *           type: string
 *         routes:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/CollectedRoute'
 *       example:
 *         id: 1
 *         name: 'Collector name 1'
 *         email: 'lKb8A@example.com'
 *         phone: 'Phone 1'
 *         avatar: 'avatar.png'
 */

export * from './DELETE'
export * from './GET'
export * from './POST'
export * from './PATCH'
