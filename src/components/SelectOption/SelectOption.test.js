import { render, screen } from '@testing-library/react'

import SelectOption from "./SelectOption"

describe("", () => {
  it("", () => {
    const {getByText} = render(< SelectOption/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
