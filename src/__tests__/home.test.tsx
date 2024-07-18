import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import HomePage from '../pages/homepage'
import React from 'react';
 
test('HomePage', () => {
  render(<HomePage />)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})