<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <Button @click="goToFormPage">Go to Form Page</Button>
    <map-view ref="map"></map-view>
  </div>
</template>

<script>
import leafletPlugin from '~/plugins/leaflet.client';
import MapView from '~/components/MapView';
import Button from '~/components/Button'

export default {
  plugins: [leafletPlugin],
  components: {
    MapView,
    Button
  },
  methods: {
    goToFormPage() {
      this.$router.push('/form')
    },
    addPin(lat, lng) {
      const position = [lat, lng];
      // MapViewコンポーネントに位置情報をemitする
      this.$refs.map.$emit('addMarker', position);
    }
  },
  mounted() {
    const lat = this.$route.params.lat;
    const lng = this.$route.params.lng;
    if (lat && lng) {
      this.addPin(lat, lng);
    }
  }
}
</script>