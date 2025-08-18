class animal{
        constructor(name,type){
            this.name=name,
            this.type=type
        }
        get name(){
            return this._name.toLowerCase();
        }

        set name(vasle){
            this._name=vasle;
        }
        get type(){
            return this._type.toUpperCase();
        }
        set type(value){
            this._type=value;
            //maximum call stack exceded error here as both are setting the thing
        }

}

const a1=new animal("kutRF","doggy");
console.log(a1.type);
console.log(a1.name);
console.log(a1);



