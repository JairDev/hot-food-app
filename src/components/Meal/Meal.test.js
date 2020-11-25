import { render, screen } from '@testing-library/react'

import Meal from "./Meal"

describe("Each Meal", () => {
  it("Meal name content", () => {
    const {getByText} = render(<Meal/>)
    // expect(getByText(/fried chicken\b/i)).toBeInTheDocument()
  })
})
