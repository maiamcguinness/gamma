/**
 * File: app/app.js
 * Description: Defining my Angular module && hooking in all the pieces
 * Dependencies: ui-router, ngResource
 *
 * @package gamma
 */

/* === Module Definition === */
angular
    .module('gamma', ['ui.router', 'ngResource'])   // initial module decl.
    .config(Config);                                // config for routing, etc.

/* === Initial Routing === */
function Config ($stateProvider, $urlRouterProvider, $locationProvider) {
    // if all else fails
    $urlRouterProvider.otherwise('/');

    // let's get it started in here
    $stateProvider

        // Home state
        .state('home', {
            url: '/',
            templateUrl: 'views/home/home.html',
            controller: 'MainCtrl',
            controllerAs: 'main',
            resolve: {
                getEntries: function($http) {
                    return $http({method: 'GET', url: '/v1/entries'});
                }
            }
        })
        
        // Blog state
        .state('blog', {
            url: '/blog/:slug',
            templateUrl: 'views/blog/blog-main.html',
            controller: 'BlogCtrl',
            controllerAs: 'blog',
            resolve: {
                getPartial: function($stateParams) {
                    return 'views/blog/entries/' + $stateParams.slug + '.html';
                }
            }
        })

        // About state
        .state('about', {
            url: '/about',
            templateUrl: 'views/about/about.html',
            controller: 'AboutCtrl',
            controllerAs: 'about'
        })

        // Contact state
        .state('contact', {
            url: '/contact',
            templateUrl: 'views/contact/contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'contact'
        })

        // Contact state
        .state('vimrc', {
            url: '/vimrc',
            templateUrl: 'views/vimrc/vimrc.html',
            controller: 'VimrcCtrl',
            controllerAs: 'vimrc'
        });

    // remove hashbang from url
    $locationProvider.html5Mode(true).hashPrefix('!');
}
