import request from 'utils/request';

export * as statisticApi from './statistics';

export const login = (params) => request.get('/api/mobile/login/mobile/login', { params });
