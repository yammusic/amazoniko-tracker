import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Drawer } from '../Drawer'
import type { DrawerProps } from '../types'

// Mock de @material-tailwind/react Drawer
jest.mock('@material-tailwind/react', () => ({
  Drawer: jest.fn(({ children, ...props }) => (
    <div data-testid="drawer" { ...props }>
      {children}
    </div>
  )),
}))

describe('Drawer component', () => {
  const onCloseMock = jest.fn()

  const defaultProps: DrawerProps = {
    open: false,
    onClose: onCloseMock,
    children: <div>Drawer Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<Drawer { ...defaultProps } />)
    expect(screen.getByTestId('drawer')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<Drawer { ...defaultProps } open />)
    expect(screen.getByText('Drawer Content')).toBeInTheDocument()
  })

  test('applies open prop correctly', () => {
    const { rerender } = render(<Drawer { ...defaultProps } open={ false } />)
    expect(screen.getByTestId('drawer')).not.toHaveAttribute('open')

    rerender(<Drawer { ...defaultProps } open />)
    expect(screen.getByTestId('drawer')).toHaveAttribute('open')
  })

  test('calls onClose when onClose event is triggered', () => {
    render(<Drawer { ...defaultProps } open />)
    fireEvent.click(screen.getByTestId('drawer'))
    waitFor(() => expect(onCloseMock).toHaveBeenCalledTimes(1))
  })

  test('passes additional props to the drawer', () => {
    const additionalProps = { 'data-testid': 'custom-drawer' }
    render(<Drawer { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-drawer')).toBeInTheDocument()
  })
})
