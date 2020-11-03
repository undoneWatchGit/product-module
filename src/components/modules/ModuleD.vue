<template>
    <div>
        <div class="my-3 grid grid-col gap-2">
            position 1
            <div class="flex items-center">
                <label for="" class="w-48">
                    Primary Url
                </label>
                <input
                    type="text"
                    :value="get(value, '0.primary')"
                    @input="(e) => onInput(e, '0.primary', 'text')"
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
    }
}
</script>
