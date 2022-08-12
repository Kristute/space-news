<script lang="ts">
import { defineComponent } from 'vue';
import WrapperComponent from '../components/WrapperComponent.vue';


export default defineComponent ({
  name: 'App',
  components: {
    WrapperComponent,
  },
  fetch({redirect}) {
    redirect('/login')
  }
})
</script>
