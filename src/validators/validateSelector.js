import { ERR_TYPES, InternalError } from '../error';

export default selector => {
  if (!selector || typeof selector !== 'string') {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR);
  }

  if (selector.indexOf(' ') !== -1) {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR_NO_MULTI);
  }

  if (selector.indexOf('@') !== -1) {
    throw new InternalError(ERR_TYPES.INVALID_SELECTOR_NO_ALIAS);
  }
};
