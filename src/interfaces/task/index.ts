import { AgentTaskInterface } from 'interfaces/agent-task';
import { GoalInterface } from 'interfaces/goal';
import { GetQueryInterface } from 'interfaces';

export interface TaskInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  goal_id: string;
  is_active?: boolean;
  created_at?: any;
  updated_at?: any;
  agent_task?: AgentTaskInterface[];
  goal?: GoalInterface;
  _count?: {
    agent_task?: number;
  };
}

export interface TaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  goal_id?: string;
}
