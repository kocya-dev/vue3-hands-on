<script setup>
defineProps({
  id: {
    type: Number,
    default: null,
    required: false,
  },
  name: {
    type: String,
    default: "",
    required: false,
  },
  price: {
    type: Number,
    default: 0,
    required: false,
  },
  image: {
    type: String,
    default: "",
    required: false,
  },
});

/**
 * 価格を3桁ごとのカンマ付きで返す
 * @param {number} price 価格
 */
const pricePrefix = (price) => {
  return price.toLocaleString();
};
/**
 * 商品の在庫状況を変更する
 * @param {object} item 商品情報
 */
const stockItem = (item) => {
  item.soldOut = false;
};
const getDate = () => new Date().toDateString();

const emit = defineEmits(["sold-out"]);
</script>

<template>
  <div class="thumbnail">
    <img :src="image" alt="" />
  </div>
  <div class="description">
    <h2>{{ name }}</h2>
    <slot name="body" />
    <span>
      ¥<span class="price">{{ pricePrefix(price) }}</span>
    </span>
  </div>
  <button type="button" @click="() => emit('sold-out', id)">売り切れ</button>
</template>

<style>
.item > div.thumbnail > img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.item > div.description {
  text-align: left;
  margin-top: 20px;
}

.item > div.description > p {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
}

.item > div.description > span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.item > div.description > span > .price {
  font-size: 28px;
  font-weight: bold;
}
</style>
