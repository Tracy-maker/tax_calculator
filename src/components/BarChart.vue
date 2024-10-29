<template>
  <div class="chart-container">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script>
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// Register necessary Chart.js components
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend)

export default {
  props: {
    taxAmount: {
      type: Number,
      required: true
    },
    incomeAfterTax: {
      type: Number,
      required: true
    }
  },
  mounted() {
    this.createChart()
  },
  methods: {
    createChart() {
      const ctx = this.$refs.chartCanvas?.getContext('2d')
      if (!ctx) {
        console.error('Failed to acquire chart context')
        return
      }

      new Chart(ctx, {
        type: 'bar', // Ensure 'bar' is recognized as chart type
        data: {
          labels: ['Tax Amount', 'After Tax Income'],
          datasets: [
            {
              label: 'Income Breakdown',
              backgroundColor: ['#6366F1', '#34D399'],
              data: [this.taxAmount, this.incomeAfterTax]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      })
    }
  }
}
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 400px;
}
</style>
