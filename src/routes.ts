import type { RouteDefinition } from 'solid-app-router';
import { lazy } from 'solid-js';

export const routes: RouteDefinition[] = [
  { path: '/', component: lazy(() => import('./pages/Main')) },
  { path: '/news', component: lazy(() => import('./pages/News')) },
  { path: '/lunch', component: lazy(() => import('./pages/Lunch')) },
];
