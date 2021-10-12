export const empty = (data: Object) =>
  data && Object.keys(data).length === 0 && data.constructor === Object;

export const intersection = (arr1: any, arr2: any) =>
  arr1.filter((elem: any) => arr2.includes(elem));
