import React from 'react'
import { render, screen } from '@testing-library/react'
import { CardHeader } from '../CardHeader'
import type { CardHeaderProps } from '../types'

// Mock de @material-tailwind/react CardHeader
jest.mock('@material-tailwind/react', () => ({
  CardHeader: jest.fn(({ children, ...props }) => (
    <div data-testid="card-header" { ...props }>
      {children}
    </div>
  )),
}))

describe('CardHeader component', () => {
  const defaultProps: CardHeaderProps = {
    children: <div>Card Header Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<CardHeader { ...defaultProps } />)
    expect(screen.getByTestId('card-header')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<CardHeader { ...defaultProps } />)
    expect(screen.getByText('Card Header Content')).toBeInTheDocument()
  })

  test('passes additional props to the card header', () => {
    const additionalProps = { 'data-testid': 'custom-card-header' }
    render(<CardHeader { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-card-header')).toBeInTheDocument()
  })
})
