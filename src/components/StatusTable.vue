<template>
    <div
        class="mx-2 px-4 pb-2 max-h-[344px] overflow-scroll rounded-md bg-transparent-blue"
    >
        <div>
            <div
                class="grid grid-cols-3 items-center text-center sticky top-0 bg-strong-blue py-2 w-full"
            >
                <span>Character</span>
                <span>
                    <div>Failures & Successes</div>
                    <div></div>
                </span>
                <span>Status</span>
            </div>
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
                class="border-dotted border-t-2 border-slate-700 hover:cursor-pointer"
                @click="selectCharacter(character.id)"
            >
                <div
                    class="grid grid-cols-3 items-center text-center min-h-16"
                    :class="{
                        'border-solid border-2 border-blue-900 rounded-md':
                            character.selected,
                        'border-2 border-transparent': !character.selected,
                    }"
                >
                    <span>{{ character.name }} </span>
                    <div>
                        <div>
                            <div
                                v-for="failures in character.failures"
                                class="inline"
                            >
                                <img
                                    src="../assets/icons/skull.svg"
                                    alt="skull"
                                    width="24"
                                    height="24"
                                    class="inline"
                                />
                            </div>
                        </div>
                        <div>
                            <div
                                v-for="failures in character.successess"
                                class="inline"
                            >
                                <img
                                    src="../assets/icons/shield.svg"
                                    alt="shield"
                                    width="24"
                                    height="24"
                                    class="inline"
                                />
                            </div>
                        </div>
                    </div>
                    <span>{{ character.status }}</span>
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
