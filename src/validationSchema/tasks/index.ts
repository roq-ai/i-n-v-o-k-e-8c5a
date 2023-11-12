import * as yup from 'yup';

export const taskValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  status: yup.string().required(),
  is_active: yup.boolean().required(),
  goal_id: yup.string().nullable().required(),
});
