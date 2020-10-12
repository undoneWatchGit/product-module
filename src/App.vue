<template>
    <div class="product-module mx-auto w-9/12 p-4">
        <div v-if="updateSuccess" class="fixed w-full bg-green-400 top-0 left-0 py-4 text-center">
          update success
        </div>
        <template v-if="selectedModules.length">
            <div v-for="(module, index) in selectedModules" :key="index" class="border my-4 p-4">
              <Section :module="module" :options="options" @updateUrl="e => updateModuleUrl(e, index)"/>
              <button class="border px-2 bg-red-400 text-white" @click="remove(index)">remove</button>
            </div>
            <button class="border px-2 bg-green-500 text-white uppercase" @click="save">save</button>
        </template>
        <div class="my-2">
          <button class="border px-2 bg-blue-400 uppercase" @click="newModule">new</button>
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
        default: 'new-line'
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
          await axios.put(`http://localhost:8080/api/module/${this.slug}`, {
            slug: this.slug,
            modules: this.selectedModules.map((module,arrange) => ({
              ...module,
              arrange
            }))
          })
          this.updateSuccess = true
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
            'http://localhost:8080/api/module/' + this.slug
        )
        if (data.modules) {
          this.selectedModules = data.modules
        }
    },
}
</script>
