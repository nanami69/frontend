<template>
    <div>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  
  import L from 'leaflet';
  
  export default {
    mounted() {
      const map = L.map('map').setView([36.2048, 138.2529], 6);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
  }
  </script>
  
  <style>
    #map {
        width: 100%;
        height: 600px;
    }
  </style>
  