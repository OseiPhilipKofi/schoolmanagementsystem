export default function ScrollingObserver(obj) {
        if(window.pageYOffset > 0){
            obj.setAttribute("style", "box-shadow: 0 0 10px rgba(0,0,0, 0.3);background: var(--gradientBackground);background-size: 180%; background-position: right top;");
        }else{
            obj.setAttribute("style", "background-color :transparent");
        }
}
