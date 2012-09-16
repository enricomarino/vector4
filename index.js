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

  /**
   * set
   * Set vector.
   * 
   * @param {Float32Array} self destination vector
   * @param {Float32Array} v source vector
   * @return {Float32Array} destination vector
   * @api public
   */
   
  vector4.set = function (self, v) {
    self[0] = v[0];
    self[1] = v[1];
    self[2] = v[2];
    self[3] = v[3];

    return self;
  };

  /**
   * zero
   * Set vector to zero.
   * 
   * @param {Float32Array} self destination vector
   * @return {Float32Array} destination vector
   * @api public
   */

  vector3.zero = function (self) {
    self[0] = 0.0;
    self[1] = 0.0;
    self[2] = 0.0;
    self[3] = 0.0;

    return self;
  };
  
}(this));