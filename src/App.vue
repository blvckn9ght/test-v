<template>
  <div>
    <div class="">

<router-view v-slot="{Component}" > 
  <component :is="Component"/>
</router-view>
</div>
  </div>
</template>

<script>
export default {
  setup () {
    

    return {}
  }
}
</script>
