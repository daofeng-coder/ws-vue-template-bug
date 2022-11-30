import {defineStore} from 'pinia';
import {computed, ref} from 'vue';


export interface CartGoodsProperty {
    id: string
    pName: string
    /** 规格 */
    psize: string
    /** 原价 */
    pprice: string
    /** 优惠价 */
    pOrderPrice: string
    iNum: number
    cImage: string
    checked: boolean
}

 const useShopCartStore = defineStore('shopCart', () => {


    const list = ref<CartGoodsProperty[]>([]);

    /** 加载购物策车数据 */
    const loadCart = async () => {


    };

    /** 编辑购物车内商品数量(增、删、改) */
    const editGoodsCount = async (pid: string | string[], count: number) => {

    };

    /** 编辑购物车内商品选中状态  */
    const editGoodsSelected = async (pid: string | string[], selected: boolean) => {

    };

    /** 添加商品到购物车 */
    const addGoods = async (pid: string, count = 1) => {

    };


    const selectedList = computed(() => {
        return list.value.filter(i => i.checked);
    });


    return {
        addGoods,
        editGoodsSelected,
        editGoodsCount,
        loadCart,
        selectedList,
        list,
    };
});

export default useShopCartStore;
