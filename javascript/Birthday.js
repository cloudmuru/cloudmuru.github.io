(() => {
    const tabs = {
        $button: document.querySelectorAll('.tab-menu__button'),
        $panel: document.querySelectorAll('.tab-panel'),
        init() {
            for ( let i = 0; i < this.$button.length; i++ ) {
                let button = this.$button[i];
                let panel = this.$panel[i];

                button.addEventListener('click', () => {
                    document.querySelector('.tab-menu__button.is-active').classList.remove('is-active');
                    document.querySelector('.tab-panel.is-active').classList.remove('is-active');
                    button.classList.add('is-active');
                    panel.classList.add('is-active');
                });
            }
        }
    } 
    tabs.init();
})();