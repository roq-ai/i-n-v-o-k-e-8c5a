import { GetQueryInterface } from 'interfaces';

export interface AgentDeploymentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface AgentDeploymentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
