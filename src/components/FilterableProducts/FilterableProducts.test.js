import { render, screen } from '@testing-library/react'

import FilterableProducts from "./FilterableProducts"

describe("", () => {
  it("", () => {
    const {getByText} = render(< FilterableProducts/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
