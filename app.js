document.addEventListener('alpine:init',()=>{
    Alpine.data('dropdown',()=>({
        open: false,

        toggle() {
            this.open = ! this.open
        }
    })),
    Alpine.data('drpd_att',()=>({
        open: false,

        trigger: {
            ['x-on:click']() {
                this.open = ! this.open
            }
        },
        
        dialogue: {
            ['x-show']() {
                return this.open
            }
        }
    }))
})