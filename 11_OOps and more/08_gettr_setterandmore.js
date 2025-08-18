class animal{
        constructor(name,type){
            this.name=name,
            this.type=type
        }
        get type(){
            return this.type;
        }
        set type(value){
            this.type=value;
        }
}

const a1=new animal("kutra","doggy");

