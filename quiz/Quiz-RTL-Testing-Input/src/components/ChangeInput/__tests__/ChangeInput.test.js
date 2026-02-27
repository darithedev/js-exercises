import React from 'react';
import ChangeInput from '../ChangeInput';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe('ChangeInput Component', () => {
    afterEach(cleanup);
    test('Handle displaying the correct greeting', () => {
        const { getByLabelText, getByTestId } = render(< ChangeInput />);

        const input = getByLabelText("user-name");
        const greeting = getByTestId("change-input-greeting");

        expect(input).toHaveValue("");
        expect(greeting).toHaveTextContent("Welcome, Anonymous User!");

        fireEvent.change(input, { target: { value: "New User" } });

        expect(input).toHaveValue("New User");
        expect(greeting).toHaveTextContent("Welcome, New User!");
    });
});