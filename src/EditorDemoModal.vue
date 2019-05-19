<template>
    <editor-modal class="capsule-editor-demo-modal" :class="`step-${active + 1}`">
        <slide-deck ref="slides" :active="active" @enter="onEnter" :controls="active > 0">
            <div :key="0">
                <div>
                    <animate-css name="zoom" in left>
                        <img v-if="loaded" src="./assets/img/logo-no-text-1028x1028.png" class="capsule-editor-modal-logo" />
                    </animate-css>
                    <h1 class="text-center font-weight-light">Capsule Editor</h1>
                    <p class="mx-3 py-2">
                        Capsule Editor will step you through each error to help you quickly find the correct solution.
                        Would like to learn more about Capsule Editor?
                    </p>
                    <div class="text-center">
                        <div class="mb-3">
                            <btn type="button" @click="active = 1">Learn More</btn>
                        </div>
                        <small><a href="#" @click.prevent="$emit('clear')">No, I just want to fix the errors.</a></small>
                    </div>
                </div>
            </div>
            <div :key="1">
                <div>
                    <h1 class="text-center font-weight-light">Fixing Errors</h1>
                
                    <p>
                        Capsule Editor will check for errors automatically as you type.
                        The errors will appear highlighted in red next to a bug icon and 
                        will have a brief description of what is most likely causing the error.
                    </p>
                    

                    <img src="./assets/img/fixing-errors.gif" class="screenshot img-fluid mb-3" />

                    <div class="text-center">
                        <div class="mb-3">
                            <btn type="button" @click="active = 2">Next <icon icon="long-arrow-alt-right" /></btn>
                        </div>
                        <small><a href="#" @click.prevent="$emit('clear')">Skip Tutorial</a></small>
                    </div>
                </div>
            </div>
            <div :key="2">
                <h1 class="text-center font-weight-light">Paginating</h1>
                <p>
                    Finding errors can take a little time in a large document or if the HTML isn't properly indented.
                    Capsule Editor provides an interface to paginate through the errors to quickly find them in
                    the document.
                </p>

                <img src="./assets/img/error-paginating.gif" class="screenshot img-fluid mb-3" />

                <div class="text-center">
                    <div class="mb-3">
                        <btn type="button" @click="active = 3">Next <icon icon="long-arrow-alt-right" /></btn>
                    </div>
                    <small><a href="#" @click.prevent="$emit('clear')">Skip Tutorial</a></small>
                </div>
            </div>
            <div :key="3">
                <h1 class="text-center font-weight-light">Almost Ready!</h1>
                <p>
                    If you ever need to return to this tutorial, just click the question mark in the top right corner.
                </p>
                <img src="./assets/img/show-help-modal.gif" class="screenshot img-fluid mb-3" />
                <div class="text-center">
                    <btn variant="success" type="button" @click="$emit('clear')">Get Started!</btn>
                </div>
            </div>
        </slide-deck>
    </editor-modal>
</template>

<script>
import AnimateCss from './AnimateCss';
import EditorModal from './EditorModal';
import Btn from 'vue-interface/src/Components/Btn';
import SlideDeck from 'vue-interface/src/Components/SlideDeck';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/vue-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

library.add(faLongArrowAltRight);

export default {

    components: {
        Btn,
        Icon,
        SlideDeck,
        AnimateCss,
        EditorModal
    },

    methods: {

        onEnter(current) {
            this.active = current.key;
        }  

    },

    data() {
        return {
            active: 0,
            loaded: false
        };
    },

    mounted() {
        this.loaded = true;
    }
};
</script>

<style lang="scss">
.capsule-editor-demo-modal {
    &:not(.step-1):not(.step-4) .slide-deck-content {
        min-height: 28rem;
    }

    .slide-deck-content {
        min-height: 25rem;
        margin-bottom: 3rem;

        .screenshot {
            min-height: 170px;
        }
    }
}
</style>