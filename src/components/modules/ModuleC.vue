<template>
    <div>
        <div
            v-for="(item, index) in 4"
            :key="item"
            class="my-3 grid grid-col gap-2"
        >
            <template v-if="item !== 2">
                position {{ item }}
                <ModuleField
                    :contents="contents"
                    :index="index"
                    type="image"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
                <ModuleField
                    :contents="contents"
                    :index="index"
                    level="secondary"
                    type="image"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </template>
            <template v-else>
                <div>
                    Postion {{ item }}
                </div>

                <ModuleField
                    :contents="contents"
                    :index="index"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </template>
        </div>
        <div>
            <div>
                Postion 5
            </div>
            <ModuleField
                :contents="contents"
                :index="4"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
        <div>
            <div>
                Postion 6
            </div>
            <ModuleField
                :contents="contents"
                :index="5"
                @update="update"
                @remove="remove"
                @add-content="addContent"
            />
        </div>
    </div>
</template>
<script>
import contentMixin from '@/mixins/contentMixin.vue'
export default {
    mixins: [contentMixin]
}
</script>
