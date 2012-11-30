/* !
 * vector4
 * JavaScript 4d vector library
 * Copyright (c) 2012 Enrico Marino
 * MIT License
 */

/**
 * Library namespace.
 */

var vector4 = exports;

/**
 * Library version.
 */

vector4.version = '0.1.1';

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

vector4.zero = function (self) {
  self[0] = 0.0;
  self[1] = 0.0;
  self[2] = 0.0;
  self[3] = 0.0;

  return self;
};

/**
 * sum
 * Set vector to the sum of `a` and `b`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} a vector
 * @param {Float32Array} b vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.sum = function (self, a, b) {
  self[0] = a[0] + b[0];
  self[1] = a[1] + b[1];
  self[2] = a[2] + b[2];
  self[3] = a[3] + b[3];

  return self;
};

/**
 * diff
 * Set vector to the difference of `a` and `b`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} a vector
 * @param {Float32Array} b vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.diff = function (self, a, b) {
  self[0] = a[0] - b[0];
  self[1] = a[1] - b[1];
  self[2] = a[2] - b[2];
  self[3] = a[3] - b[3];

  return self;
};

/**
 * add
 * Add vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.add = function (self, v) {
  self[0] += v[0];
  self[1] += v[1];
  self[2] += v[2];
  self[3] += v[3];

  return self;
};

/**
 * sub
 * Sub vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.sub = function (self, v) {
  self[0] -= v[0];
  self[1] -= v[1];
  self[2] -= v[2];
  self[3] -= v[3];

  return self;
};

/**
 * opposite
 * Set vector to the opposite of `v`.
 * 
 * @param {Float32Array} self destination vector
 * @param {Float32Array} v vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.opposite = function (self, v) {
  self[0] = -v[0];
  self[1] = -v[1];
  self[2] = -v[2];
  self[3] = -v[3];

  return self;
};

/**
 * neg
 * Negate vector.
 * 
 * @param {Float32Array} self destination vector
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.neg = function (self) {
  self[0] = -self[0];
  self[1] = -self[1];
  self[2] = -self[2];
  self[3] = -self[3];

  return self;
};

/**
 * scale
 * Scale vector.
 * 
 * @param {Float32Array} self destination vector
 * @param {Number} k scaling value
 * @return {Float32Array} destination vector
 * @api public
 */

vector4.scale = function (self, k) {
  self[0] *= k;
  self[1] *= k;
  self[2] *= k;
  self[3] *= k;

  return self;
};

/**
 * length
 * Get vector length.
 * 
 * @param {Float32Array} self vector
 * @return {Number} vector length
 * @api public
 */

vector4.length = function (self) {
  var x = self[0];
  var y = self[1];
  var z = self[2];
  var w = self[3];

  return sqrt(x*x + y*y + z*z + w*w);
};