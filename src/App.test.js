import { render, screen } from '@testing-library/react';
import formatCSS from 'tailwindcss/lib/lib/formatCSS';
import App from './App';
import data from "./data-price/data-price.json"

describe("Hot-food-app", () => {
  it("App contain list meals", () => {
    const { getByText } = render(<App/>)
    expect(getByText(/menu\b/i)).toBeInTheDocument()
  })
  it("A list of Meals", () => {
    const {getByText} = render(<App/>)
    for(let meal of data.meals) {
      expect(getByText(meal.strMeal)).toBeInTheDocument()
    }
  })
})
