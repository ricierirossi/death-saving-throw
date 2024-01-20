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
                selected: false,
            },
            {
                id: 1,
                name: "Varis",
                failures: 3,
                successess: 2,
                status: "Dead",
                selected: false,
            },
            {
                id: 2,
                name: "Kriv",
                failures: 0,
                successess: 3,
                status: "Alive",
                selected: false,
            },
            {
                id: 3,
                name: "Galaeril",
                failures: 0,
                successess: 0,
                status: "",
                selected: false,
            },
        ],
    }),
    actions: {
        addCharacter(character) {
            this.characters.push(character);
        },
        addCharacterFail() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures < 3 ? character.failures++ : "";
                }
                character.selected = false;
            });
        },
        addCharacterSuccess() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.successess < 3 ? character.successess++ : "";
                }
                character.selected = false;
            });
        },
        clearSomeSavings() {
            this.characters.forEach((character) => {
                if (character.selected === true) {
                    character.failures = 0;
                    character.successess = 0;
                    character.status = "";
                    character.selected = false;
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
        selectedCharacter(characterID) {
            this.characters.forEach((character) => {
                if (character.id === characterID) {
                    character.selected = !character.selected;
                }
            });
        },
        deleteCharacters() {
            this.characters = this.characters.filter((character) => {
                return character.selected === false;
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
