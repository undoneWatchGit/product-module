<template>
    <div class="flex flex-wrap">
        <div class="flex w-full">
            <div class="w-1/3 p-2" :class="isMirror ? 'order-2': 'order-1'">
                <!-- position 1 -->
                <ModuleField
                    :contents="contents"
                    :index="0"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </div>
            <div class="w-2/3 relative p-2 flex flex-col justify-between" :class="isMirror ? 'order-1': 'order-2'" style="background: #ededed;min-height: 300px;">
                <div class="">
                    <!-- position 2 -->
                    <div class="flex items-center">
                        <ModuleField
                        class="w-full"
                            :contents="contents"
                            :index="1"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageAD"
                        />
                        <!-- <div v-if="imagePreviews.a" class="w-1/2">
                            <img :src="imagePreviews.a.desktop" alt="" style="max-width: 100%;">
                        </div>  -->
                    </div>
                    <div class="flex">
                        <ModuleField
                            class="w-full"
                            :contents="contents"
                            :index="1"
                            level="secondary"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageAM"
                        />
                        <!-- <div class="w-1/2">
                            <img :src="imagePreviews.a.mobile" alt="" style="max-width: 100%;">
                        </div> -->
                    </div>
                </div>
                <div class="">
                    <!-- position 3 -->
                    <ModuleField
                        :contents="contents"
                        :index="2"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                    />
                </div> 
            </div> 
        </div>
        <div class="w-full h-4"></div>
        <div class="flex w-full">
            <div class="w-2/3 p-2" :class="isMirror ? 'order-2': 'order-1'" style="background: #ededed;min-height: 300px;">
                <!-- position 4 -->
                <div class="flex">
                    <ModuleField
                        class="w-full"  
                        :contents="contents"
                        :index="3"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageBD"
                    />
                    <!-- <div class="w-1/2">
                        <img :src="imagePreviews.b.desktop" alt="" style="max-width: 100%;">
                    </div> -->
                </div>
                <div class="flex">
                    <ModuleField
                        class="w-full"
                        :contents="contents"
                        :index="3"
                        level="secondary"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageBM"
                    />
                
                    <!-- <div class="w-1/2">
                        <img :src="imagePreviews.b.mobile" alt="" style="max-width: 100%;">
                    </div> -->
                </div>
            </div>
            <div class="w-1/3 p-2" :class="isMirror ? 'order-1': 'order-2'">
                <!-- position 5 -->
                <ModuleField
                    :contents="contents"
                    :index="4"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </div>
        </div>
    </div>
</template>
<script>
import contentMixin from '../../mixins/contentMixin.vue'
export default {
    props: {
        isMirror: {
            type: String,
            default: "false"
        }
    },
    data() {
        return {
            imagePreviews: {
                a: {
                    desktop: '',
                    mobile: ''
                },
                b: {
                    desktop: '',
                    mobile: ''
                }
            }
        }  
    },
    methods: {
        updateImageAD(data) {
            this.imagePreviews.a.desktop = data
        },
        updateImageAM(data) {
            this.imagePreviews.a.mobile = data
        },
        updateImageBD(data) {
            this.imagePreviews.b.desktop = data
        },
        updateImageBM(data) {
            this.imagePreviews.b.mobile = data
        } 
    },
    mixins: [contentMixin]
}
</script>
