<template>
    <div class="w-full border-2 border-grey p-2 mb-4 rounded-sm">
        <button @click="remove" class="bg-red-400 px-2 rounded-sm text-white ml-auto mb-2">x</button>
        <div class=" w-full mb-2">
            <div class="" >
                Store Front
            </div>
            <div class="w-9/12">
                <input type="text" class="w-full" :value="get(contentValue, 'lang') ? get(contentValue, 'lang') : 'en'" @input="e => update(e, 'lang')" />
            </div>
        </div>
        <div class="flex flex-wrap w-full mb-2">
            <div class="" >
                Body (Text/URL)
            </div>
            <div class="w-9/12">
                <input type="text" class="w-full" :value="get(contentValue, 'body')" @input="e => update(e, 'body')" />
            </div>
        </div>
        <div v-if="itemType === 'image'" class=" w-full mb-2">
            <div class="" >
                Alt Name
            </div>
            <div class="w-9/12">
                <input type="text" class="w-full" :value="get(contentValue, 'alt')" @input="e => update(e, 'alt')" />
            </div>
        </div>
        <div v-if="itemType === 'image'" class="flex flex-wrap w-full mb-2">
            <div class="" >
                Image
            </div>
            <div class="">
                <input type="file" class="w-full" @change="onFileChange" />
            </div>
        </div>
        
    </div>
</template>

<script>
import get from 'lodash/get'
export default {
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
            contentValue: this.content
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
            console.log(file)
            this.url = URL.createObjectURL(file);
            this.$emit('upload-image', this.url);
            this.contentValue = {
                ...this.contentValue,
                file: e.target.files[0]
            }
        }
    }
}
</script>
