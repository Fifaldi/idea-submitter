import {core} from './core.epic';
import {auth} from './auth.epic';
// import {ideas} from './idea.epic';

export const epics = [...core, ...auth];
