<template>
    <div class="product-module SctoGroteskA">
      <div class="mx-auto w-full md:w-9/12 p-4">
        <div v-if="updateSuccess" class="fixed w-full bg-green-400 top-0 left-0 py-4 text-center">
          update success
        </div>
        <template v-if="selectedModules.length">
          <div v-for="(module, index) in selectedModules" :key="index" class="border my-4 p-4">
            <Section :module="module" :options="options" @updateUrl="e => updateModuleUrl(e, index)" />
            <button class="border py-2 px-4 bg-red-400 text-white" @click="remove(index)">remove</button>
          </div>
          <button class="border py-2 px-4 bg-green-500 text-white uppercase" @click="save">save</button>
        </template>
        <div class="my-2">
          <button class="border px-2 bg-blue-400 uppercase" @click="newModule">new</button>
        </div>
      </div>
    </div>
</template>
<script>
import set from 'lodash/set'
import find from 'lodash/find'
import map from 'lodash/map'
import head from 'lodash/head'
import axios from 'axios'
import libs from './components/libs'
import Section from './components/Section'

export default {
    props: {
      slug: {
        type: String,
        default: 'topawards'
      }
    },
    data() {
        return {
            selectedModules: [],
            updateSuccess: false
        }
    },
    watch: {
      updateSuccess(val) {
        if (val) {
          setTimeout(() => {
            this.updateSuccess = false
          }, 1000);
        }
      }
    },
    components: {
        Section
    },
    methods: {
      async save() {
        try {
          const modules = this.selectedModules.map((module,arrange) => ({
            ...module,
            arrange
          }))
          await axios.put(`${process.env.VUE_APP_MONGO_API}/api/module/${this.slug}`, {
            slug: this.slug,
            modules: modules
          })
          this.updateSuccess = true
          this.$emit('update', modules)
        } catch (error) {
          console.log(error)
        }
      },
      newModule() {
        const firstModule = head(libs)
        this.selectedModules.push({...firstModule, data: []})
      },
      updateModuleUrl(url, index) {
        set(this.selectedModules, `${index}.url`, url)
      },
      remove(index) {
        this.selectedModules.splice(index, 1)
      }
    },
    computed: {
      options() {
        return map(libs, 'name')
      }
    },
    async mounted() {
        const { data } = await axios.get(
            `${process.env.VUE_APP_MONGO_API}/api/module/${this.slug}`
        )
        if (data.modules) {
          this.selectedModules = data.modules
        }
    },
}
</script>
<style>
.product-module input {
    @apply border rounded-sm py-1 px-2 flex-grow shadow-inner !important;
}
.product-module input:focus {
    @apply outline-none !important;
}
.product-module select {
    @apply border rounded-sm !important;
}
.product-module .bg-green-500 {
  background-color: rgb(19, 206, 102);
}
</style>