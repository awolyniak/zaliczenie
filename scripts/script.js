require (["esri/Map", "esri/views/MapView", "esri/WebMap","esri/geometry/support/webMercatorUtils","esri/widgets/BasemapToggle","esri/widgets/BasemapGallery", "esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer"],
   function(Map, MapView, WebMap, BasemapToggle, BasemapGallery, GraphicsLayer, Sketch, FeatureLayer){
   let map1 = new Map({basemap:"topo"});
   let map2 = new Map({basemap:"satellite"});
   let map3 = new Map({basemap: "osm" });
   let map4 = new WebMap({
   portalItem:{
      id:"cbfebad9bde2471997ba3bde42331513"
   }});


      
   let mapContainer = new MapView({
   container: "map",
   map: map4,
   zoom: 10,
   center: [-110.5833, 44.4167]
 })

   mapview.on("click", function(evt){
   let cords = webMercatorUtils.webMercatorToGeographic(evt.mapPoint); 
      cords.x = 44.598930500655484
      cords.y = -110.49874472618234

      x.toFixed(5)
      y.toFixed(5)
});
 
      //var basemapToggle = new BasemapToggle({
      //view: view,
      //secondMap: "satellite"
      //});
 
      //view.ui.add(basemapToggle,"bottom-right");
 
      //var basemapGallery = new BasemapGallery({
       //view: mapContainer,
       //source: {
      // portal: {
      // url: "http://www.arcgis.com",
     //  useVectorBasemaps: true, // Load vector tile basemap group
      // },
  // } 
 //});

     // mapContainer.ui.add(basemapGallery, "top-right");
 
     // var graphicsLayer = new GraphicsLayer();
      
 
     // var sketch = new Sketch({
     //   view: mapContainer,
     //   layer: map1
     // });

   
      //mapContainer.ui.add(sketch, "top-left");  


      //var parksLayer = new FeatureLayer({
      //   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
      // });
 
      // map1.add(parksLayer);


   function zmienMape(idElem, mapa) {
      document.getElementById(idElem).addEventListener("click", function (){
        mapContainer = new MapView({
        container: "map",
        map: mapa,
        zoom: 10,
        center: [-110.5833, 44.4167]
    })
   })
};
   zmienMape("mapTopo",map1);
   zmienMape("mapSat",map2);
   zmienMape("mapOSM",map3);
   zmienMape("mapAGOL",map4)
});
