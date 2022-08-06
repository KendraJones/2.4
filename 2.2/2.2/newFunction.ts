export function myFunction(myNum: number): string {
    if (myNum == 5) {
        return 'true'
    } else if(myNum < 5 && myNum >= 0) {
        return 'false'
    }else if (myNum > 5){
        return 'big'
    }else {
        return 'negative'
    }
}

/*export function myFunction(myNum: number): string {
    switch(myNum){
        case 5:
            return "true";
            break;
        case 1:
            return "false";
            break;
        case 100:
            return "big";
            break;
        default:
            return "negative";
            break;
    }
}*/