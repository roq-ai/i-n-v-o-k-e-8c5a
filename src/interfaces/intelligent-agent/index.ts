import { AgentTaskInterface } from 'interfaces/agent-task';
import { GetQueryInterface } from 'interfaces';

export interface IntelligentAgentInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  is_active?: boolean;
  created_at?: any;
  updated_at?: any;
  agent_task?: AgentTaskInterface[];

  _count?: {
    agent_task?: number;
  };
}

export interface IntelligentAgentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
}
