import request from 'utils/request';

export const getGroups = () => request.get('/api/mobile/statistics/groups');

export const number = () => request.get('/api/mobile/statistics/storage/number');

export const getStorageTrend = () => request.get('/api/mobile/statistics/storage/trend');

export const getMonthlyTrend = () => request.get('/api/mobile/statistics/month/storage/trend');
