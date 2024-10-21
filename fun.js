
function multiple(){
    for(i=1;i<=5;i++){
        setTimeout(function(){
            
            let main1=document.getElementById("mainDiv");
            main1.style.display="flex";
            main1.style.flexWrap="wrap";
            main1.style.gap="20px";
            main1.innerHTML +=`<div style="border:1px,solid,black;">
            <h2>Jogger</h2><img src="https://www.globalrepublic.in/cdn/shop/files/GRWS24ML052405DKOLV_1_6f442318-ecb9-42c5-8a84-1d9027449999.webp?v=1715589358" width="300"><br><button style="width:200px;">Buy Now</button></div>`
            console.log(main1);
            
        },2000*i)

    }
}
// multiple()





// function multiple(){
//     for(i=1;i<=5;i++){
//     setTimeout(function(){
//         let main1= document.getElementById("mainDiv");
//         let containerDiv= document.createElement("div");
//         containerDiv.style.display="flex";
//         containerDiv.style.flexDirection="column";
//         containerDiv.innerHTML=`
//         <h2>Jogger</h2><img src="https://www.globalrepublic.in/cdn/shop/files/GRWS24ML052405DKOLV_1_6f442318-ecb9-42c5-8a84-1d9027449999.webp?v=1715589358" width="300"><br><button style="width:200px;">Buy Now</button> `;
//         main1.appendChild(containerDiv);
//         console.log(containerDiv);

//     },2000*i)
    
// }
// }

/* <div style="display:flex;  flex-direction:colunm;"></div> */
// function multiple(){
//     setTimeout(function(){
//         let containerDiv= document.getElementById("container");
//         console.log(containerDiv)
//         containerDiv.innerHTML=`<h2>Jogger</h2><img src="https://www.globalrepublic.in/cdn/shop/files/GRWS24ML052405DKOLV_1_6f442318-ecb9-42c5-8a84-1d9027449999.webp?v=1715589358" width="300"><br><button>Buy Now</button>`
//     },2000)
// }