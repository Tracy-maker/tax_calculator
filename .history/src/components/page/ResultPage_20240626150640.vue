<template>
  <div class="results">
    <h1>Calculation Results</h1>
    <p>Your tax amount is: {{ taxAmount }}</p>
    <p>Your income rank among all users is: {{ incomeRank }}%</p>
    <button @click="recalculate">Recalculate</button>
    <button @click="shareResults">Share Now</button>
    <ShareModal v-if="showShareModal" @close="showShareModal = false" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ShareModal from './ShareModal.vue'

export default defineComponent({
  name: 'ResultPage',
  components: { ShareModal },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const taxAmount = ref<number>(parseFloat(route.query.tax as string))
    const incomeRank = ref<number>(parseFloat(route.query.rank as string))
    const showShareModal = ref<boolean>(false)

    const recalculate = () => {
      router.push('/calculator')
    }

    const shareResults = () => {
      showShareModal.value = true
    }

    return {
      taxAmount,
      incomeRank,
      showShareModal,
      recalculate,
      shareResults
    }
  }
})
</script>
