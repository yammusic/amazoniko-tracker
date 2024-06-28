import React from 'react'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../Avatar'
import type { AvatarProps } from '../types'

// Mock de @material-tailwind/react Avatar
jest.mock('@material-tailwind/react', () => ({
  Avatar: jest.fn(({ children, ...props }) => (
    <div data-testid="avatar" { ...props }>
      {children}
    </div>
  )),
}))

describe('Avatar component', () => {
  const defaultProps: AvatarProps = {
    children: <div>Avatar Content</div>,
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  test('renders without crashing', () => {
    render(<Avatar { ...defaultProps } />)
    expect(screen.getByTestId('avatar')).toBeInTheDocument()
  })

  test('renders with children', () => {
    render(<Avatar { ...defaultProps } />)
    expect(screen.getByText('Avatar Content')).toBeInTheDocument()
  })

  test('passes additional props to the avatar', () => {
    const additionalProps = { 'data-testid': 'custom-avatar' }
    render(<Avatar { ...defaultProps } { ...additionalProps } />)
    expect(screen.getByTestId('custom-avatar')).toBeInTheDocument()
  })
})
