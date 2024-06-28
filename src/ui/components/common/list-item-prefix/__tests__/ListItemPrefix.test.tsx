import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListItemPrefix } from '../ListItemPrefix'
import type { ListItemPrefixProps } from '../types'

// Mock de @material-tailwind/react ListItemPrefix
jest.mock('@material-tailwind/react', () => ({
  ListItemPrefix: jest.fn(({ children, ...props }) => (
    <span data-testid="list-item-prefix" { ...props }>
      {children}
    </span>
  )),
}))

describe('ListItemPrefix component', () => {
  const defaultProps: ListItemPrefixProps = {
    children: 'Prefix',
  }

  test('renders without crashing', () => {
    render(<ListItemPrefix { ...defaultProps } />)
    expect(screen.getByTestId('list-item-prefix')).toBeInTheDocument()
  })

  test('renders prefix text correctly', () => {
    render(<ListItemPrefix { ...defaultProps } />)
    expect(screen.getByText('Prefix')).toBeInTheDocument()
  })

  test('passes additional props to the prefix element', () => {
    const additionalProps = { 'data-testid': 'custom-list-item-prefix', className: 'custom-class' }
    render(<ListItemPrefix { ...defaultProps } { ...additionalProps } />)
    const prefixElement = screen.getByTestId('custom-list-item-prefix')
    expect(prefixElement).toBeInTheDocument()
    expect(prefixElement).toHaveClass('custom-class')
  })
})
