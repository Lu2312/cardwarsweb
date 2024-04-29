// save a default tab      
        (sessionStorage.getItem("tabMenu") == null) ? sessionStorage.setItem('tabMenu', 'dashboard') :  console.log('error');

        tabLi = document.querySelectorAll(".tabMenu li");
        tabs = document.querySelectorAll(".tabMenu li span");

        tabs.forEach(tab => {  
                        
            tab.addEventListener('click', function(event) {

                // save default tab
                sessionStorage.setItem('tabMenu', tab.className);              

                // not active tabs at the moment
                tabLi.forEach(t => {                       
                    t.setAttribute('class', 'tabLi');
                })

                tabContent = document.querySelectorAll(".tabContent");
                tabContent.forEach(element => {

                    // select the second class from tabContent
                    let className = (element) ? element.className.split(" ") : null;
                    // hide or show tabContent
                    (tab.className == className[1]) ? element.style.display = "block" : element.style.display = "none";
                    (tab.className == className[1]) ? tab.parentElement.setAttribute('class', 'tabLi active') : undefined;

                });
            })

            activeTab = '.'+sessionStorage.getItem("tabMenu");         
            (activeTab) ? document.querySelector(".tabMenu " + activeTab).click() : document.querySelector(
            ".tabMenu .dashboard").click();
                
        });