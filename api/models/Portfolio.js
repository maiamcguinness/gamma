/**
* Portfolio.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string'
    },
    slug: {
      type: 'string'
    },
    role: {
      type: 'string'
    },
    client: {
      type: 'string'
    },
    technology: {
      type: 'string'
    },
    featured_image: {
      type: 'string'
    },
    filename: {
      type: 'string'
    },
    contents: {
      type: 'text'
    },
    excerpt: {
      type: 'text'
    }
  }
};

