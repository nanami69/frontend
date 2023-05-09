<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import L from "leaflet";
export default {
  mounted() {
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      const map = L.map("map").setView([36.2048, 138.2529], 6);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(
        map
      );
      this.mapObject = map;
      this.$emit("mapInitialized");
    },
    addMarker(cinemaInfo) {
      var [lat, lng, name, comment, photo] = cinemaInfo;
      var position = [lat, lng];
      var marker = L.marker(position).addTo(this.mapObject); // markerオブジェクトを作成
      marker
        .bindPopup(
          `<h3>${name}</h3><p>${comment}</p><img src="data:image/jpeg;base64,${photo}" alt="cinema photo" width="200px">`
        )
        .openPopup();
    },
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
