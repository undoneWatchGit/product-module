<template>
    <div class="w-full border-2 border-grey p-2 mb-4 rounded-sm">
        <button @click="remove" class="bg-red-400 px-2 rounded-sm text-white ml-auto mb-2">x</button>
        <div class="flex flex-wrap w-full mb-2">
            <div class="w-1/5 block" >
                Lang
            </div>
            <div class="block w-4/5">
                <input type="text" class="w-full" :value="get(contentValue, 'lang')" @input="e => update(e, 'lang')" />
            </div>
        </div>
        <div class="flex flex-wrap w-full mb-2">
            <div class="w-1/5 block" >
                Body
            </div>
            <div class="block w-4/5">
                <input type="text" class="w-full" :value="get(contentValue, 'body')" @input="e => update(e, 'body')" />
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
        }
    }
}
</script>
