<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
</script>

<template>
    <div class="min-h-screen bg-background bg-cover bg-bottom text-zinc-300">
        <header>
            <h1 class="py-2 md:pt-8 text-center text-4xl">
                Death Saving Throw
            </h1>
        </header>
        <main class="mt-1 md:mt-5 pb-5">
            <div class="md:flex md:justify-center md:mx-3 md:gap-x-2">
                <StatusTable />
                <ButtonSection />
            </div>
        </main>
    </div>
</template>
