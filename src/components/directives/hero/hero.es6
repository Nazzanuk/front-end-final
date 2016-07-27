app.component('heroItem', {
    templateUrl: 'hero.html',
    controllerAs: 'hero',
    bindings: {
        img: '@',
        height: '@',
        heading: '@',
        small: '='
    },
    controller: function ($element, $timeout) {
        var height = this.height ? this.height + 'px' : 'calc(100vh - 50px)';

        var getHeight = () => height;

        var init = () => {};

        init();

        _.extend(this, {
            getHeight
        });
    }
});
