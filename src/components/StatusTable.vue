<template>
    <div class="px-4 py-4 rounded-md bg-transparent-black text-zinc-300">
        <div>
            <div class="grid grid-cols-3 items-center text-center">
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
                                class="material-symbols-outlined text-red-800"
                            >
                                skull
                            </div>
                        </div>
                        <div>
                            <div
                                v-for="failures in character.successess"
                                class="material-symbols-outlined text-green-800"
                            >
                                health_and_safety
                            </div>
                        </div>
                    </div>
                    <span>{{ character.status }}</span>
                </div>
            </div>
        </div>
        <!-- <div class="flex mt-6 gap-x-3 bg-slate-800 py-2 px-4 rounded-md">
            <input
                type="text"
                placeholder="Insert character name"
                class="text-zinc-300 bg-transparent border-b-2 flex-grow"
                v-model="characterName"
                @keyup.enter="insertCharacter"
            />
            <span
                class="material-symbols-outlined hover:cursor-pointer hover:text-gray-400"
                @click="insertCharacter"
                >add_circle</span
            >
        </div> -->
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
// const characterName = ref("");
const selected = ref(false);

// const insertCharacter = () => {
//     if (characterName.value) {
//         statusStore.addCharacter({
//             id: new Date(Date.now()).getTime(),
//             name: characterName.value,
//             failures: 0,
//             successess: 0,
//             status: "",
//             selected: false,
//         });
//     }
//     characterName.value = "";
// };

const selectCharacter = (characterID) => {
    selected.value = !selected.value;
    statusStore.selectedCharacter(characterID);
};
</script>
