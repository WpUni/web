<template>
    <div>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="8" md="8" lg="6">
                <p class="text-center old-font">University of WhatsApp</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="8" md="8" lg="6">
                <p class="text-justify">
                    With recent internet and social media age, fake news and misinformation are spreading at an alarming
                    rate. In such a scenario, many people are confidently (and unintentionally) spreading
                    misinformation.
                    Many times this has led to panic and dangerous side-effects. There is a new term for such people in
                    the Urban Dictionary. They are called <b>WhatsApp Graduates</b> from WhatsApp University
                    <sup> <a href="https://www.urbandictionary.com/define.php?term=Whatsapp%20University"
                             target="_blank">1</a></sup>.
                    This websites salutes their efforts and provides a certificate. Please enter the name of the person
                    in
                    following the box and click on the 'Generate' button.
                </p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="8" md="8" lg="6">
                <v-text-field
                        label="Person Name"
                        v-model="name"
                >
                    <template v-slot:append>
                        <v-btn
                                depressed
                                tile
                                color="primary"
                                @click="issue">
                            Generate
                        </v-btn>
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="8" md="8" lg="6">
                <p class="font-italic grey--text"> Tip: You can directly add person name to the url and generate the
                    certificate. e.g. https://wpuni.online/your-name</p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col cols="11" sm="8" md="8" lg="6">
                <v-card outlined color="#eceef1">
                    <v-card-text class="text-justify">
                        Note : This website is generated purely for fun. No discrimination,
                        hate or ill-wish is intended. You should use this website ONLY if you agree to our
                        <router-link to="terms">terms and
                            conditions
                        </router-link>
                        . You can reach us at <a href="mailto:contact@wpuni.online">contact@wpuni.online</a>.
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                name: ""
            }
        },
        methods: {
            issue: function () {
                let temp = this.name.replace(/\s+/g, '-').toLowerCase();
                this.$router.push({path: temp})
            }
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: "oldschool";
        src: url("~@/assets/ManuskriptGothischUNZ1A.ttf");
        font-style: normal;
    }

    .old-font {
        font-family: oldschool, serif !important;
        font-size: 2.125rem;
        line-height: 1;
        letter-spacing: 0.0073529412em;
        font-weight: 400;
    }
</style>