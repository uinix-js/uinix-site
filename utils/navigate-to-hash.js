export const navigateToHash = (hash) => {
  window.location.href = `#${hash || ''}`;
};
