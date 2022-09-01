<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  fetch({ redirect }) {
    redirect('/login')
  },
})
</script>
