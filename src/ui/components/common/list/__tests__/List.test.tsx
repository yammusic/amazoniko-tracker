import React from 'react'
import { render, screen } from '@testing-library/react'
import { List } from '../List'
import type { ListProps } from '../types'

// Mock de @material-tailwind/react List
jest.mock('@material-tailwind/react', () => ({
  List: jest.fn(({ children, ...props }) => (
    <ul data-testid="list" { ...props }>
      {children}
    </ul>
  )),
}))

describe('List component', () => {
  const defaultProps: ListProps = {
    children: (
      <>
        <li>Item 1</li>

        <li>Item 2</li>

        <li>Item 3</li>
      </>
    ),
  }

  test('renders without crashing', () => {
    render(<List { ...defaultProps } />)
    expect(screen.getByTestId('list')).toBeInTheDocument()
  })

  test('renders list items correctly', () => {
    render(<List { ...defaultProps } />)
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  test('passes additional props to the list', () => {
    const additionalProps = { 'data-testid': 'custom-list', className: 'custom-class' }
    render(<List { ...defaultProps } { ...additionalProps } />)
    const listElement = screen.getByTestId('custom-list')
    expect(listElement).toBeInTheDocument()
    expect(listElement).toHaveClass('custom-class')
  })
})
