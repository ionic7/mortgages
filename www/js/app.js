var app=angular.module('starter', ['ionic'])



app.config(function($stateProvider, $urlRouterProvider) {
   
$stateProvider
  .state('1', {
    name:'1',
  url:'/',
       
  templateUrl:'1.html',
  controller: 'SignInCtrl'
      })

  .state('2', {
    name:'2',
  url:'/',
       
        templateUrl:'2.html',
        controller: 'SignInCtrl'
      })

  .state('3', {
    name:'3',
  url:'/',
       
        templateUrl:'3.html',
        controller: 'SignInCtrl'
      })

 .state('4', {
    name:'4',
  url:'/',
       
        templateUrl:'4.html',
        controller: 'SignInCtrl'

  })

 .state('5', {
    name:'5',
  url:'/',
       
        templateUrl:'5.html',
        controller: 'SignInCtrl'

  })
 .state('6', {
    name:'6',
  url:'/',
       
        templateUrl:'6.html',
        controller: 'navCtrl'

  })



 /*
  .state('6a', {
    name:'6a',
  url:'/',
       
        templateUrl:'6a.html',
        controller: 'popupCtrl'

  })

*/

 .state('7', {
    name:'7',
  url:'/',
       
        templateUrl:'7.html',
        controller: 'SignInCtrl'

  })

 .state('7a', {
    name:'7a',
  url:'/',
       
        templateUrl:'7a.html',
        controller: 'SignInCtrl'

  })


 

.state('7b', {
    name:'7b',
  url:'/',
       
        templateUrl:'7b.html',
        controller: 'SignInCtrl'

  })

.state('7c', {
    name:'7c',
  url:'/',
       
        templateUrl:'7c.html',
        controller: 'SignInCtrl'

  })


.state('8', {
    name:'8',
  url:'/',
       
        templateUrl:'8.html',
        controller: 'SignInCtrl'

  })

.state('9', {
    name:'9',
  url:'/',
       
        templateUrl:'9.html',
        controller: 'SignInCtrl'

  })

.state('10', {
    name:'10',
  url:'/',
       
        templateUrl:'10.html',
        controller: 'SignInCtrl'

  })


.state('11', {
    name:'11',
  url:'/',
       
        templateUrl:'11.html',
        controller: 'SignInCtrl'

  })



.state('12', {
    name:'12',
  url:'/',
       
        templateUrl:'12.html',
        controller: 'SignInCtrl'

  })



.state('back13', {
    name:'back12',
  url:'/',
       
        templateUrl:'back13.html',
        controller: 'bgCtrl'

  })

;



 $urlRouterProvider.otherwise('/');
});







app.controller('SignInCtrl', function($scope, $state,$ionicSideMenuDelegate,$ionicPopup,$http) {



  var firstInc =125000;
  var secondInc=10000;
  var thirdInc=35;
var fourInc=0;
var fiveInc=55000;
var sixInc=100;

$scope.create = function() {
    
   $state.go('2');
 
  };
$scope.next = function() {
    
   $state.go('3');
 
  };

  $scope.nextPage = function() {
    
   $state.go('4');
 
  };

  $scope.fifthPage = function() {
    
   $state.go('5');
 
  };



 $scope.toggleLeft = function() {
   $ionicSideMenuDelegate.toggleLeft();
 };


  $scope.$root.enableRight = true;



 $scope.console1={}; // To store the value of the first input box in Script 5 and use it in script 7
  $scope.console3={};  // To store the value of the  third input box in Script 5 and use it in script 7

 $scope.console1.value1="£120000";
 $scope.console3.value2="35";
var self = this;
  $scope.inc1 = function(data1)      // button to increment and decrement the value of first input box
  {
    firstInc= data1+firstInc;
    $scope.console1.value1 ="£"+firstInc;
        $scope.counter=1;

     

        };


function result()
{


   result1=self.console1;



}
   $scope.inc2 = function(data2)      // button to increment and decrement the value of second input box
    {

    secondInc= data2+secondInc;
    $scope.console2="£"+secondInc;


 };


  $scope.inc3 = function(data3)      // button to increment and decrement the value of third input box
   {

    thirdInc= data3+thirdInc;
    $scope.console3.value1=thirdInc+" Years";
    $scope.console3.value2=thirdInc;
   
 
  };




   $scope.inc4 = function(data3)      // button to increment and decrement the value of third input box
   {

    fourInc= data3+fourInc;
    $scope.console4=fourInc;
  
   
 
  };


   $scope.inc5 = function(data3)      // button to increment and decrement the value of third input box
   {

    fiveInc= data3+fiveInc;
    $scope.console5="£"+fiveInc;
  
   
 
  };


   $scope.inc6 = function(data3)      // button to increment and decrement the value of third input box
   {

    sixInc= data3+sixInc;
    $scope.console6="£"+sixInc;

   
 
  };

/*$scope.$watch(function () {
    return self.console1;
   }, function() {
    result()
    ;
   });
*/


  
 //$scope.result1 =$scope.console1.value1;     // NOT WORKING..Objective is to store the final result of first input box
  //$scope.result2 =$scope.console3.value2;    //NOT WORKING..Objective is to store the final result of third input box
 $scope.sixthPage = function() {
    
   $state.go('6');

    };

  
 $scope.eighthPage = function() {
    
   $state.go('8');
 
  }

$scope.ninethPage = function() {
    
   $state.go('9');
 
  }

  $scope.tenthPage = function() {
    
   $state.go('10');
 
  }


  $scope.eleventhPage = function() {
    
   $state.go('11');
 
  }


  ;




    $scope.sidePage = function() {
    
   $state.go('7a');
 
  };

  $scope.calcPage = function() {
    
   $state.go('7b');
 
  };
 
  $scope.journeyPage = function() {
    
   $state.go('7c');
 
  };
  $scope.previous = function() {
    
   $state.go('7');
 
  }


   $scope.daft = function() {
    
   $state.go('12');
 
  }

   $scope.bg = function() {
    
   $state.go('12');
 
  }


  

// Triggered on a button click, or some other target


$scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };



//pop up for the top bar


$scope.pop1 = function() {
  $scope.data = {}

 // alert("hiiii");
  // An elaborate, custom popup
  $ionicPopup.show({
    
   
    scope: $scope,
    buttons: [
     
      {
        text: '<b>Live chat</b>',
        type: 'button-clear',
      
      },

      {

        text: '<b>Call me back</b>',
        type: 'button-clear',
       
      },
        {
        text: '<b>Meet an advisor</b>',
        type: 'button-clear',
       

      }

     
    ]

  });
}







$scope.listpop = function(){
$scope.data = {}

  
  // An elaborate, custom popup
  $ionicPopup.show({
    title: 'Add a photo from',
   
    scope: $scope,
    buttons: [
     
      {
        text: '<p>Search Listings<p>',
        type: 'button icon ion-search',
        onTap: function(e) {
          if (!$scope) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $state.go('12');
 
          }
        },


        },


         {
        text: '<p>Take a photo<p>',
        type: 'button icon ion-camera',
        },

         {
        text: '<p>Choose existing<p>',
        type: 'button icon ion-ios-grid-view',
        },

    ]
  });

 


}

  } 
);














app.controller('MapCtrl', function($scope,$state) {

   $scope.fifthPage = function() {
    
   $state.go('5');
 
  };
   google.maps.event.addDomListener(window, 'load', function(){

   var myLatlng=  new google.maps.LatLng(37.30000, -120.4833);

    var mapOptions = {
         center:myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
};

var map= new google.maps.Map(document.getElementById("map"),mapOptions);

   $scope.map = map;


});
 });
 









app.controller('navCtrl', function($scope, $state, $ionicPopup) {
    setTimeout(function(){
    $state.go('7');
    $scope.showPopup();
    //do what you need here
}, 5000);







$scope.showPopup = function() {
  $scope.data = {}

  
  // An elaborate, custom popup
  $ionicPopup.show({
    template: 'With your savings you can get a mortgage of £230,000<br/><br/> You can recalculate yout mortgage at any times',
   
    scope: $scope,
    buttons: [
     
      {
        text: '<b>GOT IT</b>',
        type: 'button-clear',
        onTap: function(e) {
        
        
            return $scope;
       
        }
 }     
    ]
  });
}
}
);


app.run(function($ionicPlatform){
$ionicPlatform.registerBackButtonAction(function (event) {
                    event.preventDefault();
            }, 100);});





app.controller('bgCtrl', function($scope, $state, $ionicPopup){

}
);


  




 





  

  
 

  

