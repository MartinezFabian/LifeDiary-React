export const getEnvironments = () => {
  const environments = import.meta.env;

  return {
    ...environments,
  };
};
