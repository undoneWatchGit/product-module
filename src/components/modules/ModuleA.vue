<template>
    <div>
        <div v-for="(item, index) in 3" :key="`moduleA-${index}`">
            <div class="my-3 grid grid-col gap-2">
                Position {{ item }}
                <ModuleField
                    :contents="contentData"
                    :index="index"
                    type="image"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
                <ModuleField
                    :contents="contentData"
                    :index="index"
                    level="secondary"
                    type="image"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </div>
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 4
            
            <ModuleField
                :contents="contentData"
                :index="3"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
    </div>
</template>
<script>
import contentMixin from '../../mixins/contentMixin.vue'
export default {
    data() {
        return {
            contentData: this.contents
        }
    },
    watch: {
        contents(val) {
            this.contentData = val
        }
    },
    mixins: [contentMixin]
}
</script>
