<template>
    <div>
        <div class="my-3 grid grid-col gap-2">
            position 1
            <ModuleField
                :contents="contents"
                :index="0"
                label="Primary Url"
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
    mixins: [contentMixin]
}
</script>
