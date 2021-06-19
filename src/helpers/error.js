export const destructServerMessage = error => {
  if (error.response && error.response.data && error.response.data.message && error.response.status != 422) {
    return error.response.data.message;
  }
  return null;
};

export const destructServerErrors = error => {
  if (error.response && error.response.data && error.response.data.errors) {
    return error.response.data.errors;
  }
  return [];
};
