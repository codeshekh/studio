export const RouterNames = {
  SANDBOX: 'SANDBOX',
  TREE_ROOT_VIEW: 'TREE_ROOT_VIEW',
  TREE_VIEW: 'TREE_VIEW',
  CONTENTNODE_DETAILS: 'CONTENTNODE_DETAILS',
  VIEW_CONTENTNODES: 'VIEW_CONTENTNODES',
  ADD_TOPICS: 'ADD_TOPICS',
  ADD_EXERCISE: 'ADD_EXERCISE',
  UPLOAD_FILES: 'UPLOAD_FILES',
};

// File constants
export const fileErrors = {
  NO_STORAGE: 'NO_STORAGE',
  WRONG_TYPE: 'WRONG_TYPE',
  TOO_LARGE: 'TOO_LARGE',
  UPLOAD_FAILED: 'UPLOAD_FAILED',
  URL_EXPIRED: 'URL_EXPIRED',
};

export const MAX_FILE_SIZE = 209715200;

export const ValidationErrors = {
  TITLE_REQUIRED: 'TITLE_REQUIRED',
  LICENCE_REQUIRED: 'LICENCE_REQUIRED',
  COPYRIGHT_HOLDER_REQUIRED: 'COPYRIGHT_HOLDER_REQUIRED',
  LICENCE_DESCRIPTION_REQUIRED: 'LICENCE_DESCRIPTION_REQUIRED',
  MASTERY_MODEL_REQUIRED: 'MASTERY_MODEL_REQUIRED',
  MASTERY_MODEL_INVALID: 'MASTERY_MODEL_INVALID',
  QUESTION_REQUIRED: 'QUESTION_REQUIRED',
  INVALID_NUMBER_OF_CORRECT_ANSWERS: 'INVALID_NUMBER_OF_CORRECT_ANSWERS',
  NO_VALID_PRIMARY_FILES: 'NO_VALID_PRIMARY_FILES',
  ...fileErrors,
};

// should correspond to backend types
export const AssessmentItemTypes = {
  SINGLE_SELECTION: 'single_selection',
  MULTIPLE_SELECTION: 'multiple_selection',
  TRUE_FALSE: 'true_false',
  INPUT_QUESTION: 'input_question',
};
