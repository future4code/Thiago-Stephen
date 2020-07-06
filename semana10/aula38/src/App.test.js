 import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import App from "./App";

test("digitar no input e clicar, mostra o digitado", async () => {
    const { getByPlaceholderText, getByText, getByTestId } = render(<App />)
    const input = getByPlaceholderText(/novo post/i)
    const adicionar = getByText(/adicionar/i)

    fireEvent.change(input, {target: { value: "gamakid"} })
    fireEvent.click(adicionar)

    let post = getByTestId(/inputUser/i)
    wait(() => {
        expect(post).toHavetextContext("gamakid")
    })
})