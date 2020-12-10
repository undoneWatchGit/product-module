<template>
    <div class="flex flex-wrap items-center">
        <label for="" class="flex w-full capitalize mb-2" >
            {{ label ? label : `${level} ${type}` }}
            <button class="inline-block mx-2 px-2 bg-yellow-100 rounded-sm" @click="addContent(index, level)">+</button>
        </label>
        <Content
            v-for="(item, i) in get(contentData, `${index}.${level}`, [])"
            :key="`${level}-content-${i}`"
            :content="item"
            :itemType="type"
            @update="e => update(e, `${index}.${level}`, type, i)"
            @remove="remove(index, level, i)"
            @upload-image="updateImage"
        />
    </div>
</template>
<script>
import Content from './Content.vue'
import get from 'lodash/get'
export default {
    components: {
        Content
    },
    props: {
        index: {
            type: Number,
            default: 0
        },
        contents: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: 'text'
        },
        label: {
            type: String,
            default: ''
        },
        level: {
            type: String,
            default: 'primary'
        }
    },
    data() {
        return {
            get,
            contentData: this.contents
        }
    },
    watch: {
        contents(val) {
            console.log(val)
            this.contentData = val
        }
    },
    methods: {
        update(e, path, type, contentIndex) {
            const fullPath = `${path}.${contentIndex}`
            const data = {
                e,
                path: fullPath,
                type
            }
            this.$emit('update', data)
        },
        remove(index, level, contentIndex) {
            const path = `${index}.${level}`
            this.$emit('remove', { path: path, index: contentIndex })
        },
        addContent(index, level) {
            const path = `${index}.${level}`
            this.$emit('add-content', path)
            this.$forceUpdate()
        },
        updateImage(data) {
            console.log(data)
            this.$emit('show-image', data)
        }
    }
}
</script>
