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

    // 親コンポーネントからemitされた位置情報を受け取り、マーカーを追加
    this.$on('addMarker', (position) => {
      if (this.mapObject) {
        L.marker(position).addTo(this.mapObject);
      } else {
        this.$once('mounted', () => {
          L.marker(position).addTo(this.mapObject);
        });
      }
    });

    this.mapObject = map;
  },
  data() {
    return {
      mapObject: null,
    };
  },
};
  </script>
  
  <style>
    #map {
        width: 100%;
        height: 600px;
    }
  </style>
  