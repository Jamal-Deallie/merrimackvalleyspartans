import { render, screen } from '@testing-library/react';
import Custom404Page from '../../pages/404';
import '@testing-library/jest-dom';

describe('Schedule page', () => {
  it('renders a heading', () => {
    render(<Custom404Page />);

    const heading = screen.getByRole('heading');

    const headingText = '404';

    expect(heading).toHaveTextContent(headingText);
  });
});
