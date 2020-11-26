import { render, screen } from '@testing-library/react'

import FilterPrice from "./FilterPrice"

describe("", () => {
  it("", () => {
    const {getByText} = render(< FilterPrice/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
