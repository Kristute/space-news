<script lang="ts">
import { defineComponent } from 'vue';
import Wrapper from '../components/Wrapper.vue';


export default defineComponent ({
  name: 'App',
  components: {
    Wrapper,
  },
  fetch({redirect}) {
    redirect('/login')
  }
})
</script>
