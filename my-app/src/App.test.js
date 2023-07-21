//Brenda 
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"

test('Class Example: Test', () => {
  render(<App />);
  
  //Event: Click on the checkbox
  userEvent.click(screen.getByTestId("checkbox"));
  
  //Checking if checkbox is not checked.
  expect(screen.getByTestId("checkbox")).toBeChecked()

  //screen.debug();
  
});

// Brenda's Individual Test:
test("testing for This checkbox is now set to false", () => {
  render(<App />);
  expect(screen.getByText("This checkbox is now set to false")).toBeInTheDocument();
})
