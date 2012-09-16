/* !
 * vector4
 * JavaScript math library for 4d vector
 * Copyright (c) 2012 Enrico Marino (http://onirame.no.de)
 * MIT License
 */

 !(function (exports) {

  /**
   * Library namespace.
   */

  var vector4 = exports.vector4 = {};

  /**
   * Library version.
   */

  vector4.version = '0.0.0';

  /**
   * create
   * Create a 4d vector.
   * 
   * @return {Float32Array} 3d vector
   * @api public
   */

  vector4.create = function () {
    return new Float32Array([0.0, 0.0, 0.0, 0.0]);
  };

}(this));