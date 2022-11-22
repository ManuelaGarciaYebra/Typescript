function kindData <T>(argument: T){
    return argument
}
let string = kindData('Hello');
let number = kindData(100);
let explicit = kindData<string>('Hello World');


//T -> cualquier tipo
