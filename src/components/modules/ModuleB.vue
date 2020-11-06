<template>
    <div>
        <div class="my-3 grid grid-col gap-2">
            position 1
            <ModuleField
                :contents="contents"
                :index="0"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 2
            <ModuleField
                :contents="contents"
                :index="1"
                type="image"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
            <ModuleField
                :contents="contents"
                :index="1"
                level="secondary"
                type="image"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 3
            <ModuleField
                :contents="contents"
                :index="2"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 4
            <ModuleField
                :contents="contents"
                :index="3"
                type="image"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
            <ModuleField
                :contents="contents"
                :index="3"
                level="secondary"
                type="image"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 5
            <ModuleField
                :contents="contents"
                :index="4"
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
