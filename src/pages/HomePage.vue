<template>
  <div class="body-bg">
    <SalePage/>
    <ToysPage/>
  </div>
</template>
<script>
import SalePage from '../components/SalePage.vue'
import ToysPage from '../components/ToysPage.vue'
export default {
components:{
  SalePage,
  ToysPage
},
data(){}
}
</script>