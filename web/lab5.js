
function swap(items, one, two){
    const t = items[one];
    items[one] = items[two];
    items[two] = t;
}

function partition(items, left, right) {
    let pivot = items[Math.floor((right + left) / 2)],
        i = left,
        j = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right) {
    let index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

function min(item) {
    arr=quickSort(item,0,item.length-1);
    return arr[0];
}
function max(item) {
    arr=quickSort(item,0,item.length-1);
    return arr[arr.length-1];
}
function median(item){
    arr=quickSort(item,0,item.length-1);
    if (arr.length % 2 == 1){
        return (arr[parseInt(arr.length / 2)])}
    else{
        return (arr[arr.length / 2 -1] + arr[arr.length / 2])*0.5}
}
function create(max){
    let arr=[];
    for(let i=0;i<max;i++){
        arr[i]=Math.floor(Math.random() * (max+1));
    }
    return arr;
}

let items1=create(10);
let items2=create(1000);
document.write("Начальные массивы:" + "<br/>");
document.write(items1+"<br/>");
document.write(items2+"<br/>");
document.write("MIN MAX MEDIANA:" + "<br/>");
document.write(min(items1)+" "+max(items1)+" "+median(items1)+"<br/>");
let result = quickSort(items1, 0, items1.length - 1);
document.write(result+"<br/>");
result = quickSort(items2, 0, items2.length - 1);
document.write(result+"<br/>"+"<br/>");

// 4 ЗАДАНИЕ
function createTagsArr(tags){
    let arr=[];
    for(let i=0;i<tags.length;i++){
        arr[i]=tags[i].tagName;
    }
    return arr;
}
function numTags(arr){
    let ans=1;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=arr[i+1]){
            document.write(arr[i]+"-"+ans+"<br/>");
            ans=1;
        }
        else{
            ans=ans+1;
        }
    }
}


let items =createTagsArr(document.getElementsByTagName('*'));
document.write("Теги:"+"<br/>"+items+"<br/>");
let result1 = quickSort(items, 0, items.length - 1);
document.write("Теги отсортированы:"+"<br/>"+result1+"<br/>");
numTags(result1);

