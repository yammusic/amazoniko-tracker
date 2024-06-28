import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardBody } from '../CardBody'
import type { CardBodyProps } from '../types'

// Mock de @material-tailwind/react CardBody
jest.mock('@material-tailwind/react', () => ({
  CardBody: jest.fn(({ children, ...props }) => (
    <div data-testid="card-body" { ...props }>
      {children}
    </div>
  )),
}))

describe('CardBody component', () => {
  const defaultProps: CardBodyProps = {
    children: <div>Card Body Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<CardBody { ...defaultProps } />)
    expect(screen.getByTestId('card-body')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<CardBody { ...defaultProps } />)
    expect(screen.getByText('Card Body Content')).toBeInTheDocument()
  })

  test('passes additional props to the card body', () => {
    const additionalProps = { 'data-testid': 'custom-card-body' }
    render(<CardBody { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-card-body')).toBeInTheDocument()
  })
})
