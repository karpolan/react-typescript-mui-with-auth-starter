import { useState, useEffect, useCallback, SyntheticEvent, ChangeEvent } from 'react';
import validate from 'validate.js';
import { ObjectPropByName } from './type';

// Same props to style Input, TextField, and so on across the Application
export const SHARED_CONTROL_PROPS = {
  variant: 'outlined',
  margin: 'normal', // 'dense', 'none'
  fullWidth: true,
} as const;

// "Schema" for formState
interface FormState {
  isValid: boolean;
  values: object;
  touched: object;
  errors: object;
}

/**
 * Basic object to use as initial value for formState
 * Usage: const [formState, setFormState] = useState(DEFAULT_FORM_STATE);
 */
export const DEFAULT_FORM_STATE: FormState = {
  isValid: false, // True when all Input Values are entered correctly
  values: {}, // List of Input Values as string|boolean
  touched: {}, // List of Inputs have been touched as boolean
  errors: {}, // List of Errors for every field as array[] of strings
};

/**
 * Reusable event to cancel the default behavior
 */
export const eventPreventDefault = (event: SyntheticEvent) => {
  event.preventDefault();
};

/**
 * Verifies does the From field with given Name has the Error
 */
export const formHasError = (formState: FormState, fieldName: string): boolean => {
  return Boolean(
    (formState.touched as ObjectPropByName)[fieldName] && (formState.errors as ObjectPropByName)[fieldName]
  );
};

/**
 * Returns text of "top most" Error for the Form field by given Name.
 * Returns null if there is no Error.
 */
export const formGetError = (formState: FormState, fieldName: string): string => {
  return formHasError(formState, fieldName) ? (formState.errors as ObjectPropByName)[fieldName]?.[0] : null;
};

// Params for useAppForm() hook
interface UseAppFormParams {
  validationSchema: object;
  initialValues: object;
}

/**
 * Application "standard" From as Hook
 * Note: the "name" prop of all Form controls must be set! We use event.target?.name for binding data.
 * Usage: const [formState, setFormState, onFieldChange, fieldGetError, fieldHasError] = useAppForm({
    validationSchema: XXX_FORM_SCHEMA,
    initialValues: {name: 'John Doe'},
  });
 * @param {object} options.validationSchema - validation schema in 'validate.js' format
 * @param {object} [options.initialValues] - optional initialization data for formState.values
 */
export function useAppForm({ validationSchema, initialValues = {} }: UseAppFormParams) {
  // Validate params
  if (!validationSchema) {
    throw new Error('useAppForm() - the option `validationSchema` is required');
  }
  if (typeof validationSchema !== 'object') {
    throw new Error('useAppForm() - the option `validationSchema` should be an object');
  }
  if (typeof initialValues !== 'object') {
    throw new Error('useAppForm() - the option `initialValues` should be an object');
  }

  // Create Form state and apply initialValues if set
  const [formState, setFormState] = useState({ ...DEFAULT_FORM_STATE, values: initialValues });

  // Validation by 'validate.js' on every formState.values change
  useEffect(() => {
    const errors = validate(formState.values, validationSchema);
    setFormState((currentFormState) => ({
      ...currentFormState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [validationSchema, formState.values]);

  // Event to call on every Input change. Note: the "name" props of the Input control must be set!
  const onFieldChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target?.name;
    const value =
      event.target?.type === 'checkbox'
        ? event.target?.checked // Checkbox Input
        : event.target?.value; // Any other Input

    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [name]: value,
      },
      touched: {
        ...formState.touched,
        [name]: true,
      },
    }));
  }, []);

  // Returns text of "top most" Error for the Field by given Name or null
  const fieldGetError = (fieldName: string): string => formGetError(formState, fieldName);

  // Verifies does the Field with given Name has the Error
  const fieldHasError = (fieldName: string): boolean => formHasError(formState, fieldName);

  // Return state and methods
  return [formState, setFormState, onFieldChange, fieldGetError, fieldHasError] as const;
}
