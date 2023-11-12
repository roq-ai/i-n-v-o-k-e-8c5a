import * as yup from 'yup';

export const organizationValidationSchema = yup.object().shape({
  description: yup.string().nullable(),
  is_active: yup.boolean().nullable(),
  organization_type: yup.string().nullable(),
  name: yup.string().required(),
});
