import { render, screen } from '@testing-library/react'

import Header from "./Header"

describe("Header", () => {
  it("Header", () => {
    const {getByText} = render(<Header/>)
    // expect(getByText(/""/i)).toBeInTheDocument()
  })
})
