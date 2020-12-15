<template>
    <div class="flex flex-wrap">
        <!-- <div
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
        </div> -->
        <div class="w-full flex flex-col justify-between" style="background: #ededed; min-height: 300px;">
            <div class="" >
                <!-- position 1 -->
                <div class="flex">
                    <ModuleField
                        class="w-2/5"
                        :contents="contents"
                        :index="0"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageAD"
                    />
                    <div class="w-3/5">
                        <img :src="imagePreviews.a.desktop" alt="" style="max-width: 100%;">
                    </div>
                </div>
                <div class="flex">
                    <ModuleField
                    class="w-2/5"
                        :contents="contents"
                        :index="0"
                        level="secondary"
                        type="image"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                        @show-image="updateImageAM"
                    />
                    <div class="w-3/5">
                        <img :src="imagePreviews.a.mobile" alt="" style="max-width: 100%;">
                    </div>   
                </div>
            </div>
            <div class=" ">
                <div>
                    <!-- Postion 2 -->
                </div>
                <ModuleField
                    :contents="contents"
                    :index="1"
                    @update="update"
                    @remove="remove"
                    @add-content="addContent"
                />
            </div>  
        </div>
        <div class="w-full h-4"></div>
        <div class="w-full flex">
            <div class="w-1/2 " :class="isMirror ? 'order-2 ml-2': 'order-1 mr-2'">
                <div class="mb-4" style="background: #ededed;min-height: 200px;">
                    <!-- position 3 -->
                    <div class="flex">
                        <ModuleField
                            class="w-1/2"
                            :contents="contents"
                            :index="2"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageBD"
                        />
                        <div class="w-1/2">
                            <img :src="imagePreviews.b.desktop" alt="" style="max-width: 100%;">
                        </div>
                    </div>
                    <div class="flex">
                        <ModuleField
                            class="w-1/2"
                            :contents="contents"
                            :index="2"
                            level="secondary"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageBM"
                        />
                        <div class="w-1/2">
                            <img :src="imagePreviews.b.mobile" alt="" style="max-width: 100%;">
                        </div>
                    </div>
                </div>
                <div>
                    <!-- Postion 5 -->
                    <ModuleField
                        :contents="contents"
                        :index="4"
                        @update="update"
                        @remove="remove"
                        @add-content="addContent"
                    />
                </div>
            </div>   
            <div class="w-1/2" :class="isMirror ? 'order-1 mr-2': 'order-2 ml-2'">
                <div class="mb-4" style="background: #ededed;min-height: 200px;">
                    <!-- position 4 -->
                    <div class="flex">
                        <ModuleField
                            class="w-1/2"
                            :contents="contents"
                            :index="3"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageCD"
                        />
                        <div class="w-1/2">
                            <img :src="imagePreviews.c.desktop" alt="" style="max-width: 100%;">
                        </div>
                    </div>
                    <div class="flex">
                        <ModuleField
                            class="w-1/2"
                            :contents="contents"
                            :index="3"
                            level="secondary"
                            type="image"
                            @update="update"
                            @remove="remove"
                            @add-content="addContent"
                            @show-image="updateImageCM"
                        />
                        <div class="w-1/2">
                            <img :src="imagePreviews.c.mobile" alt="" style="max-width: 100%;">
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <!-- Postion 6 -->
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
        </div>
    </div>
</template>
<script>
import contentMixin from "../../mixins/contentMixin.vue";
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
                },
                c: {
                    desktop: '',
                    mobile: ''
                },
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
        },
        updateImageCD(data) {
            this.imagePreviews.c.desktop = data
        },
        updateImageCM(data) {
            this.imagePreviews.c.mobile = data
        },
    },
    mixins: [contentMixin],
};
</script>
