import { render, screen } from '@testing-library/react'

import MealCart from "./MealCart"

describe("", () => {
  it("", () => {
    const {getByText} = render(< MealCart/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
