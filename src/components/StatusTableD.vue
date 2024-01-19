<template>
    <div class="px-4 py-4 rounded-md bg-transparent-black text-zinc-300">
        <div>
            <div class="grid grid-cols-custom items-center text-center">
                <span>Character</span>
                <span>
                    <div>Failures & Successes</div>
                    <div></div>
                </span>
                <span>Status</span>
                <span></span>
                <span></span>
            </div>
            <div
                v-for="(character, key) in statusStore.characters"
                :key="character.id"
            >
                <div
                    class="grid grid-cols-custom items-center text-center border-t-2 border-dotted border-slate-800"
                >
                    <span>{{ character.name }}</span>
                    <div>
                        <div>
                            <div
                                v-for="failures in character.failures"
                                class="material-symbols-outlined hover:cursor-pointer text-red-800"
                            >
                                skull
                            </div>
                        </div>
                        <div>
                            <div
                                v-for="failures in character.successess"
                                class="material-symbols-outlined hover:cursor-pointer text-green-800"
                            >
                                health_and_safety
                            </div>
                        </div>
                    </div>
                    <span>{{ character.status }}</span>
                    <div>
                        <button
                            class="bg-red-900 rounded-md hover:bg-red-800 text-sm min-w-20 min-h-6"
                            @click="addFailure(key)"
                        >
                            +1 Failure
                        </button>
                        <button
                            class="bg-green-900 rounded-md hover:bg-green-800 text-sm min-w-20 min-h-6"
                            @click="addSuccess(key)"
                        >
                            +1 Success
                        </button>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            :checked="character.checked"
                            @click="changeCheckbox(character.id)"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="flex mt-6 gap-x-3 bg-slate-800 py-2 px-4 rounded-md">
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
        </div>
    </div>
</template>
<script setup>
import { useStatusStore } from "../../stores/StatusStore";
import { ref } from "vue";

const statusStore = useStatusStore();
const characterName = ref("");

const insertCharacter = () => {
    if (characterName.value) {
        statusStore.addCharacter({
            id: new Date(Date.now()).getTime(),
            name: characterName.value,
            failures: 0,
            successess: 0,
            status: "",
            checked: false,
        });
    }
    characterName.value = "";
};

const addFailure = (characterKey) => {
    statusStore.addCharacterFail(characterKey);
};

const addSuccess = (characterKey) => {
    statusStore.addCharacterSuccess(characterKey);
};

const changeCheckbox = (characterID) => {
    statusStore.checkboxStatus(characterID);
};
</script>
