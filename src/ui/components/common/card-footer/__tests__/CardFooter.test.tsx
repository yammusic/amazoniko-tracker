import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardFooter } from '../CardFooter'
import type { CardFooterProps } from '../types'

// Mock de @material-tailwind/react CardFooter
jest.mock('@material-tailwind/react', () => ({
  CardFooter: jest.fn(({ children, ...props }) => (
    <div data-testid="card-footer" { ...props }>
      {children}
    </div>
  )),
}))

describe('CardFooter component', () => {
  const defaultProps: CardFooterProps = {
    children: <div>Card Footer Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<CardFooter { ...defaultProps } />)
    expect(screen.getByTestId('card-footer')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<CardFooter { ...defaultProps } />)
    expect(screen.getByText('Card Footer Content')).toBeInTheDocument()
  })

  test('passes additional props to the card footer', () => {
    const additionalProps = { 'data-testid': 'custom-card-footer' }
    render(<CardFooter { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-card-footer')).toBeInTheDocument()
  })
})
