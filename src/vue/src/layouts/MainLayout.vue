<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Clean Shop Archi
        </q-toolbar-title>

        <q-btn dense flat round icon="person">
          <q-menu auto-close dense>
            <q-list style="min-width: 100px">
              <q-item clickable>
                <q-item-section>Profile</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Checkout</q-item-section>
              </q-item>
              <q-separator />
              <q-item clickable>
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          dense
          flat
          round
          :label="count"
          icon="shopping_bag"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <MiniCart />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import MiniCart from 'src/components/MiniCart/MiniCart.vue';
import { useMiniCartStore } from 'stores/miniCart-store';
import { computed } from 'vue';
const leftDrawerOpen = ref(true);
const rightDrawerOpen = ref(true);

/* const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
 */
const toggleRightDrawer = () => {
  rightDrawerOpen.value = !rightDrawerOpen.value;
};

const storeMiniCart = useMiniCartStore();

const count = computed(() => storeMiniCart.count);

onMounted(() => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
  rightDrawerOpen.value = !rightDrawerOpen.value;
});
</script>
