document.addEventListener("DOMContentLoaded", () => {
    // Fetch data from the REST countries API
    const pageLoadingSpinner = document.getElementById("page-loading-spinner");
    pageLoadingSpinner.style.display = "block";
    
    let QuranApi = "https://api.alquran.cloud/v1/quran/ar.asad";
    const dropdownbtn = document.getElementById("dropdown-btn")
    const arabicbtn = document.getElementById("Arabic-selection")
    const englishbtn = document.getElementById("English-selection")
    
    // arabicbtn.addEventListener("click",()=>{
    //     console.log("clicked")
    //     QuranApi ="https://api.alquran.cloud/v1/quran/ar.asad"
    // })
  
    let fetchcall = fetch(QuranApi)
        .then((res) => res.json())
        .then((alldata) => {
            
          // Hide the loading spinner after fetching data
          pageLoadingSpinner.style.display = "none";

            const containerdiv =  document.createElement("div")
            document.body.appendChild(containerdiv)
            containerdiv.className = "container text-center"

  
            const heading  = containerdiv.appendChild(document.createElement("h1"))
            heading.textContent = "Al-Quran"

            const rowdiv = containerdiv.appendChild(document.createElement("div"))
            rowdiv.className = "row"
            rowdiv.id ="row-div"
            for(let i = 0; i<alldata.data.surahs.length; i++){
                // console.log(alldata.data.surahs[i])
                const carddiv = rowdiv.appendChild(document.createElement("div"))
                carddiv.className ="card text-center mb-3 col-sm-6 col-md-12"
                carddiv.id = "surah-name-div";
                
                cardbodydiv =carddiv.appendChild(document.createElement("div"))
                cardbodydiv.className = "card-body"

                const SurahNameEnglish = cardbodydiv.appendChild(document.createElement("h3"))
                SurahNameEnglish.textContent = alldata.data.surahs[i].englishName  
                SurahNameEnglish.className =" card-title p-surah-name" 
            
            
                const SurahNameArabic= cardbodydiv.appendChild(document.createElement("h3"))
                SurahNameArabic.textContent= alldata.data.surahs[i].name;

                const getsurahbutton = cardbodydiv.appendChild(document.createElement("button"))
                getsurahbutton.className ="btn btn-success"
                getsurahbutton.textContent ="Get surah"
                getsurahbutton.id = "get-surah-btn";

                const popupoverlay = containerdiv.appendChild(document.createElement("div"));
                popupoverlay.className = "popupoverlay";
                
                const forclosebuttondiv  = carddiv.appendChild(document.createElement("div"))
                forclosebuttondiv.id = "for-close-button"

                
                const closebuttondiv =forclosebuttondiv.appendChild(document.createElement("div"))
                closebuttondiv.className = "rounded-3"
                closebuttondiv.id = "close-button-div"
          
                const closebutton = closebuttondiv.appendChild(document.createElement("button"))
                closebutton.className="btn-close"
                closebutton.id="close-button"

                
                const ayahcontainerdiv = carddiv.appendChild(document.createElement("div"))
                ayahcontainerdiv.id = "ayah-container-div"
                ayahcontainerdiv.className = "rounded-3"
                ayahcontainerdiv.style.display = "none"

                
                if(ayahcontainerdiv.style.display==="none"){
                    closebuttondiv.style.display="none"

                }else{
                    closebuttondiv.style.display="block"
                    forclosebuttondiv.style.display="block"
                }

                    closebutton.addEventListener("click", ()=>{
                    ayahcontainerdiv.style.display = "none"
                    closebuttondiv.style.display="none"
                    forclosebuttondiv.style.display="none"
                })
                
                

                // Call the async function here

                getsurahbutton.addEventListener("click", ()=>{
                    ayahcontainerdiv.innerHTML="";
                    for (let j=0; j<alldata.data.surahs[i].ayahs.length; j++){
                        console.log(alldata.data.surahs[i].ayahs[j].text)

                        ayahcontainerdiv.style.display = "block"
                        closebuttondiv.style.display ="block"
                        forclosebuttondiv.style.display ="flex"
                        
                        

                        const ayahrowdiv  =ayahcontainerdiv.appendChild(document.createElement("div"))
                        ayahrowdiv.className ="row"
                        ayahrowdiv.style.margin ="1em"
                        // ayahrowdiv.textContent =alldata.data.surahs[i].ayahs[j].text
                        
                       const popupbox = ayahrowdiv.appendChild(document.createElement("div"));
                       popupbox.className = "popupbox";
                       popupbox.textContent =alldata.data.surahs[i].ayahs[j].text

                        // popupoverlay.style.display = "block";
                        popupbox.style.display = "block"
                        
                    };
                    const backbutton = ayahcontainerdiv.appendChild(document.createElement("button"))
                    backbutton.className ="btn btn-success"
                    backbutton.textContent ="Back"
                    backbutton.id = "back-btn";


                    backbutton.addEventListener("click", ()=>{
                        ayahcontainerdiv.style.display = "none"
                        backbutton.style.display="none"
                        forclosebuttondiv.style.display="none"
                        
                    })
              
                }) 
                // getsurahbutton.addEventListener("click", async () => {
                //     try {
                //         const Ayahresponse = await getsurah(alldata.data.surahs[i]);
                //         console.log(Ayahresponse);
                //     } catch (err) {
                //         console.log("Error fetching surah information:", err);
                //     }
                // });
            };
        });
        
        
})

// async function getsurah(ayah) {
//     let ayahObJ = await fetch(`https://api.alquran.cloud/v1/quran/en.asad/surah/${ayah}`);
//     let response = await ayahObJ.json();
//     return response;
// }
