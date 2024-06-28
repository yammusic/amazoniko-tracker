import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { IconButton } from '../IconButton'
import type { IconButtonProps } from '../types'

// Mock de @material-tailwind/react IconButton
jest.mock('@material-tailwind/react', () => ({
  IconButton: jest.fn(({ children, ...props }) => (
    <button data-testid="icon-button" { ...props }>
      {children}
    </button>
  )),
}))

describe('IconButton component', () => {
  const onClickMock = jest.fn()

  const defaultProps: IconButtonProps = {
    onClick: onClickMock,
    children: 'Button Label',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<IconButton { ...defaultProps } />)
    expect(screen.getByTestId('icon-button')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<IconButton { ...defaultProps } />)
    expect(screen.getByText('Button Label')).toBeInTheDocument()
  })

  test('calls onClick when button is clicked', () => {
    render(<IconButton { ...defaultProps } />)
    fireEvent.click(screen.getByTestId('icon-button'))
    waitFor(() => expect(onClickMock).toHaveBeenCalledTimes(1))
  })

  test('passes additional props to the button', () => {
    const additionalProps = { 'data-testid': 'custom-button' }
    render(<IconButton { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })
})
