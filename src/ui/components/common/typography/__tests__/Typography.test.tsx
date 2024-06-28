import React from 'react'
import { render, screen } from '@testing-library/react'
import { Typography } from '../Typography'
import type { TypographyProps } from '../types'

// Mock de @material-tailwind/react Typography
jest.mock('@material-tailwind/react', () => ({
  Typography: jest.fn(({ children, ...props }) => (
    <div data-testid="typography" { ...props }>
      {children}
    </div>
  )),
}))

describe('Typography component', () => {
  const defaultProps: TypographyProps = {
    children: 'Typography Text',
  }

  test('renders without crashing', () => {
    render(<Typography { ...defaultProps } />)
    expect(screen.getByTestId('typography')).toBeInTheDocument()
  })

  test('renders typography text correctly', () => {
    render(<Typography { ...defaultProps } />)
    expect(screen.getByText('Typography Text')).toBeInTheDocument()
  })

  test('passes additional props to the typography element', () => {
    const additionalProps = { 'data-testid': 'custom-typography', className: 'custom-class' }
    render(<Typography { ...defaultProps } { ...additionalProps } />)
    const typographyElement = screen.getByTestId('custom-typography')
    expect(typographyElement).toBeInTheDocument()
    expect(typographyElement).toHaveClass('custom-class')
  })
})
