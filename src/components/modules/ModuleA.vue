<template>
    <div>
        <div v-for="(item, index) in 3" :key="item">
            <div class="my-3 grid grid-col gap-2">
                Position {{ item }}
                <div class="flex items-center">
                    <label for="" class="w-48" >
                        Primary image
                    </label>
                    <input type="text" :value="get(value[index], 'primary')" @input="e => update(e, `${index}.primary`, 'image')"/>
                </div>
                <div class="flex items-center">
                    <label for="" class="w-48" >
                        Secondary image
                    </label>
                    <input type="text"  :value="get(value[index], 'secondary')" @input="e => update(e, `${index}.secondary`, 'image')"/>
                </div>
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
                    :value="get(value[3], 'primary')"
                    @input="(e) => update(e, '3.primary', 'text')"
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
            get
        }
    },
    methods: {
        update(e, path, type) {
            set(this.value, path, e.target.value)
            const index = head(path.split('.'))
            set(this.value, index + '.type', type)
            set(this.value, index + '.position', +index + 1)
            this.$emit('input', this.value)
        }
    }
}
</script>
