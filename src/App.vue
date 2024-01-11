<script setup>
import StatusTable from "./components/StatusTable.vue";
import ButtonSection from "./components/ButtonSection.vue";
</script>

<template>
    <div class="h-screen bg-lava bg-cover bg-bottom p-5">
        <header>
            <h1 class="text-4xl">Saving Death Throw</h1>
        </header>
        <main class="mt-8 px-8 py-4 bg-transparent-black text-zinc-300">
            <div class="flex justify-between">
                <section>
                    <StatusTable />
                    <span class="material-symbols-outlined">add_circle</span>
                </section>
                <section>
                    <ButtonSection />
                </section>
            </div>
        </main>
        <footer class="absolute bottom-0 text-white">
            <a
                href="https://br.freepik.com/vetores-gratis/vulcao-quente-da-paisagem-com-fluxo-de-lava_25377031.htm#query=background%20site%20rpg&position=0&from_view=search&track=ais&uuid=219049bc-68f4-4fbf-bd76-9dacdce33838"
                target="_blank"
                >Image by gstudioimagen1</a
            >
            on Freepik
        </footer>
    </div>
</template>

<style scoped></style>
