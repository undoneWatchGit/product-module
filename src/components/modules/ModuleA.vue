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
            set(this.value, head(path.split('.')) + '.type', type)
            this.$emit('input', this.value)
        }
    }
}
</script>
