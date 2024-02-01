<template>
    <div
        class="mx-1 md:mx-0 rounded-md max-h-[360px] md:max-h-screen overflow-x-hidden overflow-y-auto"
        :class="
            ({ 'bg-transparent': statusStore.characters.length < 1 },
            { 'bg-transparent-blue': statusStore.characters.length > 0 })
        "
    >
        <div>
            <!-- <div
                class="sticky top-0 grid grid-cols-4 items-center text-center min-h-12 rounded-md bg-strong-blue"
            >
                <span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </div> -->
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
                class="border-dotted border-t-2 border-slate-700 hover:cursor-pointer"
                @click="selectCharacter(character.id)"
            >
                <div
                    class="grid grid-cols-4 min-h-16 items-center text-center"
                    :class="{
                        'border-solid border-2 border-blue-900 rounded-md':
                            character.selected,
                        'border-2 border-transparent': !character.selected,
                    }"
                >
                    <div id="buttons-left" class="flex flex-col gap-y-2">
                        <button
                            class="bg-red-900 hover:bg-red-800 rounded-md flex justify-center"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            class="bg-red-900 hover:bg-red-800 rounded-md flex justify-center"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow"
                                width="24"
                                height="24"
                                class="rotate-180"
                            />
                        </button>
                    </div>
                    <div class="col-start-2 col-span-2 grid grid-rows-2">
                        <span class="overflow-x-hidden text-center"
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
                    <div id="buttons-right" class="flex flex-col gap-y-2">
                        <button
                            class="bg-green-900 hover:bg-green-800 rounded-md flex justify-center"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow"
                                width="24"
                                height="24"
                            />
                        </button>
                        <button
                            class="bg-green-900 hover:bg-green-800 rounded-md flex justify-center"
                        >
                            <img
                                src="../assets/icons/arrow.svg"
                                alt="arrow"
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
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();

const selected = ref(false);

const selectCharacter = (characterID) => {
    selected.value = !selected.value;
    statusStore.selectedCharacter(characterID);
};
</script>
