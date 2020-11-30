import { render, screen } from '@testing-library/react'

import Button from "./Button"

describe("", () => {
  it("", () => {
    const {getByText} = render(< Button/ >)
    expect(getByText(/""/i)).toBeInTheDocument()
  })
})
