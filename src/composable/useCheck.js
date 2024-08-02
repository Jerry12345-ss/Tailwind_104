import { ref } from "vue";

export const useCheck = () =>{
    const isMobile = ref(false);

    const checkInnerWidth = () =>{
        if(window.innerWidth <  1024){
            isMobile.value = true
        }else{
            isMobile.value = false;
        }
    }

    return {
        isMobile,
        checkInnerWidth
    }
}