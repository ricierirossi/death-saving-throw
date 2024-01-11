<template>
    <div class="px-8 py-4 rounded-md bg-transparent-black text-zinc-300">
        <table>
            <thead>
                <tr class="gap-5">
                    <th></th>
                    <th>Player</th>
                    <th>Failures</th>
                    <th>Successes</th>
                    <th>Status</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in 5">
                    <input type="checkbox" />
                    <td>Character {{ p }}</td>
                    <td>
                        <span
                            v-for="s in 3"
                            class="material-symbols-outlined hover:cursor-pointer"
                        >
                            skull
                        </span>
                    </td>
                    <td>
                        <span
                            v-for="h in 3"
                            class="material-symbols-outlined hover:cursor-pointer"
                        >
                            health_and_safety
                        </span>
                    </td>
                    <td>Dead</td>
                </tr>
            </tbody>
        </table>
        <div class="flex mt-6 gap-x-3">
            <input
                type="text"
                placeholder="Insert character name"
                class="text-black bg-transparent border-b-2"
            />
            <span class="material-symbols-outlined hover:cursor-pointer"
                >add_circle</span
            >
        </div>
    </div>
</template>
