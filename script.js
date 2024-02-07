 require([
      "esri/WebScene",
      "esri/views/SceneView",
      "esri/Camera",
      "esri/widgets/Home",
      "dojo/domReady!"
    ], function(WebScene, SceneView, Camera, Home) {

    
      /*var map = new Map({
        basemap: "streets",
        ground: "world-elevation"
      });*/
      var scene = new WebScene({
        portalItem:{
         id:"8046207c1c214b5587230f5e5f8efc77" 
        }
      });
      
      var home_btn = new Camera({
       position: [
           -71.060217,
          42.382655,
          800// elevation in meters
        ],
        tilt:0,
        heading: 0
      })

     var camera = new Camera({
       position: [
           -71.062146,
          42.366198,
          700// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
      var camera2 = new Camera({
       position: [
           -71.0994065,
          42.3466803,
          700// elevation in meters
        ],
        tilt:0,
        heading: 0
      })
      
            var camera3 = new Camera({
       position: [
           -70.9670987,
          42.3209799,
          1000// elevation in meters
        ],
        tilt: 75,
        heading: -50
      })

      var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode:"global",
        camera: home_btn,
        environment: {
            lighting: {
              date: new Date(),
              directShadowsEnabled: true,
              // don't update the view time when user pans.
              // The clock widget drives the time
              cameraTrackingEnabled: false
            }
        },
    });
    
    var homeBtn = new Home({
        view: view
      });

      // Add the home button to the top left corner of the view
    view.ui.add(homeBtn, "top-left");
    
    [td_garden,fen_park,downtown].forEach(function(button) {
      button.style.display = 'flex';
      view.ui.add(button, 'top-right');
    });

    td_garden.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera
      });
    });
    
    fen_park.addEventListener('click', function() {
      // reuse the default camera position already established in the homeBtn
      view.goTo({
        target:camera2
      });
    });
    
   
   downtown.addEventListener('click', function() {
      // downtown Boston from Atlantic Ocean 
      view.goTo({
        target:camera3
      });
    });


    });
