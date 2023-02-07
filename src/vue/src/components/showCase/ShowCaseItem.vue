<template>
  <q-item
    class="col-xs-12 col-sm-6 col-md-4 col-lg-3 q-item-no-hover"
    :data-category="item.category"
  >
    <q-item-section @click.d="to(item.id)">
      <q-card class="my-card" flat>
        <q-card-section>
          <q-img
            :src="item.image"
            class="img-custom"
            style="height: 300px"
            fit="contain"
          />
        </q-card-section>
        <q-card-section>
          <div class="items-center">
            <div class="col text-h6 ellipsis">{{ item.title }}</div>
            <div class="col-auto text-h6 text-primary row no-wrap items-center">
              R$ - {{ item.price }}
            </div>
          </div>

          <div class="text-subtitle1">
            {{ item.category }}
          </div>
          <div class="text-caption text-grey ellipsis-3-lines">
            {{ item.description }}
          </div>
          <!--           <q-rating
            :model-value="item.rating.rate"
            :max="5"
            size="32px"
            class="q-py-md"
          /> -->
          <q-btn
            flat
            color="primary"
            class="full-width"
            :data-cy="item.title"
            @click.stop="addItem(item)"
          >
            add to card
          </q-btn>
        </q-card-section>
      </q-card>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { product } from '../models';
import { useMiniCartStore } from 'stores/miniCart-store';
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const storeMiniCart = useMiniCartStore();

const { addItem } = storeMiniCart;

const router = useRouter();

interface Props {
  item: product;
}

defineProps<Props>();

function to(id: number) {
  router.push({ name: 'product', params: { id: id } });
}
</script>

<style lang="scss" scoped>
.my-card {
  width: 100%;
  .img-custom {
    max-height: 300px;
  }
}
</style>
