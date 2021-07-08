import {render} from '@testing-library/react';
import {MessageForm} from '../MessageForm';

describe('MessageForm', () => {
  it('should render correctly', () => {
    const {queryByTestId} = render(<MessageForm />);

    expect(queryByTestId('messageText')).toBeInTheDocument();
    expect(queryByTestId('sendButton')).toBeInTheDocument();
  });
});
