import { render, screen } from '@testing-library/react'

import MealsList from "./MealsList"

describe("", () => {
  it("", () => {
    const {getByText} = render(< MealsList/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
