angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope, $cordovaVibration, $cordovaFlashlight, $cordovaNativeAudio) {
 $scope.Vibrar = function(){
    try{
      $cordovaVibration.vibrate(100000);
    }
    catch (error){
      console.log("La PC no vibra");
    }
  }

 $scope.PararVibrar = function (){
    try{
      $cordovaVibration.cancelVibration();
    }
    catch (error){
      console.log("La PC no vibra");
    }
  }

  $scope.EncenderLinterna = function(){
    try{
      $cordovaFlashlight.switchOn();
    }
    catch (error){
      console.log("La PC no tiene linterna");
    }
  }

 $scope.ApagarLinterna = function (){
    try{
      $cordovaFlashlight.switchOff();
    }
    catch (error){
      console.log("La PC no tiene linterna");
    }
  }

  $cordovaNativeAudio
    .preloadSimple('sonido1', 'sonido/FX-Impact198.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  $cordovaNativeAudio
    .preloadSimple('sonido2', 'sonido/FX-Impact219.mp3')
    .then(function (msg) {
      console.log(msg);
    }, function (error) {
      alert(error);
    });

  $scope.Sonido1 = function(){
    try{
      $cordovaNativeAudio.play('sonido1');
    }
    catch (error){
      alert(error);
      console.log("Sin musica");
    }
  }

   $scope.Sonido2 = function (){
      try{
        $cordovaNativeAudio.play('sonido2');
      }
      catch (error){
        alert(error);
        console.log("Sin música");
      }
    }
})

.controller('BotonesCtrl', function($scope, $cordovaMedia) {

  $scope.GuardarSonido = function(sonido){
    try{
        var src = "/sonido/FX-Impact219.mp3";
        $cordovaMedia.newMedia(src).play();
      }
    catch (error){
        console.log("Sin música");
    }
  }

})