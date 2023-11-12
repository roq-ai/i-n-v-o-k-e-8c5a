import * as yup from 'yup';

export const agentTaskValidationSchema = yup.object().shape({
  status: yup.string().required(),
  is_active: yup.boolean().required(),
  task_id: yup.string().nullable().required(),
  agent_id: yup.string().nullable().required(),
});
