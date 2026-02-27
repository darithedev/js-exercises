import React from 'react';
import FocusInput from '../FocusInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

// The second test should emulate properly focusing input following a button trigger.
// fireEvent.focus() method

describe('FocusInput Component', () => {
    afterEach(cleanup);
    test('matches snapshot', () => {
        //Arrange
        const { container } = render(<FocusInput />);
        //Assert
        expect(container.firstChild).toMatchSnapshot();
    });

    test('emulate properly focusing input', () => {
        const { getByPlaceholderText, getByText } = render(<FocusInput />);

        fireEvent.click(getByText("Click to Focus"));

        expect(document.activeElement).toBe(getByPlaceholderText("Focus me!"));
    });
});