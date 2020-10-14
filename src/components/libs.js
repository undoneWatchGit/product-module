export default [
    {
        name: 'ModuleA',
        url: process.env.VUE_APP_MODULEA || 'http://a.js',
        mirror: false
    },
    {
        name: 'ModuleB',
        url: process.env.VUE_APP_MODULEB || 'http://b.js',
        mirror: false
    },
    {
        name: 'ModuleC',
        url: process.env.VUE_APP_MODULEC || 'http://c.js',
        mirror: false
    }
]
