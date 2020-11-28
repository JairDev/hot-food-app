import { render, screen } from '@testing-library/react'

import Price from "./Price"

describe("", () => {
  it("", () => {
    const {getByText} = render(< Price/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
