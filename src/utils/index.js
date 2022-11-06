export const getStatus = {
  ACTIVE: 'active',
  ENDED: 'ended',
  TOTAL: 'total',
};

export const variableReplace = {
  status: {
    [getStatus.ACTIVE]: '진행중',
    [getStatus.ENDED]: '종료',
  },
};

export const getDate = (date) => date.slice(0, 10);
