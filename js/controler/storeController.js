class StoreController {

    constructor() {

        let $ = document.querySelector.bind(document);
        this._homeView = new HomeView($('#itensView'));
        this._init();

    }

    _init(){
      this._homeView.update()
    }
}
