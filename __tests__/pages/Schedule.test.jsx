import { render, screen } from '@testing-library/react';
import Schedule from '../../pages/schedule';
import '@testing-library/jest-dom';

describe('Schedule page', () => {
  it('renders a heading', () => {
    render(<Schedule />);

    const heading = screen.getByRole('heading');

    const headingText = 'Schedule';

    expect(heading).toHaveTextContent(headingText);
  });
});
