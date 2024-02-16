<template>
    <div
        class="mx-1 md:mx-0 rounded-lg max-h-[600px] md:max-h-screen lg:max-w-[1000px] overflow-x-hidden overflow-y-auto lg:grow"
    >
        <div>
            <div
                class="sticky top-0 grid grid-cols-3 items-center text-center min-h-12 rounded-md bg-oxford-blue z-20"
                :class="{ 'grid-cols-4': windowSize >= breakPoint }"
            >
                <span class="col-start-1 col-end-2">Failures</span>
                <span class="col-start-2 col-end-3">Character</span>
                <span class="col-start-3 col-end-4">Successes</span>
            </div>
            <div
                v-if="statusStore.characters.length === 0"
                class="text-center text-oxford-blue"
            >
                Please, add a character.
            </div>
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
                class="rounded-lg hover:cursor-pointer bg-oxford-blue my-2"
            >
                <div
                    class="grid grid-cols-custom min-h-16 items-center text-center relative"
                    :class="{ 'grid-cols-4': windowSize >= breakPoint }"
                    @pointerdown="
                        onHolding(
                            windowSize,
                            breakPoint,
                            (selected = character.id)
                        )
                    "
                    @pointerup="stopTimer"
                >
                    <ContextMenu
                        v-if="showContextMenu && character.id === selected"
                        :selected="selected"
                        @close-context-menu="closeContextMenu"
                    />
                    <div
                        class="flex flex-col gap-y-2 ml-1 my-1 col-start-1 col-end-2 items-center grow-"
                    >
                        <button
                            class="bg-poppy-dark hover:bg-poppy rounded-md flex justify-center h-8 max-w-32 w-full"
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
                            class="bg-poppy-dark hover:bg-poppy rounded-md flex justify-center h-8 max-w-32 w-full"
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
                    <div class="col-start-2 col-end-3 grid grid-rows-2 gap-y-2">
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
                    <div
                        class="flex flex-col gap-y-2 mr-1 my-1 col-start-3 col-end-4 items-center"
                    >
                        <button
                            class="bg-viridian-dark hover:bg-viridian rounded-md flex justify-center h-8 max-w-32 w-full"
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
                            class="bg-viridian-dark hover:bg-viridian rounded-md flex justify-center h-8 max-w-32 w-full"
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
                    <div
                        class="flex flex-col gap-y-2 mr-1 my-1 col-start-4 col-end-5 items-center"
                        :class="{ hidden: windowSize < breakPoint }"
                    >
                        <button
                            class="bg-gray-700 hover:bg-gray-600 py-2 px-4 rounded-md max-h-8 w-32 flex items-center justify-center"
                            @click="
                                clearSavings(selected),
                                    $emit('closeContextMenu')
                            "
                        >
                            Clear Savings
                        </button>
                        <button
                            class="bg-poppy-dark hover:bg-poppy py-2 px-4 rounded-md max-h-8 w-32 text-xs flex items-center justify-center"
                            @click="
                                removeCharacter(selected),
                                    $emit('closeContextMenu')
                            "
                        >
                            Delete Character
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

defineProps({
    windowSize: Number,
    breakPoint: Number,
});

const onHolding = (windowSize, breakPoint) => {
    if (windowSize < breakPoint) {
        timerID.value = setTimeout(openContextMenu, 1000);
    }
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
