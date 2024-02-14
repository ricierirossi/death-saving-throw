<template>
    <div
        class="mx-1 md:mx-0 rounded-md max-h-[600px] md:max-h-screen overflow-x-hidden overflow-y-auto"
        :class="
            ({ 'bg-transparent': statusStore.characters.length < 1 },
            { 'bg-transparent-blue': statusStore.characters.length > 0 })
        "
    >
        <div>
            <div
                class="sticky top-0 grid grid-cols-4 items-center text-center min-h-12 rounded-md bg-strong-blue z-10"
            >
                <span class="col-start-1 col-end-2">Failures</span>
                <span class="col-start-2 col-end-4">Character</span>
                <span class="col-start-4 col-end-5">Successes</span>
            </div>
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
                class="border-dotted border-t-2 border-slate-700 hover:cursor-pointer"
            >
                <div
                    class="grid grid-cols-4 min-h-16 items-center text-center relative"
                    @pointerdown="onHolding((selected = character.id))"
                    @pointerup="stopTimer"
                >
                    <ContextMenu
                        v-if="showContextMenu && character.id === selected"
                        :selected="selected"
                        @close-context-menu="closeContextMenu"
                    />
                    <div class="flex flex-col gap-y-2 ml-1 my-1">
                        <button
                            class="bg-red-900 hover:bg-red-800 rounded-md flex justify-center h-8"
                            @click="addFailure((selected = character.id))"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow up"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            class="bg-red-900 hover:bg-red-800 rounded-md flex justify-center h-8"
                            @click="removeFailure((selected = character.id))"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow down"
                                width="24"
                                height="24"
                                class="rotate-180 z-0"
                            />
                        </button>
                    </div>
                    <div
                        class="col-start-2 col-span-2 grid grid-rows-2 gap-y-2"
                    >
                        <span
                            class="overflow-x-hidden text-center text-lg font-semibold"
                            >{{ character.name }}
                        </span>
                        <div class="grid grid-cols-2">
                            <div class="flex justify-center">
                                <img
                                    v-for="failures in character.failures"
                                    src="../assets/icons/skull.svg"
                                    alt="skull"
                                    width="24"
                                    height="24"
                                />
                            </div>
                            <div class="flex justify-center">
                                <img
                                    v-for="failures in character.successess"
                                    src="../assets/icons/shield.svg"
                                    alt="shield"
                                    width="24"
                                    height="24"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-y-2 mr-1 my-1">
                        <button
                            class="bg-green-900 hover:bg-green-800 rounded-md flex justify-center h-8"
                            @click="addSuccess((selected = character.id))"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow up"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            class="bg-green-900 hover:bg-green-800 rounded-md flex justify-center h-8"
                            @click="removeSuccess((selected = character.id))"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow down"
                                width="24"
                                height="24"
                                class="rotate-180"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ContextMenu from "./ContextMenu.vue";
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
const selected = ref("");
const showContextMenu = ref(false);
const timerID = ref("");

const onHolding = () => {
    timerID.value = setTimeout(openContextMenu, 2000);
};

const stopTimer = () => {
    clearTimeout(timerID.value);
};

const openContextMenu = () => {
    showContextMenu.value = true;
};

const closeContextMenu = () => {
    showContextMenu.value = false;
};

const addFailure = (selected) => {
    statusStore.addCharacterFailure(selected);
};

const removeFailure = (selected) => {
    statusStore.removeCharacterFailure(selected);
};

const addSuccess = (selected) => {
    statusStore.addCharacterSuccess(selected);
};

const removeSuccess = (selected) => {
    statusStore.removeCharacterSuccess(selected);
};
</script>
