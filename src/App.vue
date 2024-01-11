<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
</script>

<template>
    <div class="h-screen bg-lava bg-cover bg-bottom p-5">
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
        <footer
            class="absolute bottom-0 left-0 w-screen text-center text-white"
        >
            <a href="https://github.com/ricierirossi" target="_blank"
                >Designed with ♥ by ricierirossi</a
            >
            <span> • </span>
            <a
                href="https://br.freepik.com/vetores-gratis/vulcao-quente-da-paisagem-com-fluxo-de-lava_25377031.htm#query=background%20site%20rpg&position=0&from_view=search&track=ais&uuid=219049bc-68f4-4fbf-bd76-9dacdce33838"
                target="_blank"
                >Background image by gstudioimagen1</a
            >
            on Freepik
        </footer>
    </div>
</template>

<style scoped></style>
