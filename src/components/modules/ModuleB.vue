<template>
    <div>
        <div class="my-3 grid grid-col gap-2">
            position 1
            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary text
                </label>
                <input
                    type="text"
                    :value="get(value, '0.primary')"
                    @input="(e) => onInput(e, '0.primary', 'text')"
                />
            </div>
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 2
            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary image
                </label>
                <input
                    type="text"
                    :value="get(value, '1.primary')"
                    @input="(e) => onInput(e, '1.primary', 'image')"
                />
            </div>
            <div class="flex items-center">
                <label for="" class="w-48">
                    secondary image
                </label>
                <input
                    type="text"
                    :value="get(value, '1.secondary')"
                    @input="(e) => onInput(e, '1.secondary', 'image')"
                />
            </div>
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 3
            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary image
                </label>
                <input
                    type="text"
                    :value="get(value, '2.primary')"
                    @input="(e) => onInput(e, '2.primary', 'image')"
                />
            </div>
            <div class="flex items-center">
                <label for="" class="w-48">
                    secondary image
                </label>
                <input
                    type="text"
                    :value="get(value, '2.secondary')"
                    @input="(e) => onInput(e, '2.secondary', 'image')"
                />
            </div>
        </div>
        <div class="my-3 grid grid-col gap-2">
            position 4
            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary text
                </label>
                <input
                    type="text"
                    :value="get(value, '3.primary')"
                    @input="(e) => onInput(e, '3.primary', 'text')"
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
