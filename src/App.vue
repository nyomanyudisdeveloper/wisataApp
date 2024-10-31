<script setup lang="ts">
    import PlaceInformationSummary from "./components/PlaceInformationSummary.vue"
    import PlaceSectionNav from "./components/PlaceSectionNav.vue";
</script>

<script lang="ts">
    import axios from 'axios';
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    export default {
        data() {
            return {
                apiData: null,
            };
        },
        mounted() {
            const apiUrl = 'https://project-technical-test-api.up.railway.app/property/content?id=9000248394'; // Replace with your API endpoint URL

            axios({
                method: 'get',
                url: apiUrl,
                withCredentials: false,
                
            })
            .then((response) => {
                console.log("test = ",response.data)
                this.apiData = response.data;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        },
    };
</script>

<template>
    <div class="mx-52">
        <HeaderNav />
        <PlaceInformationSummary />
        <PlaceSectionNav />
    </div>
</template>