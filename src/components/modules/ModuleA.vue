<template>
    <div class="w-full flex moduleA">
        <div class="flex-col w-1/2 left-side" :class="isMirror ? 'order-3': 'order-1'">
            <div class="w-full border-2 border-black" style="background: #ededed;min-height: 150px;">
                    <!-- Position 1 -->
                    <div class="flex">
                        <ModuleField
                            class="w-full"
                            :contents="contentData"
                            :index="0"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageAD"
                        />
                        <!-- <div class="w-1/2">
                            <img :src="imagePreviews.a.desktop" alt="" style="max-width: 100%;">
                        </div> -->
                    </div>
                    <div class="flex">
                        <ModuleField
                            class="w-full"
                            :contents="contentData"
                            :index="0"
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
            <div class="h-4 w-full"></div>
            <div class=" w-full border-2 border-black" style="background: #ededed;min-height: 150px;">
                <!-- Position 2 -->
                <div class="flex">
                    <ModuleField
                        class="w-full"
                        :contents="contentData"
                        :index="1"
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
                        :contents="contentData"
                        :index="1"
                        level="secondary"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageBM"
                    />
                    <!-- <div class="w-1/2">
                        <img :src="imagePreviews.b.mobile" alt="" style="max-width: 100%;">
                    </div>    -->
                </div>
            </div> 
        </div>
        <div class="w-4 h-full order-2"></div>
        <div class="w-1/2 flex flex-col justify-between" :class="isMirror ? 'order-1': 'order-3'" style="background: #ededed;min-height: 300px;">
            <div class="border-2 border-black">
                <!-- Position 3 -->
                <div class="flex">
                    <ModuleField
                        class="w-full"
                        :contents="contentData"
                        :index="2"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageCD"
                    />
                    <!-- <div class="w-1/2">
                        <img :src="imagePreviews.c.desktop" alt="" style="max-width: 100%;">
                    </div>  -->
                </div>
                <div class="flex">
                    <ModuleField
                        class="w-full"
                        :contents="contentData"
                        :index="2"
                        level="secondary"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageCM"
                    />
                    <!-- <div class="w-1/2">
                        <img :src="imagePreviews.c.mobile" alt="" style="max-width: 100%;">
                    </div> -->
                </div>
            </div>
            <div class="border-2 border-black">
                Title
                <ModuleField
                    :contents="contentData"
                    :index="3"
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
            contentData: this.contents,
            imagePreviews: {
                a: {
                    desktop: '',
                    mobile: ''
                },
                b: {
                    desktop: '',
                    mobile: ''
                },
                c: {
                    desktop: '',
                    mobile: ''
                },
            }
        }
    },
    watch: {
        contents(val) {
            this.contentData = val
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
        },
        updateImageCD(data) {
            this.imagePreviews.c.desktop = data
        },
        updateImageCM(data) {
            this.imagePreviews.c.mobile = data
        },
    },
    mixins: [contentMixin]
}
</script>
