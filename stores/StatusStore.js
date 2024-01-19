import { defineStore } from "pinia";

export const useStatusStore = defineStore("savings", {
    state: () => ({
        // ! Remove mocked data
        characters: [
            {
                id: 0,
                name: "Yix",
                failures: 2,
                successess: 2,
                status: "Risky",
                checked: false,
            },
            {
                id: 1,
                name: "Varis",
                failures: 3,
                successess: 2,
                status: "Dead",
                checked: false,
            },
            {
                id: 2,
                name: "Kriv",
                failures: 0,
                successess: 3,
                status: "Alive",
                checked: false,
            },
            {
                id: 3,
                name: "Galaeril",
                failures: 0,
                successess: 0,
                status: "",
                checked: false,
            },
        ],
    }),
    actions: {
        addCharacter(character) {
            this.characters.push(character);
        },
        addCharacterFail(characterKey) {
            this.characters[characterKey].failures < 3
                ? this.characters[characterKey].failures++
                : "";
        },
        addCharacterSuccess(characterKey) {
            this.characters[characterKey].successess < 3
                ? this.characters[characterKey].successess++
                : "";
        },
        clearSomeSavings() {
            this.characters.forEach((character) => {
                if (character.checked === true) {
                    character.failures = 0;
                    character.successess = 0;
                    character.status = "";
                    character.checked = false;
                }
            });
        },
        clearAllSavings() {
            this.characters.forEach((character) => {
                character.failures = 0;
                character.successess = 0;
                character.status = "";
            });
        },
        checkboxStatus(characterID) {
            this.characters.forEach((character) => {
                if (character.id === characterID) {
                    character.checked = !character.checked;
                }
            });
        },
        deleteCharacters() {
            this.characters = this.characters.filter((character) => {
                return character.checked === false;
            });
        },
    },
    getters: {
        statusChange: (state) => {
            state.characters.forEach((character) => {
                if (character.failures === 0 && character.successess === 0) {
                    return (character.status = "");
                }
                if (character.failures === 3 && character.successess === 3) {
                    return (character.status = "Schrodinger's cat");
                }
                if (character.failures === 3) {
                    return (character.status = "Dead");
                }
                if (character.successess === 3) {
                    return (character.status = "Alive");
                }
                return (character.status = "Risky");
            });
        },
    },
});
