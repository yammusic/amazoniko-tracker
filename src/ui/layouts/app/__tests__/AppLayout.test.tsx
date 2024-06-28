import React from 'react'
import { render, screen } from '@testing-library/react'
import { AppLayout } from '../AppLayout'
import type { AppLayoutProps } from '../types'

// Mock de Roboto de next/font/google
jest.mock('next/font/google', () => ({
  Roboto: jest.fn(() => ({
    className: 'mocked-roboto-class',
    styles: 'mocked-roboto-styles',
  })),
}))

describe('AppLayout component', () => {
  const defaultProps: AppLayoutProps = {
    children: <div>Content</div>,
  }

  test('renders without crashing', () => {
    render(
      <AppLayout { ...defaultProps } />
    )
    const contentElement = screen.getByText('Content')
    expect(contentElement).toBeInTheDocument()
  })

  test('applies Roboto font styles correctly', () => {
    render(
      <AppLayout { ...defaultProps } />
    )
    const bodyElement = screen.getByTestId('app-layout-body')
    expect(bodyElement).toHaveClass('mocked-roboto-class')
  })

  test('renders children inside main element', () => {
    render(
      <AppLayout { ...defaultProps } />
    )
    const mainElement = screen.getByRole('main')
    expect(mainElement).toContainHTML('<div>Content</div>')
  })
})
