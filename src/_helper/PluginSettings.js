// handle toast message
export const toastConfig = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'light',
};

export function formatNumberWithComma(value) {
  if (value == null) return 'N/A';
  if (value == 0) return '0';
  if (!value || isNaN(value)) return '-';
  // eslint-disable-next-line new-cap
  const formatter = Intl.NumberFormat('en-IN', { currency: 'INR' });
  return formatter.format(value);
}
