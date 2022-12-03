import { SyntheticEvent, useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  LinearProgress,
} from '@mui/material';
import { useAppStore } from '../../../store';
import { AppButton, AppIconButton, AppAlert, AppForm } from '../../../components';
import { useAppForm, SHARED_CONTROL_PROPS, eventPreventDefault } from '../../../utils/form';

const VALIDATE_FORM_SIGNUP = {
  email: {
    email: true,
    presence: true,
  },
  phone: {
    type: 'string',
    format: {
      pattern: '^$|[- .+()0-9]+', // Note: We have to allow empty in the pattern
      message: 'should contain numbers',
    },
    // length: {
    // 	is: 10,
    // 	message: 'must be exactly 10 digits',
    // },
  },
  firstName: {
    type: 'string',
    presence: { allowEmpty: false },
    format: {
      pattern: '^[A-Za-z ]+$', // Note: Allow only alphabets and space
      message: 'should contain only alphabets',
    },
  },
  lastName: {
    type: 'string',
    presence: { allowEmpty: false },
    format: {
      pattern: '^[A-Za-z ]+$', // Note: Allow only alphabets and space
      message: 'should contain only alphabets',
    },
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      maximum: 32,
      message: 'must be between 8 and 32 characters',
    },
  },
};

const VALIDATE_EXTENSION = {
  confirmPassword: {
    equality: 'password',
  },
};

interface FormStateValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword?: string;
}

/**
 * Renders "Signup" view
 * url: /auth/signup
 */
const SignupView = () => {
  const navigate = useNavigate();
  const [, dispatch] = useAppStore();
  const [validationSchema, setValidationSchema] = useState<any>({
    ...VALIDATE_FORM_SIGNUP,
    ...VALIDATE_EXTENSION,
  });
  const [formState, , /* setFormState */ onFieldChange, fieldGetError, fieldHasError] = useAppForm({
    validationSchema: validationSchema, // the state value, so could be changed in time
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    } as FormStateValues,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const values = formState.values as FormStateValues; // Typed alias to formState.values as the "Source of Truth"

  useEffect(() => {
    // Component Mount
    let componentMounted = true;

    async function fetchData() {
      //TODO: Call any Async API here
      if (!componentMounted) return; // Component was unmounted during the API call
      //TODO: Verify API call here

      setLoading(false); // Reset "Loading..." indicator
    }
    fetchData(); // Call API asynchronously

    return () => {
      // Component Un-mount
      componentMounted = false;
    };
  }, []);

  useEffect(() => {
    // Update Validation Schema when Show/Hide password changed
    let newSchema;
    if (showPassword) {
      newSchema = VALIDATE_FORM_SIGNUP; // Validation without .confirmPassword
    } else {
      newSchema = { ...VALIDATE_FORM_SIGNUP, ...VALIDATE_EXTENSION }; // Full validation
    }
    setValidationSchema(newSchema);
  }, [showPassword]);

  const handleShowPasswordClick = useCallback(() => {
    setShowPassword((oldValue) => !oldValue);
  }, []);

  const handleAgreeClick = useCallback(() => {
    setAgree((oldValue) => !oldValue);
  }, []);

  const handleFormSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();

      const apiResult = true; // await api.auth.signup(values);

      if (!apiResult) {
        setError('Can not create user for given email, if you already have account please sign in');
        return; // Unsuccessful signup
      }

      dispatch({ type: 'SIGN_UP' });
      return navigate('/', { replace: true });
    },
    [dispatch, /*values,*/ navigate]
  );

  const handleCloseError = useCallback(() => setError(undefined), []);

  if (loading) return <LinearProgress />;

  return (
    <AppForm onSubmit={handleFormSubmit}>
      <Card>
        <CardHeader title="Sign Up" />
        <CardContent>
          <TextField
            required
            label="Email"
            name="email"
            value={values.email}
            error={fieldHasError('email')}
            helperText={fieldGetError('email') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="Phone"
            name="phone"
            value={values.phone}
            error={fieldHasError('phone')}
            helperText={fieldGetError('phone') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="First Name"
            name="firstName"
            value={values.firstName}
            error={fieldHasError('firstName')}
            helperText={fieldGetError('firstName') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            label="Last Name"
            name="lastName"
            value={values.lastName}
            error={fieldHasError('lastName')}
            helperText={fieldGetError('lastName') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
          />
          <TextField
            required
            type={showPassword ? 'text' : 'password'}
            label="Password"
            name="password"
            value={values.password}
            error={fieldHasError('password')}
            helperText={fieldGetError('password') || ' '}
            onChange={onFieldChange}
            {...SHARED_CONTROL_PROPS}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AppIconButton
                    aria-label="toggle password visibility"
                    icon={showPassword ? 'visibilityon' : 'visibilityoff'}
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={handleShowPasswordClick}
                    onMouseDown={eventPreventDefault}
                  />
                </InputAdornment>
              ),
            }}
          />
          {!showPassword && (
            <TextField
              required
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              value={values.confirmPassword}
              error={fieldHasError('confirmPassword')}
              helperText={fieldGetError('confirmPassword') || ' '}
              onChange={onFieldChange}
              {...SHARED_CONTROL_PROPS}
            />
          )}
          <FormControlLabel
            control={<Checkbox required name="agree" checked={agree} onChange={handleAgreeClick} />}
            label="You must agree with Terms of Use and Privacy Policy to use our service *"
          />

          {error ? (
            <AppAlert severity="error" onClose={handleCloseError}>
              {error}
            </AppAlert>
          ) : null}

          <Grid container justifyContent="center" alignItems="center">
            <AppButton type="submit" disabled={!(formState.isValid && agree)}>
              Confirm and Sign Up
            </AppButton>
          </Grid>
        </CardContent>
      </Card>
    </AppForm>
  );
};

export default SignupView;
