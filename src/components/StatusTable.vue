<template>
    <table>
        <thead>
            <tr>
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
                <td>Player {{ p }}</td>
                <td>
                    <span v-for="s in 3" class="material-symbols-outlined">
                        skull
                    </span>
                </td>
                <td>
                    <span v-for="h in 3" class="material-symbols-outlined">
                        health_and_safety
                    </span>
                </td>
                <td>Blank</td>
            </tr>
        </tbody>
    </table>
</template>
