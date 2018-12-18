const swalMessages = {
  LOGIN_SUCCESSFUL: {
    title: 'Login Successful',
    text: '',
    type: 'success',
    showConfirmButton: false,
    timer: 3000,
  },
  LOGIN_ERROR: {
    title: 'Oops...',
  },
  REGISTRATION_SUCCESSFUL: {
    title: 'Resgistration Successful',
    text: 'An email with a verification link has been sent to you, please verify your account',
    type: 'success',
    confirmButtonText: 'continue',
  },
  ARTICLE_DELETED_SUCCESSFUL: {
    title: 'Article deleted',
    text: 'Your article was deleted successfully',
    type: 'success',
    showConfirmButton: false,
    timer: 3000,
  },
  REGISTRATION_ERROR: {
    title: 'Unable to complete registration',
    text: '',
    type: 'error',
    confirmButtonText: 'Try Agian',
  },
};

export default swalMessages;
