<template>
  <div>
    <h1>About Page</h1>
    <p>This is the about page</p>
    <Button @click="goToFormPage">Go to Form Page</Button>
    <map-view></map-view>
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
    }
  }
}
</script>