<template>
  <div class="ui-wrapper">
    <el-space wrap size="large">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>密码本名称</span>
            <el-button :icon="Setting" circle />
          </div>
        </template>
        <el-icon class="card-icon" :size="80" color="#67C23A">
          <Collection />
        </el-icon>
      </el-card>
    </el-space>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { Setting } from '@element-plus/icons-vue'
  export default {
    data() {
      return {
        Setting,
      }
    },
    computed: {
      ...mapGetters(['cat']),
    },
    methods: {
      
    },
    created() {
      this.$store.dispatch('getCat')
    },
  }
</script>

<style lang="scss" scoped>
.box-card {
  width: 300px;
}
</style>