class MainScreen{
    constructor(){
        this.playBtn = createButton("Play")
        this.title = createElement("h1")
    }

    setElementsAttributes(){
        this.playBtn.class("gameButton");
        this.title.class("gameTitle")
        this.title.position(width/2 - 200, 200)
        this.playBtn.position(width/2 - 100, 400)
    }


    display(){
        this.setElementsAttributes()
        this.playBtn.mousePressed(() => {
            this.playBtn.hide();
            this.title.hide();
        })
    }
}