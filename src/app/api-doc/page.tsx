import React from 'react'
import { getApiDocs } from '@/domain/lib/swagger'
import ReactSwagger from './react-swagger'

export default async function IndexPage() {
  const spec = await getApiDocs()
  return (
    <section className="container">
      <ReactSwagger spec={ spec } />
    </section>
  )
}
