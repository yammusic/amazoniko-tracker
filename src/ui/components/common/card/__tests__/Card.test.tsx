import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '../Card'
import type { CardProps } from '../types'

// Mock de @material-tailwind/react Card
jest.mock('@material-tailwind/react', () => ({
  Card: jest.fn(({ children, ...props }) => (
    <div data-testid="card" { ...props }>
      {children}
    </div>
  )),
}))

describe('Card component', () => {
  const defaultProps: CardProps = {
    children: <div>Card Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<Card { ...defaultProps } />)
    expect(screen.getByTestId('card')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<Card { ...defaultProps } />)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  test('passes additional props to the card', () => {
    const additionalProps = { 'data-testid': 'custom-card' }
    render(<Card { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-card')).toBeInTheDocument()
  })
})
