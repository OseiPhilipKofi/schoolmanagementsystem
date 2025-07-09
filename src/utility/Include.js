
let observer = new ResizeObserver((entries)=>{
    entries.forEach(entry=>{
        console.log(entry);

    })

    if(document.scrollHeight > 20){
        console.log('greater than 20');
    }else{
        console.log('less than 20');
    }
});
let changebgcolor = function changebgcolor(obj){
    if(document.scrollHeight > 20){
        obj.bacgroundColor = 'white';
    }
}
export default (observer, changebgcolor);

