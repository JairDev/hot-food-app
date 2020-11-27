import { render, screen } from '@testing-library/react'

import Cart from "./Cart"

describe("", () => {
  it("", () => {
    const {getByText} = render(< Cart/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
