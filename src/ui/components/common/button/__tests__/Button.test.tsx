// Button.test.tsx

import React from 'react'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Button } from '../Button'
import type { ButtonProps } from '../types'

// Mock de @material-tailwind/react Button
jest.mock('@material-tailwind/react', () => ({
  Button: jest.fn(({ children, ...props }) => (
    <button data-testid="button" { ...props }>
      {children}
    </button>
  )),
}))

describe('Button component', () => {
  const defaultProps: ButtonProps = {
    children: 'Button Content',
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<Button { ...defaultProps } />)
    expect(screen.getByTestId('button')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<Button { ...defaultProps } />)
    expect(screen.getByText('Button Content')).toBeInTheDocument()
  })

  test('calls onClick when button is clicked', () => {
    const onClickMock = jest.fn()
    render(<Button { ...defaultProps } onClick={ onClickMock } />)
    fireEvent.click(screen.getByTestId('button'))
    waitFor(() => expect(onClickMock).toHaveBeenCalledTimes(1))
  })

  test('passes additional props to the button', () => {
    const additionalProps = { 'data-testid': 'custom-button' }
    render(<Button { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-button')).toBeInTheDocument()
  })
})
