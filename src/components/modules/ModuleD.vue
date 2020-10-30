<template>
    <div>
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
