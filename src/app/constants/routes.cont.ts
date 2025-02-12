export const ROUTES = {
  HOME: {
    BASE: '',
  },
  PROFILE: {
    BASE: 'profile',
  },
  TASKS: {
    BASE: 'tasks',
    CREATE: 'create',
    EDIT: 'edit/:id',
    DETAIL: ':id',
  },
  NOTFOUND: {
    BASE: '404',
  },
  AUTH: {
    BASE: 'auth',
    FORGOT_PASSWORD: 'forgot-password',
    RESET_PASSWORD: 'reset-password',
  },
};
