const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
    .format(price)
    .replace(/\D00(?=\D*$)/, '');
};

export default formatPrice;
