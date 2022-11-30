<script
    lang="ts"
    setup
>


import useShopCartStore from "./store/module/shop-cart";
import {curryDebounce} from "./utils/function-tools";

const shopCartStore = useShopCartStore();

const safe = curryDebounce(200, true);
const onEdit = (key: string, value: number) => {
};

const newEdit = safe(onEdit);
</script>

<script lang="ts">
export default {name: 'Cart'};
</script>

<template>


  <div :class="s['cart-body']">
    <!-- cannot read documentation -->
    <template v-if="shopCartStore.list.length"></template>

    <!-- cannot read documentation -->
    <template v-if="shopCartStore.selectedList"></template>

    <!-- without type -->
    <div @click="shopCartStore.editGoodsSelected"></div>

    <!-- This is normal -->
    <div @click="onEdit"></div>

    <!-- But there's no type here, newEdit is a wrapped function -->
    <div @click="newEdit"></div>
  </div>


</template>

<style
    lang="scss"
    module="s"
>

</style>
