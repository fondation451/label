import { dependencyManager } from '@label/core';
import { sderApi } from './sderApi';
import { sderLocalApi } from './sderLocalApi';

export { api as sderApi };

const api = dependencyManager.inject({
  forLocal: sderLocalApi,
  forProd: sderApi,
});
