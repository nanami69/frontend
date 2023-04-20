<template>
    <div>
      <div id="map"></div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  
  export default {
    mounted() {
      const map = L.map('map').setView([35.681167, 139.767052], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
    }
  }
  </script>
  
  <style>
  #map {
    height: 500px;
  }
  </style>
  