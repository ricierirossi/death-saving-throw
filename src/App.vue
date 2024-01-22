<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
</script>

<template>
    <div class="min-h-screen bg-background2 bg-cover bg-bottom text-zinc-300">
        <header>
            <h1 class="py-2 text-center text-4xl">Death Saving Throw</h1>
        </header>
        <main class="mt-1">
            <div
                class="w-full flex flex-col md:flex-row md:justify-center md:gap-10"
            >
                <StatusTable />
                <ButtonSection />
            </div>
        </main>
    </div>
</template>
