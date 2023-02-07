<template>
  <q-page class="q-pa-lg">
    <section>
      <header>
        <slot name="pageTitle"></slot>
      </header>
    </section>
    <slot></slot>
  </q-page>
</template>

<script setup lang="ts"></script>
