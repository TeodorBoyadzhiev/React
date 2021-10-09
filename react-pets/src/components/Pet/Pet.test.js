import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

import Pet from './Pet'

describe('PetCard Component', () => {
    it('Should display name', () => {
        render(
            <BrowserRouter>
                <Pet name="Koko" />
            </BrowserRouter>
        );

        expect(document.querySelector('h3').textContent).toBe('Name: Koko')
    });

    it('Should increse likes when pet button is clicked', () => {
        render(
            <BrowserRouter>
                <Pet likes={5} />
            </BrowserRouter>
        )


        expect(document.querySelector('.pet-info span').textContent).toBe('5')
    });
});