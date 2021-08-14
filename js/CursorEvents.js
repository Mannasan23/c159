AFRAME.registerComponent("cursor-events", {
    schema:{
        selectedItemId:{ default:"", type:"string"}
    },

    init:function(){
        this.handleMouseEnterEvents()
        this.handleMouseLeaveEvents()
        this.handleClickEvents();
    },
    handlePlacesListState:function(){
        const id= this.el.getAttribute("id");
        const placesId = ["new-york-city","taj-mahal","eiffel-tower","budapest"];
        if (placesId.includes(id)){
            const placeContainer = document.querySelector("#places-container");
            placeContainer.setAttribute("cursor-events",{
                selectedItemId:id
            })
            this.el.setAttribute("material",{
                color:"red",
                opacity:1
            })
        }
    },
    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.handlePlacesListState()
        })
    },
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave",()=>{
            const selectedItemId = this.data.selectedItemId;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id= el.getAttribute("id");
                if(id==selectedItemId){
                    el.setAttribute("material",{
                        color:"blue",
                        opacity:1
                    })
                }
            }
        })
    },
    handleClickEvents:function(){
        this.el.addEventListener("click",(evt)=>{
            const placeContainer = document.querySelector("#places-container");
            const {state} = placeContainer.getAttribute("tour");
            if(state == "places-list"){
                const id  = this.el.getAttribute("id");
                const placesId = ["new-york-city","taj-mahal","eiffel-tower","budapest"];
                if(placesId.includes(id)){
                    placeContainer.setAttribute("tour",{
                        state:"view",
                        selectedCard:id
                    })
                }
            }
        })      
    }
}) 