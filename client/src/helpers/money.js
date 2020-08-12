export const formatMoney = (value) => {
  return new Intl.NumberFormat('es-CO').format(value);
};

export const getSymbol = () => {
  return '$';
};
