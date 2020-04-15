<template>
    <div class="fill-height">
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="8" lg="6">
                <v-card class="pa-2">
                    <v-card class="pa-2" outlined color="#ffefd6">
                        <v-card class="pa-2" color="#fff9ef" outlined>
                            <v-card-text>
                                <p class="text-center font-weight-light">Certificate</p>
                                <p class="text-center embossed old-font">University of WhatsApp</p>
                                <p class="text-center font-italic">Upon recommendation from the admin committee <br> has
                                    conferred on</p>
                                <p class="text-center display-1 font-weight-black"> {{name}} </p>
                                <p class="text-center">the degree of</p><br>
                                <p class="text-center old-font embossed">Doctor of Philosophy</p><br>
                                <p class="text-justify font-italic font-weight-medium">in recognition of her/his
                                    attainment
                                    in
                                    special studies in science,
                                    research and economics. His/her contribution in spreading unverified news and
                                    misinformation
                                    through various social media channels deserves a big applause.
                                </p>
                                <v-row align="center" justify="center">
                                    <v-img src="../assets/seal.png" max-width="100px"/>
                                </v-row>
                                <v-row align="end" justify="center">
                                    <v-col align="center">
                                        <v-img src="../assets/sign1.png" max-height="100px" max-width="100px"/>
                                        <p class="mt-1">Director, Uni. of WhatsApp</p>
                                    </v-col>

                                    <v-col align="center">
                                        <v-img src="../assets/sign2.png" max-height="100px" max-width="100px"/>
                                        <p class="mt-1">Registrar, Uni. of WhatsApp</p>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
        <v-footer>
            <v-row justify="center" align="center">
                <v-col cols="12">
                    <p class="text-center"> Make your own certificate
                        <router-link to="/">Here</router-link>
                        and send it to the WhatsApp graduates.
                    </p>
                </v-col>
            </v-row>


        </v-footer>
    </div>
</template>

<script>
    // @ is an alias to /src
    export default {
        name: 'Home',
        components: {},
        data() {
            return {
                name: "User Name"
            }
        },
        created() {
            let path = this.$router.currentRoute.path;
            path = path.replace(/[^a-zA-Z0-9]/g, ' ');
            this.name = toTitleCase(path);
        }

    }

    function toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        );
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

    .embossed {
        text-shadow: -1px -1px 1px #fff, 1px 1px 1px #000;
        opacity: 0.8;
    }

</style>