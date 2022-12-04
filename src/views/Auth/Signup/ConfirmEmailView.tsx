import { useCallback, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Card, CardHeader, CardContent, TextField } from '@mui/material';
import { SHARED_CONTROL_PROPS } from '../../../utils/form';
import { AppAlert, AppForm } from '../../../components';

const TOKEN_QUERY_PARAM = 'token';

/**
 * Renders "Confirm Email" view for Signup flow
 * url: /auth/signup/confirm-email
 */
const ConfirmEmailView = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const token = useQuery().get(TOKEN_QUERY_PARAM) || '';
  console.log('ConfirmEmailView() - token:', token);

  useEffect(() => {
    // Component Mount
    let componentMounted = true;

    async function fetchData() {
      //TODO: Call any Async API here
      if (!componentMounted) return; // Component was unmounted during the API call
      //TODO: Verify API call here

      setEmail('example@domain.com');
    }
    fetchData(); // Call API asynchronously

    return () => {
      // Component Un-mount
      componentMounted = false;
    };
  }, []);

  const handleCloseError = useCallback(() => setError(undefined), []);

  return (
    <AppForm>
      <Card>
        <CardHeader title="Email Confirmation" />
        <CardContent>
          <TextField disabled label="Email" name="email" value={email} helperText=" " {...SHARED_CONTROL_PROPS} />
          {error ? (
            <AppAlert severity="error" onClose={handleCloseError}>
              {error}
            </AppAlert>
          ) : null}
        </CardContent>
      </Card>
    </AppForm>
  );
};

export default ConfirmEmailView;
