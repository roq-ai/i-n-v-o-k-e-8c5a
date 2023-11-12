import { TaskInterface } from 'interfaces/task';
import { IntelligentAgentInterface } from 'interfaces/intelligent-agent';
import { GetQueryInterface } from 'interfaces';

export interface AgentTaskInterface {
  id?: string;
  task_id: string;
  agent_id: string;
  status: string;
  is_active?: boolean;
  created_at?: any;
  updated_at?: any;

  task?: TaskInterface;
  intelligent_agent?: IntelligentAgentInterface;
  _count?: {};
}

export interface AgentTaskGetQueryInterface extends GetQueryInterface {
  id?: string;
  task_id?: string;
  agent_id?: string;
  status?: string;
}
