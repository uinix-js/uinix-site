export const getFilename = (filepath) => {
  return filepath.split('/').pop().split('.').shift();
};
