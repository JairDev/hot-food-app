import {render} from '@testing-library/react'
import Nav from "./Nav"

describe("Nav content links", () => {
  it("links list nav", () => {
    const { getByText } = render(<Nav/>)
    expect(getByText(/menu\b/i)).toBeInTheDocument()
  })
})

 