<template>
  <div id="app">
    <p>vue 组件通信</p>
    <child1 v-bind="$attrs" :indexParamsA="indexParamsA" :indexParamsB="indexParamsB" @update="update" ref="child1"></child1>
  </div>
</template>

<script>
import child1 from './components/child1';
export default {
  name: 'App',
  provide: {
    indexParamByProvide: 'indexParamByProvideValue'
  },
  data () {
    return {
      indexParamsA: 1,
      indexParamsB: 2
    }
  },
  components: {
    child1
  },
  mounted () {
    console.log('通过ref 拿到 子组件实例', this.$refs.child1);
  },
  methods: {
    update () {
      console.log('激活 update 事件');
      console.log('index -- $parent', this.$children);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
