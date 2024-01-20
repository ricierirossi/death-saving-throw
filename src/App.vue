<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
</script>

<template>
    <div class="min-h-screen bg-lava bg-cover bg-bottom py-5 px-2">
        <header>
            <h1 class="text-4xl text-gray-500 text-">Saving Death Throw</h1>
        </header>
        <main class="mt-6">
            <div
                class="w-full flex flex-col md:flex-row md:justify-center md:gap-10"
            >
                <StatusTable />
                <ButtonSection />
            </div>
        </main>
    </div>
</template>
