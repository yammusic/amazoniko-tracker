import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListItem } from '../ListItem'
import type { ListItemProps } from '../types'

// Mock de @material-tailwind/react ListItem
jest.mock('@material-tailwind/react', () => ({
  ListItem: jest.fn(({ children, ...props }) => (
    <li data-testid="list-item" { ...props }>
      {children}
    </li>
  )),
}))

describe('ListItem component', () => {
  const defaultProps: ListItemProps = {
    children: 'List Item Text',
  }

  test('renders without crashing', () => {
    render(<ListItem { ...defaultProps } />)
    expect(screen.getByTestId('list-item')).toBeInTheDocument()
  })

  test('renders list item text correctly', () => {
    render(<ListItem { ...defaultProps } />)
    expect(screen.getByText('List Item Text')).toBeInTheDocument()
  })

  test('passes additional props to the list item', () => {
    const additionalProps = { 'data-testid': 'custom-list-item', className: 'custom-class' }
    render(<ListItem { ...defaultProps } { ...additionalProps } />)
    const listItemElement = screen.getByTestId('custom-list-item')
    expect(listItemElement).toBeInTheDocument()
    expect(listItemElement).toHaveClass('custom-class')
  })
})
