define(['json!/api/components'], function (components) {
  // This file effectively provides a wrapper around the JSON feed of components, which means that we can trigger a
  // livereload when making changes in dev, while being able to replace the dependency on this file with the appropriate
  // pre-compiled file for minification purposes.
  'use strict';
  return components;
});