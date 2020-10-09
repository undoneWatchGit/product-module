<template>
    <div>
        <select name="" id="" v-model="module.name" class="w-64 py-2">
            <option v-for="item in options" :key="item" :value="item">
                {{ item }}
            </option>
        </select>
        <div>
            <div>
                <label for="is-mirror">
                    Is Mirror
                </label>
                <input
                    type="checkbox"
                    name=""
                    v-model="module.mirror"
                    id="is-mirror"
                />
            </div>
            <div>
                <component :is="module.name" v-model="module.data" />
            </div>
        </div>
    </div>
</template>
<script>
import get from 'lodash/get'
import find from 'lodash/find'
import ModuleA from './modules/ModuleA'
import ModuleB from './modules/ModuleB'
import ModuleC from './modules/ModuleC'
import libs from './libs'
export default {
    props: ['module', 'options'],
    components: {
        ModuleA,
        ModuleB,
        ModuleC
    },
    watch: {
        'module.name'(e) {
            this.$emit('updateUrl', get(find(libs, ['name', e]), 'url'))
        }
    }
}
</script>
