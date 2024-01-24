<template>
    <div
        class="mx-1 md:mx-0 rounded-md max-h-[360px] md:max-h-screen overflow-scroll"
        :class="
            ({ 'bg-transparent': statusStore.characters.length < 1 },
            { 'bg-transparent-blue': statusStore.characters.length > 0 })
        "
    >
        <div>
            <div
                class="sticky top-0 grid grid-cols-3 items-center text-center min-h-12 rounded-md bg-strong-blue"
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
                    class="grid grid-cols-3 min-h-16 items-center text-center px-4"
                    :class="{
                        'border-solid border-2 border-blue-900 rounded-md':
                            character.selected,
                        'border-2 border-transparent': !character.selected,
                    }"
                >
                    <span class="overflow-x-hidden">{{ character.name }} </span>
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
