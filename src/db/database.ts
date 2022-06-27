import config from './configdb';
import { knex } from 'knex';

const pool = knex({
  ...config,
});

export default pool;