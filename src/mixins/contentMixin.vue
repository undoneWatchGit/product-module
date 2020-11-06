<script>
import get from 'lodash/get'
import set from 'lodash/set'
import head from 'lodash/head'
import ModuleField from '../components/ModuleField.vue'
export default {
    components: {
        ModuleField
    },
    props: ['value'],
    data() {
        return {
            get,
            contents: []
        }
    },
    mounted() {
        this.contents = this.value // module.data
    },
    methods: {
        update({ e, path, type }) {
            const index = head(path.split('.'))
            set(this.contents, `${path}`, e)
            set(this.contents, index + '.type', type)
            set(this.contents, index + '.position', +index + 1)
            this.$emit('input', this.contents)
        },
        addContent(path) {
            const data = [
                ...get(this.contents, path, []),
                {
                    lang: '',
                    body: ''
                }
            ]
            set(this.contents, path, data)
        },
        remove({ path, index }) {
            const content = [...get(this.contents, path)]
            content.splice(index, 1)
            set(this.contents, `${path}`, content)
        }
    }
}
</script>
