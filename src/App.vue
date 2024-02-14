<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonsBar from "./components/ButtonsBar.vue";
import ButtonsBox from "./components/ButtonsBox.vue";

import { ref, onMounted, onUnmounted } from "vue";

const windowSize = ref(window.innerWidth);
const breakPoint = ref(1024);

onMounted(() => {
    window.addEventListener("resize", () => {
        windowSize.value = window.innerWidth;
    });
});
onUnmounted(() => {
    window.removeEventListener("resize", () => {
        windowSize.value = window.innerWidth;
    });
});
</script>

<template>
    <div
        class="min-h-screen gradient bg-cover bg-bottom text-zinc-300 select-none xl:flex xl:flex-col xl:justify-center"
    >
        <header>
            <h1 class="py-2 md:pt-8 text-center text-4xl">
                Death Saving Throw
            </h1>
        </header>
        <main class="mt-1 md:mt-5 pb-5">
            <div class="md:mx-3 lg:flex lg:justify-around lg:gap-2">
                <StatusTable />
                <ButtonsBar v-if="windowSize < breakPoint" />
                <ButtonsBox v-if="windowSize >= breakPoint" />
            </div>
        </main>
    </div>
</template>

<style>
.gradient {
    background-image: linear-gradient(to bottom, #434343 0%, black 100%);
}
</style>
