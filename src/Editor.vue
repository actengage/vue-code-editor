<template>
    <div class="editor" :class="{footer: (showFooter || showFinishButton) && !showFinishPopup}">
        <editor-toolbar
            ref="toolbar"
            :value="value"
            :demo-mode="demoMode"
            :activity="isLinting"
            :errors="currentErrors"
            :title.sync="currentFilename"
            :page-controls="!demoMode && pageControls"
            @input="onToolbarInput"
            @lint="onClickLint"
            @new="onClickNew"
            @save="onClickSave"
            @open="onClickOpen"
            @close="onClickClose"
            @save-as="onClickSaveAs"
            @convert="onClickConvert"
            @export-errors="onExportErrors"
            @demo-modal="demoModalCleared = false" />

        <div class="editor-field-container">
            <editor-field
                ref="field"
                v-model="value"
                v-bind="mergedOptions"
                @input="onEditorInput"
                @initialize="onEditorInitialized" />

            <input ref="file" type="file" class="d-none" @input="onFileSelected">
        </div>

        <editor-footer
            v-if="initialized"
            ref="footer"
            :cm="cm"
            :finish="!currentErrors.length && showFinishButton"
            :demo-mode="demoMode"
            :errors="currentErrors"
            @finish="() => showFinishPopup = true" />

        <animate-css name="fade" @leave="onModalLeave">
            <editor-demo-modal v-if="demoMode && !demoModalCleared" @clear="onModalClear" />
        </animate-css>

        <animate-css enter="tada" leave="fadeOut">
            <editor-modal v-if="showFinishPopup">
                <slot name="success" :close="closeFinishPopup">
                    <img src="./assets/logo-no-text-1028x1028.png" class="capsule-editor-modal-logo">
                    <div class="text-center">
                        <h1 class="font-weight-light">
                            Success!
                        </h1>
                        <h5 class="font-weight-light mb-5">
                            Your document has been fixed.
                        </h5>
                        <btn type="button" variant="primary" size="lg" block @click="closeFinishPopup">
                            Dismiss
                        </btn>
                    </div>
                </slot>
            </editor-modal>
        </animate-css>
    </div>
</template>

<script>
import AnimateCss from '@vue-interface/animate-css';
import Btn from '@vue-interface/btn';
import InputField from '@vue-interface/input-field';
import { deepExtend } from '@vue-interface/utils';
import EditorModal from './EditorModal';
import EditorField from './EditorField';
import EditorFooter from './EditorFooter';
import EditorToolbar from './EditorToolbar';
import EditorDemoModal from './EditorDemoModal';
import LintState from './CodeMirror/Lint/LintState';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';

library.add(faExclamationTriangle);

const beautify = require('js-beautify').html;

// var beautify_js = require('js-beautify'); // also available under "js" export
// var beautify_css = require('js-beautify').css;
// var beautify_html = require('js-beautify').html;

class Deferred {
    constructor(fn) {
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
            
            if(fn instanceof Function) {
                fn(resolve, reject);
            }
        });
    }
}

export default {
    components: {
        Btn,
        AnimateCss,
        EditorModal,
        EditorField,
        EditorFooter,
        EditorToolbar,
        EditorDemoModal
    },

    props: {

        team: {
            type: [Number, Object],
            required: true
        },

        contents: String,

        demoMode: Boolean,

        skipIntro: Boolean,

        extraKeys: Object,

        filename: String,

        gutters: Array,

        lint: Object,

        options: Object,

        errors: {
            type: Array,
            default: () => []
        },

        pageControls: {
            type: Boolean,
            default: true
        },

        apiKey: String,

        environment: {
            type: String,
            default() {
                return process.env.NODE_ENV;
            }
        },

        url: {
            type: String,
            default() {
                return `lints`;
            }
        }
    },

    data() {
        const errors = this.errors.splice(0, 0);

        return {
            cm: null,
            isLinting: false,
            initialized: false,
            showFinishPopup: false,
            showFinishButton: false,
            showFooter: !!errors.length,
            demoModalCleared: this.skipIntro,
            currentErrors: errors,
            currentFilename: this.filename,
            value: this.contents || this.getSlotContents(),
            resolvers: {
                init: new Deferred,
                lint: new Deferred,
            },
            /*
            value: beautify_html((this.contents || this.getSlotContents()), {
                indent_size: 1,
                indent_char: '\t'
            })
            */
        };
    },

    computed: {
        mergedOptions() {
            return deepExtend({
                gutters: this.gutters || [
                    'CodeMirror-linenumbers',
                    LintState.id,
                    'CodeMirror-foldgutter'
                ],
                extraKeys: Object.assign({
                    'Ctrl-N': this.onClickNew,
                    'Ctrl-O': this.onClickOpen,
                    'Ctrl-S': this.onClickSave,
                    'Ctrl-Q': this.onClickClose,
                    'Ctrl-C': this.onClickConvert,
                    'Shift-Ctrl-S': this.onClickSaveAs,
                    'Ctrl-J': 'toMatchingTag',
                    'Ctrl-Space': 'autocomplete',
                    'Ctrl-V': () => {
                        this.$refs.toolbar.$refs.lint.$el.click();
                    }
                }, this.extraKeys),
                lint: Object.assign({
                    url: this.url,
                    apiKey: this.apiKey,
                    nextTick: this.$nextTick,
                    errors: this.currentErrors,
                    data: cm => {
                        return {
                            html: cm.getValue(),
                            team_id: typeof this.team === 'object' ? this.team.id : this.team
                        };
                    },
                    onLintStart: () => {
                        this.isLinting = true;
                    },
                    onLintComplete: () => {
                        this.isLinting = false;
                    },
                    onLintCancel: () => {
                        this.isLinting = false;
                    },
                    onLintSuccess: () => {
                        // this.currentErrors = [];
                        this.$emit('lint-success');
                    },
                    onLintError: (cm, error) => {
                        if(error.response.status === 406) {
                            // this.currentErrors = error.response.data.errors;
                            this.$emit('lint-error', error, this.currentErrors);
                        }
                    }
                }, this.lint)
            }, this.options);
        }
    },

    watch: {

        ['cm.state.lint.errors'](value, oldValue) {
            if(!value.length && this.currentErrors.length) {
                this.cm.lint().then(response => {
                    if(this.demoMode && this.cm.getValue() && !this.showFinishButton) {
                        this.showFinishPopup = true;
                    }
                }, e => {
                    // this.state.lint.errors = e.response.data.errors;
                });
            }
        
            this.currentErrors = value.slice(0);
        },

        currentErrors(value, oldValue) {
            oldValue.filter(oldError => {
                return !value.filter(newError => {
                    return (
                        newError.line === oldError.line && 
                        newError.ch === oldError.ch && 
                        newError.code === oldError.code
                    );
                }).length;
            }).forEach(error => error.clear());

            this.showFooter = !!value.length;
        },

        initialize() {

        }

    },

    created() {
        const promises = Object.entries(this.resolvers)
            .map(([key, { promise }]) => promise);

        Promise.all(promises).finally(() => {
            if(this.demoMode && !this.currentErrors.length) {
                this.showFinishPopup = true;
            }

            this.$emit('initialize');
        });
    },

    mounted() {
        this.$nextTick(() => {
            if(this.cm.getValue() && !this.currentErrors.length) {
                this.cm.lint().then(null, e => {
                    if(this.currentErrors[0] && !this.cm.hasFocus()) {
                        this.currentErrors[0].focus();
                    }
                }).finally(() => {
                    this.resolvers.lint.resolve();
                });
            }
        });
    },

    methods: {

        beautify(content) {
            return beautify(content, {
                indent_size: '4',
                indent_char: ' ',
                max_preserve_newlines: '0',
                preserve_newlines: true,
                keep_array_indentation: false,
                break_chained_methods: false,
                indent_scripts: 'separate',
                brace_style: 'collapse',
                space_before_conditional: false,
                unescape_strings: false,
                jslint_happy: false,
                end_with_newline: false,
                wrap_line_length: '0',
                indent_inner_html: true,
                comma_first: false,
                e4x: false,
                indent_empty_lines: false
            });
        },

        closeFinishPopup() {
            this.showFinishPopup = false;
            this.showFinishButton = true;
        },

        getSlotContents() {
            const content = this.$slots.default ? this.$slots.default.filter(vnode => {
                return vnode.tag.toLowerCase() === 'textarea' && !!vnode.children;
            }).reduce((carry, vnode) => {
                return (
                    carry + vnode.children.map(child => {
                        return child.text;
                    }).join('')
                );
            }, '') : null;

            return this.beautify(content);
        },

        onEditorInitialized(cm) {
            this.cm = cm;
            this.initialized = true;
            this.resolvers.init.resolve();
        },

        onModalLeave() {
            if(this.cm.state.lint.errors.length) {
                const activeErrors = this.cm.state.lint.errors.filter(error => error.isActive);
                
                if(!activeErrors.length) {
                    this.cm.state.lint.errors[0].focus();
                }
            }
        },

        onModalClear() {
            this.demoModalCleared = true;
            this.$emit('demo-complete');
        },

        onClickConvert() {
            this.$emit('convert', this.value, this.currentFilename);
        },

        onToolbarInput() {
            this.onEditorInput();
        },

        onEditorInput() {
            this.$nextTick(() => {
                this.$emit('input', {
                    contents: this.value,
                    filename: this.currentFilename
                });
            });
        },

        onExportErrors() {
            this.$emit('export', this.value, this.currentFilename);
        },

        onFileSelected(event) {
            const reader = new FileReader();

            // Closure to capture the file information.
            reader.onload = e => {
                this.cm.setValue(e.target.result);
                this.cm.lint().then(null, e => {
                    // this.state.lint.errors = e.response.data.errors;
                });
            };

            reader.readAsText(event.target.files[0]);

            this.currentFilename = event.target.files[0].name;
        },

        onClickNew() {
            this.currentFilename = null;
            this.cm.setValue((this.value = ''));
            this.cm.focus();
            this.$emit('new');
        },

        onClickSave() {
            if(this.currentFilename) {
                this.$emit('download', this.value, this.currentFilename);
                this.$emit('save', this.value, this.currentFilename);
            }
            else {
                this.onClickSaveAs();
            }
        },

        onClickSaveAs() {
            let currentFilename = this.currentFilename;

            this.$prompt('Save File As', InputField, {
                content: {
                    on: {
                        keypress: e => {
                            if(e.keyCode === 13) {
                                e.target
                                    .closest('.modal-dialog')
                                    .querySelector('.btn-primary')
                                    .click();
                                e.preventDefault();
                            }
                            else {
                                currentFilename = e.target.value;
                            }
                        }
                    },
                    propsData: {
                        label: 'Enter the name of the file',
                        value: this.currentFilename
                    }
                }
            }).then(modal => {
                this.currentFilename = currentFilename;

                this.$emit('download', this.value, currentFilename);
                this.$emit('save-as', this.value, currentFilename);
                this.$emit('save', this.value, currentFilename);
            });
        },

        onClickOpen(event) {
            this.$refs.file.click();
        },

        onClickClose() {
            this.$emit('close');
        },

        onClickLint(event) {
            this.cm.lint().then(null, e => {
                // this.state.lint.errors = e.response.data.errors;
            });;
        }
        
    }
};
</script>

<style lang="scss">
@import '~capsule-common/src/scss/colors';
@import '~bootstrap/scss/bootstrap';

$editor-background: #282a36;

$dark: darken($editor-background, 6.5%);

.editor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    background-color: $editor-background;
    grid-template-rows: minmax(3rem, auto) minmax(auto, 100%) auto;
}

.edit-toolbar {
    .btn {
        position: relative;

        .badge {
            top: 0;
            right: 0;
            z-index: 1;
            transform: translate(50%, -25%);
        }

        &.has-error > svg {
            color: $danger;
        }
    }

    .edit-toolbar-actions {
        .dropdown-item {
            display: flex;
            align-items: center;

            span {
                margin-right: 1.5em;
            }

            code {
                font-size: 8px;
                margin-left: auto;
            }

            kbd {
                background: rgb(60, 60, 60);

                &:not(:last-child) {
                    margin-right: 0.25em;
                }
            }

            svg {
                width: 9px;
            }
        }
    }
}

.editor-field-container {
    flex: 1;
    position: relative;
    // overflow: hidden;
}

</style>
