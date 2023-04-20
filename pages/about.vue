<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <map-view></map-view>
  </div>
</template>

<script>
import leafletPlugin from '~/plugins/leaflet.client';
import MapView from '~/components/MapView';

export default {

  plugins: [leafletPlugin],
  components: {
    MapView
  },
}
</script>