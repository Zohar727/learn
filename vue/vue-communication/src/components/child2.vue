<template>
    <div>
        <p>我是孙子组件 child2</p>
        <p>父组件+祖先组件传递过来的参数：{{$attrs}}</p>
        <p>祖先组件通过 provide 传递来的参数：{{indexParamByProvide}}</p>
        <p>祖先组件通过 provide 传递来的参数 - 设置默认值情况：{{indexParamByProvideRename}}</p>
        <button @click="update">孙子组件传递 update 事件 给祖先组件</button>
    </div>
</template>

<script>
export default {
    // inject: ['indexParamByProvide'],
    inject: {
        indexParamByProvide: {
            default: () => 'ddd'
        },
        indexParamByProvideRename: {
            from: 'indexParamByProvide2',
            default: () => 'default value'
        }
    },
    mounted () {
        console.log('child2 -- $parent', this.$parent);
        console.log('child2 -- $listeners', this.$listeners);
    },
    methods: {
        update () {
            this.$emit('update');
        }
    }
}
</script>