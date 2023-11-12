import { TaskInterface } from 'interfaces/task';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface GoalInterface {
  id?: string;
  name: string;
  description?: string;
  status: string;
  user_id: string;
  is_active?: boolean;
  created_at?: any;
  updated_at?: any;
  task?: TaskInterface[];
  user?: UserInterface;
  _count?: {
    task?: number;
  };
}

export interface GoalGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  status?: string;
  user_id?: string;
}
