<template>
    <div>
        <div
            v-for="(item, index) in 4"
            :key="item"
            class="my-3 grid grid-col gap-2"
        >
            <template v-if="item !== 2">
                position {{ item }}
                <div class="flex items-center">
                    <label for="" class="w-48">
                        Primary image
                    </label>
                    <input
                        type="text"
                        :value="get(value, `${index}.primary`)"
                        @input="(e) => onInput(e, `${index}.primary`, 'image')"
                    />
                </div>
                <div class="flex items-center">
                    <label for="" class="w-48">
                        Secondary image
                    </label>
                    <input
                        type="text"
                        :value="get(value, `${index}.secondary`)"
                        @input="(e) => onInput(e, `${index}.secondary`, 'image')"
                    />
                </div>
            </template>
            <template v-else>
                <div>
                    Postion {{ item }}
                </div>

                <div class="flex items-center">
                    <label for="" class="w-48">
                        Primary text
                    </label>
                    <input
                        type="text"
                        :value="get(value, `${index}.primary`)"
                        @input="(e) => onInput(e, `${index}.primary`, 'text')"
                    />
                </div>
            </template>
        </div>
        <div>
            <div>
                Postion 5
            </div>

            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary text
                </label>
                <input
                    type="text"
                    :value="get(value, '4.primary')"
                    @input="(e) => onInput(e, '4.primary', 'text')"
                />
            </div>
        </div>
        <div>
            <div>
                Postion 6
            </div>

            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary text
                </label>
                <input
                    type="text"
                    :value="get(value, '5.primary')"
                    @input="(e) => onInput(e, '5.primary', 'text')"
                />
            </div>
        </div>
    </div>
</template>
<script>
import get from 'lodash/get'
import set from 'lodash/set'
import head from 'lodash/head'
export default {
    props: ['value'],
    data() {
        return {
            get,
        }
    },
    methods: {
        onInput(e, path, type) {
            const value = e.target.value
            set(this.value, path, value)
            const index = head(path.split('.'))
            set(this.value, index + '.type', type)
            set(this.value, index + '.position', +index + 1)
        },
    },
}
</script>
