<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
import ButtonsBar from "./components/ButtonsBar.vue";
</script>

<template>
    <div class="min-h-screen gradient bg-cover bg-bottom text-zinc-300">
        <header>
            <h1 class="py-2 md:pt-8 text-center text-4xl">
                Death Saving Throw
            </h1>
        </header>
        <main class="mt-1 md:mt-5 pb-5">
            <div class="md:flex md:justify-center md:mx-3 md:gap-x-2">
                <StatusTable />
                <!-- <ButtonSection /> -->
                <ButtonsBar />
            </div>
        </main>
    </div>
</template>

<style>
.gradient {
    background-image: linear-gradient(to bottom, #434343 0%, black 100%);
}
</style>
