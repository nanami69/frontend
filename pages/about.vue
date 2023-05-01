<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <Button @click="goToFormPage">Go to Form Page</Button>
    <map-view @mapInitialized="onMapInitialized" ref="map"></map-view>
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
    addPin(lat, lng, name, comment, photo) {
      const cinemaInfo = [lat, lng, name, comment,photo];
      if (this.isMapInitialized) {
        this.$refs.map.addMarker(cinemaInfo);
      } else {
        this.pendingMarker = cinemaInfo;
      }
    },
    onMapInitialized() {
      this.isMapInitialized = true;
      if (this.pendingMarker) {
        this.$refs.map.addMarker(this.pendingMarker);
        this.pendingMarker = null;
      }
    }
  },
  data() {
    return {
      isMapInitialized: false,
      pendingMarker: null
    };
  },
  mounted() {
    const lat = this.$route.params.lat;
    const lng = this.$route.params.lng;
    const name = this.$route.params.name;
    const comment = this.$route.params.comment;
    const photo = this.$route.params.photo;

    if (lat && lng && name ) {
      this.addPin(lat, lng, name, comment, photo);
    }
  }
}
</script>
