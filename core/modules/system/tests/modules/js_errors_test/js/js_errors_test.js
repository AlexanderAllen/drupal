/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (_ref) {
  let {
    throwError,
    behaviors
  } = _ref;
  behaviors.testErrors = {
    attach: () => {
      throwError(new Error('A manually thrown error.'));
    }
  };
})(Drupal);