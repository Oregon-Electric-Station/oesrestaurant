//IMPORT JSON DATA STRING
var data = {{ menu_data|safe }};
//SET DIV TO BE POPULATED WITH DATA
var menuContainer = document.getElementById('marks');
//HOLDS OUR MAX VALUE FOR NUMBER OF ELEMENTS DISPLAYED IN LEFT PORTION OF PAGE ON WIDE SCREENS (FIRST COL-MD-6)
var leftDrawer = 0;
//HOLDS TOTAL NUMBER OF ITEMS IN EACH MENU
var menuSum = 0;
//HOLDS NUMBER OF SECTION TITLES FOR EACH MENU
var sectionCounter = 0;
//HOLDS NUMBER OF ITEMS IN EACH SECTION
var sectionItemSum = null;
//ARRAY OF NUMBER OF ITEMS IN EACH SECTION
var sectionCountArr = [];
for (i in data.menus) {
    //GET MENU HEADER NAVIGATION BAR
    var menuTopBarNav = document.getElementById("menu-top-navbar");
    //CREATE HTML LIST ELEMENT
    var menuNavListElement = document.createElement("li");
    //CREATE HTML ANCHOR ELEMENT
    var menuNavAnchorElement = document.createElement("a");
    //menuNavAnchorElement.className += 'active';
    //SET MENU NAV TEXT FOR EACH MENU
    menuNavAnchorElement.innerHTML = data.menus[i].title;
    //ATTACH/ADD THE ANCHOR ELEMENT TO THE LIST ELEMENT
    menuNavListElement.appendChild(menuNavAnchorElement);
    //SET ANCHOR TO TITLE OF MENU TO OH-SO SMOOTHLY EASE TO EACH PORTION OF THE PAGE
    //NOTE: MENU TITLES WITH " " SPACES (I.E. "DESSERT & COCKTAIL") WILL NOT EASE SO SMOOTH
    menuNavAnchorElement.setAttribute("href", "#"+data.menus[i].title);
    //ATTACH LIST ELEMENT (REMEMBER THE ANCHOR ELEMENT HAS ALREADY BEEN ATTACHED TO IT) TO THE MENU-TOP-NAVBAR UL
    menuTopBarNav.appendChild(menuNavListElement);
    //GETTING COMPLETE NUMBER OF ENTRIES IN EACH MENU
    //ALSO GETS THE NUMBER OF ITEMS IN EACH MENU'S SUBSECTION (I.E. APPETIZERS) AND SAVES THEM IN A SIMPLE ARRAY 
    //LOOP THROUGH EACH ENTRY IN THE MENU
    for(k in data.menus[i].entries) {
        //IF THE ENTRY TYPE = SECTION AND OUR ITEMSUM IS'NT EMPTY 
        //THE FIRST ITEM IN EACH MENU'S LIST IS A SECTION TITLE
        if (data.menus[i].entries[k].type == "section" && sectionItemSum != null) {
            //SEND PREVIOUS SECTION'S SUM TO ARRAY
            sectionCountArr.push(sectionItemSum);
            //SET NEXT SECTION'S SUM TO ZERO
            sectionItemSum = 0;
        } else {
            //IF NOT A SECTION TITLE THEN ADD TO THE SECTION'S INDIVIDUAL GROUP SUM
            sectionItemSum += 1;
            //AS WELL AS THE TOTAL NUMBER OF MENU ENTRIES SUM
            menuSum += 1;
        }
    }
    //TO ENSURE ON LARGE SCREENS THAT THE MENU DATA FILLS TWO COLUMNS EQUALLY
    leftDrawer = Math.floor(menuSum/2);
    //THE FOLLOWING CODE WAS AN ATTEMPT AT SEPARATING EACH SECTION WITHIN THE MENU
    // sectionCountArr = [];
    // var counter = 0;
    // for(var z in sectionCountArr) { 
    //     counter += 1;
    //     leftSum += sectionCountArr[z];
    //     // alert(leftSum);
    //     if(leftSum <= leftDrawer) {
    //         leftSum1 = leftSum + counter;
    //     }
    // }

    var sectionHeader = document.createElement("section");
    //SET MENU HEADER ID TO MENU NAME
    sectionHeader.setAttribute("id", data.menus[i].title);
    sectionHeader.className += 'row section-title first';
    menuContainer.appendChild(sectionHeader);

    var contentContainer = document.createElement("div");
    contentContainer.className += 'container';
    sectionHeader.appendChild(contentContainer);

    var bootstrap5 = document.createElement("div");
    bootstrap5.className += 'col-md-12';
    contentContainer.appendChild(bootstrap5);

    var h2 = document.createElement("h2");
    h2.innerHTML = data.menus[i].title;
    bootstrap5.appendChild(h2);

    var menuRow = document.createElement("div");
    menuRow.className += 'row bg-trans-black';
    menuContainer.appendChild(menuRow);

    var list = document.createElement("ul");
    var rightlist = document.createElement("ul");

    var contentContainer2 = document.createElement("div");
    contentContainer2.className += 'container menu-list';
    menuRow.appendChild(contentContainer2);
    
    var bootstrap6 = document.createElement("div");
    bootstrap6.className += 'col-md-6';
    contentContainer2.appendChild(bootstrap6);
    bootstrap6.appendChild(list);

    var rightDrawer = document.createElement("div");
    rightDrawer.className += 'col-md-6';
    contentContainer2.appendChild(rightDrawer);
    rightDrawer.appendChild(rightlist);

    var n = 0;

    for (j in data.menus[i].entries){
        if (n < leftDrawer) {
            var listItem = document.createElement("li");
            var itemTitle = document.createElement("h4");
            var sectionTitle = document.createElement("h3");
            var sectionUnderline = document.createElement("hr");
            var itemDesc = document.createElement("p");
            listItem.appendChild(itemTitle);
            if (data.menus[i].entries[j].type == "section") {
                sectionTitle.className += 'first';
                sectionTitle.innerHTML = data.menus[i].entries[j].name;
                listItem.appendChild(sectionTitle);
                listItem.appendChild(sectionUnderline);
                sectionCounter += 1;
            } else {
                itemTitle.innerHTML = data.menus[i].entries[j].name;
                if (data.menus[i].entries[j].desc != null) { 
                    listItem.appendChild(itemDesc);
                    itemDesc.innerHTML += data.menus[i].entries[j].desc;
                }
            }
            list.appendChild(listItem);
        } else {
            var listItem = document.createElement("li");
            var itemTitle = document.createElement("h4");
            var sectionTitle = document.createElement("h3");
            var sectionUnderline = document.createElement("hr");
            var itemDesc = document.createElement("p");
            listItem.appendChild(itemTitle);
            if (data.menus[i].entries[j].type == "section") {
                sectionTitle.className += 'first';
                sectionTitle.innerHTML = data.menus[i].entries[j].name;
                listItem.appendChild(sectionTitle);
                listItem.appendChild(sectionUnderline);
                sectionCounter += 1;
            } else {
                itemTitle.innerHTML = data.menus[i].entries[j].name;
                if (data.menus[i].entries[j].desc != null) { 
                    listItem.appendChild(itemDesc);
                    itemDesc.innerHTML += data.menus[i].entries[j].desc;
                }
            }
            rightlist.appendChild(listItem);
        }
        sectionCounter = 0;
        menuSum = 0;
        n += 1;
    }
}