var check = require('check-types');

var DEFAULT_DETAILS_BOOL = true;

// validate inputs, convert types and apply defaults
function sanitize( raw, clean ){

  // error & warning messages
  var messages = { errors: [], warnings: [] };

  if( !check.undefined( raw.details ) ){
    clean.details = isTruthy( raw.details );
  } else {
    clean.details = DEFAULT_DETAILS_BOOL;
  }

  return messages;
}

// be lenient with 'truthy' values
function isTruthy(val) {
  if( check.string( val ) ){
    return ['true', '1'].includes( val );
  }

  return val === 1 || val === true;
}

// export function
module.exports = sanitize;
