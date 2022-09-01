export const sortByOrder =
  ({key, order}) =>
  (a, b) =>
    order.indexOf(b[key]) - order.indexOf(a[key]);
