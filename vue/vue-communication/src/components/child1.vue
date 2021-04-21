<template>
    <div>
        <p>我是子组件 child1</p>
        <p>父组件 $attr 传过来的参数：{{$attrs}}</p>
        <button @click="update">子组件传递 update 事件 给祖先组件</button>
        <child2 v-bind="$attrs" :chidl1Params="chidl1Params" v-on="$listeners"></child2>
    </div>
</template>

<script>
import child2 from './child2';
export default {
    data () {
        return {
            chidl1Params: 3
        }        
    },
    components: {
        child2
    },
    mounted () {
        console.log('child1 -- $parent', this.$parent);
        console.log('child1 -- $listeners', this.$listeners);
    },
    methods: {
        update () {
            this.$emit('update');
        }
    }
}
</script>