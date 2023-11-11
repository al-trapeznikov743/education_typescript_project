import {useEffect, useState} from 'react';
import {Button} from 'shared/ui/Button';

// this component for testing error boundary
export const BugButton = () => {
  const [hasError, setError] = useState(false);
  const onThrow = () => setError(true);

  useEffect(() => {
    if (hasError) {
      throw new Error();
    }
  }, [hasError]);

  return (
    <Button
      onClick={onThrow}
    >
      throw error
    </Button>
  );
};