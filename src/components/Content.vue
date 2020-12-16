<template>
    <div class="w-full border-2 border-grey p-2 mb-4 rounded-sm">
        <div class="flex">
            <div :class="itemType === 'image'? 'w-1/2': 'w-full' ">
                <div class=" w-full mb-2">
                    <div class="" >
                        Store Front
                    </div>
                    <div class="w-9/12">
                        <input type="text" class="w-full" :value="get(contentValue, 'lang') ? get(contentValue, 'lang') : 'en'" @input="e => update(e, 'lang')" />
                    </div>
                </div>
                <div  class="flex flex-col flex-wrap w-full mb-2">
                    <div class="" >
                        Text/Image URL
                    </div>
                    <div class="w-9/12">
                        <textarea v-if="itemType !== 'image'" type="text" class="w-full" :value="get(contentValue, 'body')" @input="e => update(e, 'body')" />
                        <input v-else type="text" class="w-full" :value="get(contentValue, 'body')" @input="e => update(e, 'body')" />
                    </div>
                </div>
                <div v-if="itemType === 'image'" class=" w-full mb-2">
                    <div class="" >
                        Image Description (Alt Name) 
                    </div>
                    <div class="w-9/12">
                        <input type="text" class="w-full" :value="get(contentValue, 'alt')" @input="e => update(e, 'alt')" />
                    </div>
                </div>
            </div>
        <!-- <div v-if="itemType === 'image'" class="flex flex-wrap w-full mb-2">
            <div class="" >
                Image
            </div>
            <div class="">
                <input type="file" class="w-full" @change="onFileChange" />
            </div>
        </div> -->
            <div v-if="itemType === 'image'" :class="itemType === 'image'? 'w-1/2': 'none' ">
                <File-pond
                name="file"
                ref="pond"
                label-idle="Click or Drop files here..."
                v-bind:allow-multiple="false"
                accepted-file-types="image/jpeg, image/png"
                :server="{ process, revert, restore, load, fetch }"
                v-bind:files="myFiles"
                v-on:init="handleFilePondInit"/>
            </div>
        </div>
        <button @click="remove" class="bg-red-400 px-2 rounded-sm text-white ml-auto mb-2">x</button>
    </div>
</template>

<script>
import get from 'lodash/get'
import vueFilePond from 'vue-filepond';
import 'filepond/dist/filepond.min.css';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import axios from 'axios'

const FilePond = vueFilePond(FilePondPluginImagePreview);
export default {
    components: {
        FilePond
    },
    props: {
        content: {
            type: Object,
            default: () => {
                return {
                    lang: '',
                    body: ''
                }
            }
        },
        itemType: {
            type: String,
            default: 'text'
        }
    },
    data() {
        return {
            get,
            contentValue: this.content,
            myFiles: [],
            apiHost: process.env.VUE_APP_API
        }
    },
    computed: {
        altNameOrText() {
            return itemType !== 'image' ? 'textarea' : 'input'
        }
    },
    methods: {
        update(e, type) {
            this.contentValue = {
                ...this.contentValue,
                [type]: e.target.value
            }
            this.$emit('update', this.contentValue)
        },
        remove() {
            this.$emit('remove')
        },
        onFileChange(e) {
            const file = e.target.files[0];
            // console.log(file)
            this.url = URL.createObjectURL(file);
            this.$emit('upload-image', this.url);
            this.contentValue = {
                ...this.contentValue,
                file: e.target.files[0]
            }
            this.$emit('update', this.contentValue)
            console.log('uploadfile', this.contentValue)
        },
        handleFilePondInit: function() {
            console.log('FilePond has initialized');

            // FilePond instance methods are available on `this.$refs.pond`
        },
        process(fieldName, file, metadata, load, error, progress, abort) {
            console.log('start process')
            // set data
            const formData = new FormData();
            formData.append('parent_id', '0')
            formData.append('file', file, file.name)
            formData.append('create_by', '0')
            console.log('formdata created')

            // related to aborting the request
            const CancelToken = axios.CancelToken;
            const source = CancelToken.source();
            
            // the request itself
            console.log('start request')
            axios({
                method: 'post',
                url: `${process.env.VUE_APP_API}/api/file-update`,
                data: formData,
                cancelToken: source.token,
                onUploadProgress: (e) => {
                    // updating progress indicator
                    progress(e.lengthComputable, e.loaded, e.total);
                }
            }).then(response => {
                console.log('sucess')
                // passing the file id to FilePond
                console.log(response.data)
                load(response.data.id)
            }).catch((thrown) => {
                console.log('cancel')
                if (axios.isCancel(thrown)) {
                    console.log('Request canceled', thrown.message);
                } else {
                    console.log('error')
                    // handle error
                }
            });

            // Setup abort interface
            return {
                abort: () => {
                    source.cancel('Operation canceled by the user.');
                }
            };
        },
        // processxhr(fieldName, file, metadata, load, error, progress, abort, transfer, options) {
        //     console.log('start process')
        //     console.log('fieldname', fieldName)
            
        //     const filename = file.name
        //     const newName = `${Date.now()}-${file.name}` 
        //     console.log('original name', filename)
        //     console.log('new name', newName)
        //     // fieldName is the name of the input field
        //     // file is the actual file object to send
        //     const formData = new FormData();
        //     formData.append('parent_id', '0')
        //     formData.append('file', file, file.name)
        //     formData.append('create_by', '0')
            
        //     const request = new XMLHttpRequest();
        //     request.open('POST', `${process.env.VUE_APP_API}/api/file-update`)
            
        //     // Should call the progress method to update the progress to 100% before calling load
        //     // Setting computable to false switches the loading indicator to infinite mode
            
        //     request.upload.onprogress = (e) => {
        //         console.log(e)
        //         progress(e.lengthComputable, e.loaded, e.total);
        //     };
            
        //     // Should call the load method when done and pass the returned server file id
        //     // this server file id is then used later on when reverting or restoring a file
        //     // so your server knows which file to return without exposing that info to the client
            
        //     console.log('request status', request.status)
        //     console.log('request ready state', request.readyState)
            
        //     request.onload = function() {
        //         if (request.status >= 200 && request.status < 300) {
        //             // the load method accepts either a string (id) or an object
        //             console.log('ok')
        //             console.log('reqeust reponse', request)
        //             console.log('reponse', request.responseText)
        //             console.log('reponse', request.responseText.id)
        //             // this.load(request.responseText);
        //         }
        //         else {
        //             // Can call the error method if something is wrong, should exit after
        //             console.log('oh no');
        //         }
        //     };
            
        //     console.log('final', request.readyState, request.status)
        //     request.send(formData);

            
        //     // Should expose an abort method so the request can be cancelled
        //     return {
        //         abort: () => {
        //             // This function is entered if the user has tapped the cancel button
        //             request.abort();

        //             // Let FilePond know the request has been cancelled
        //             abort();
        //         }
        //     };
        // },
        revert(uniqueFileId, load, error) {
            console.log(uniqueFileId)
            
            // Should remove the earlier created temp file here
            // ...
            

            // Can call the error method if something is wrong, should exit after
            error('oh my goodness');

            // Should call the load method when done, no parameters required
            load();
        },
        load (source, load, error, progress, abort, headers) {
            console.log(source, load, error, progress, abort, headers)
            // Should request a file object from the server here
            // ...

            // Can call the error method if something is wrong, should exit after
            console.log('oh my goodness');

            // Can call the header method to supply FilePond with early response header string
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
            headers(headersString);

            // Should call the progress method to update the progress to 100% before calling load
            // (endlessMode, loadedSize, totalSize)
            progress(true, 0, 1024);

            // Should call the load method with a file object or blob when done
            load(file);

            // Should expose an abort method so the request can be cancelled
            return {
                abort: () => {
                    // User tapped cancel, abort our ongoing actions here

                    // Let FilePond know the request has been cancelled
                    abort();
                }
            };
        },
        restore (uniqueFileId, load, error, progress, abort, headers) {
            // Should get the temporary file object from the server
            // ...

            // Can call the error method if something is wrong, should exit after
            error('oh my goodness');

            // Can call the header method to supply FilePond with early response header string
            // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
            headers(headersString);

            // Should call the progress method to update the progress to 100% before calling load
            // (computable, loadedSize, totalSize)
            progress(true, 0, 1024);

            // Should call the load method with a file object when done
            load(serverFileObject);

            // Should expose an abort method so the request can be cancelled
            return {
                abort: () => {
                    // User tapped abort, cancel our ongoing actions here

                    // Let FilePond know the request has been cancelled
                    abort();
                }
            };
        }
        
    }
}
</script>
<style lang="css" >
.filepond--credits {
    display: none;
}
.filepond--drop-label {
    cursor: pointer;
}
</style>
