
var myApp = angular.module('myApp',[]);
 
function MyCtrl($scope, filterFilter) {
    $scope.useMakes = [];
    $scope.useMakes1 = [];
     $scope.useMakes2 = [];
    $scope.useMakes3 = [];
     
    
    $scope.filterMakes = function () {
        return function (p) {
            for (var i in $scope.useMakes) {
                if (p.Species == $scope.group[i] && $scope.useMakes[i]) {
                    return true;
                }
            }
        };
    };
    $scope.filterMakes1 = function () {
        return function (p1) {
            for (var j in $scope.useMakes1) {
                if (p1.ranges == $scope.group1[j] && $scope.useMakes1[j]) {
                    return true;
                }
            }
        };
    };
    $scope.filterMakes2 = function () {
        return function (p) {
            for (var i in $scope.useMakes2) {
                if (p.show1 == $scope.group2[i] && $scope.useMakes2[i]) {
                    return true;
                }
            }
        };
    };
    $scope.filterMakes3 = function () {
        return function (p) {
            for (var i in $scope.useMakes3) {
                if (p.show2 == $scope.group3[i] && $scope.useMakes3[i]) {
                    return true;
                }
            }
        };
    };
    

    
    $scope.names = [
        {name:'Princess Leia',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',show2:'Episode IV'},
        {name:'Kylo Ren',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode V'},
       {name:'Obi-Wan Kenobi',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode I',show2:'Episode IV'},
        {name:'Luke Skywalker',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode V'},
        {name:'Han Solo',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode V'},
        {name:'Padme Amidala',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',show2:'Episode V'},
        {name:'Rey',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode V'},

        {name:'Count Dooku',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode II',show2:'Episode IV'},
      {name:'Lando Calrissian',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode IV'},
       {name:'Qui-Gon Jinn',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',show2:'Episode IV'},
        {name:'Mace Windu',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode I',show2:'Episode V'},
        {name:'Jango Fett',ranges:'Not between 30 BBY to 5 ABY',Species:'Human',show1:'Episode II',show2:'Episode IV'},
        {name:'Jyn Erso',ranges:'30 BBY to 5 ABY',Species:'Human',show1:'Episode III',show2:'Episode IV'},

        {name:'Jar Jar Binks',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode I',show2:'Episode IV'},
       {name:'Admiral Ackbar',ranges:'Not between 30 BBY to 5 ABY',Species:'Other',show1:'Episode III',show2:'Episode V'},
       {name:'Kit Fisto',ranges:'30 BBY to 5 ABY',Species:'Other',show1:'Episode III',show2:'Episode IV'}
        ];
}
 
 
var uniqueItems = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems(collection, key);
        };
    });

var uniqueItems1 = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy1',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems1(collection, key);
        };
    });


var uniqueItems2 = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy2',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems2(collection, key);
        };
    });


var uniqueItems3 = function (data, key) {
    var result = new Array();
    for (var i = 0; i < data.length; i++) {
        var value = data[i][key];
 
        if (result.indexOf(value) == -1) {
            result.push(value);
        }
    
    }
    return result;
};
 
myApp.filter('groupBy3',
            function () {
                return function (collection, key) {
                    if (collection === null) return;
                    return uniqueItems3(collection, key);
        };
    });