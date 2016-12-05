// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.item', {
    url: '/item',
    views: {
      'menuContent': {
        templateUrl: 'app/Item/itemView.html',
	  	controller: 'ItemCtrl'
      }
    }
  })

  .state('app.list', {
    url: '/list',
    views: {
      'menuContent': {
        templateUrl: 'app/List/listView.html',
	  	controller: 'ListCtrl'
      }
    }
  })

  .state('app.tabbed', {
      url: '/tabbed',
	  abstract: true,
      views: {
        'menuContent': {
          templateUrl: 'app/TabbedItem/tabbedItemView.html',
          controller: 'TabbedItemCtrl'
        }
      }
  })

  .state('app.tabbed.item', {
    url: '/item',
    views: {
      'tab-item': {
        templateUrl: 'app/TabChildItem/tabChildItemView.html',
        controller: 'TabChildItemCtrl'
      }
    }
  })

  .state('app.tabbed.list', {
    url: '/list',
    views: {
      'tab-list': {
        templateUrl: 'app/TabChildList/tabChildListView.html',
        controller: 'TabChildListCtrl'
      }
    }
  })

  .state('app.child', {
	  url: '/child',
	  views: {
		  'menuContent': {
			  templateUrl: 'app/Child/childView.html',
			  controller: 'ChildCtrl'
		  }
	  }
  })

//  .state('app.tabbed.tabs', {
//    url: '/tab3',
//    views: {
//      'tab-tabs': {
//        templateUrl: 'templates/tab3.html',
//        controller: 'TabThreeCtrl'
//      }
//    }
//  })
		 
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
	  	controller: 'SearchCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html',
		  controller: 'BrowseCtrl'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/item');
});
