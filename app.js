const vueApp = Vue.createApp({
    data() {
        return {
            perspective: 500,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
        };
    },
    methods: {
        reset() {
            this.perspective = 500;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const element = document.createElement('textarea');

            element.setAttribute('readonly', '')
            element.style.position = '-9999px';
            element.value = `transform: ${this.boxProperties.transform}`;

            document.body.appendChild(element);
            element.select();
            document.execCommand('copy');
            document.body.removeChild(element);
        }
    },
    computed: {
        boxProperties() {
            return {
                transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`
            };
        }
    }
}).mount("#app");