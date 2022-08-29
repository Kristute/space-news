<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '../components/MainLayout.vue';


export default defineComponent ({
  name: 'App',
  components: {
    MainLayout,
  },
  fetch({redirect}) {
    redirect('/login')
  }
})
</script>
