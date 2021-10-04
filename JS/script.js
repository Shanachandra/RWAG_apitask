var api_key='e3613609900540388f3d7b4b2773e397'
var url='https://api.rawg.io/api/'
async function getGameData(endpoint,headval)
{    
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }
      var result=await fetch(url+`${endpoint}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    for(var i=0;i<jsondata.results.length;i++)
    {
        var col=document.createElement('div')
        col.classList.add('col-sm-12')
        col.classList.add('col-md-6')
        col.classList.add('col-lg-3')
        col.classList.add('allcol')
        var coldiv=document.createElement('div')
        coldiv.classList.add('col-div')
        
        var card=document.createElement('div')
        card.classList.add('card')
       // card .setAttribute('style','1.8rem')
        card.classList.add('bg-dark')
        card.classList.add('e-card')
        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        card.classList.add('e-cardbody')
        var h5ele=document.createElement('h5')
        h5ele.classList.add('card-title')
        h5ele.classList.add('e-title')       
        h5ele.innerHTML=jsondata.results[i].name
        var p=document.createElement('p')
        p.innerHTML="To check the creator information click the creator link in sidebar"
        p.classList.add('para')
        cardbody.append(h5ele,p)
        card.append(cardbody)
        coldiv.append(card)
        col.append(coldiv)
    //     <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
        row.append(col)
        container.append(row)
        identity.append(container)

            console.log(jsondata.results[i].name)
    }

}
//getGameData('creator-roles','Creator Roles')



async function getCreatorsData(endpoint,headval)
{    
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }

      console.log('removed')
      var result=await fetch(url+`${endpoint}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    for(var i=0;i<jsondata.results.length;i++)
    {
        var col=document.createElement('div')
        col.classList.add('col-sm-12')
        col.classList.add('col-md-6')
        col.classList.add('col-lg-4')
        col.classList.add('allcol')
        var coldiv=document.createElement('div')
        coldiv.classList.add('col-div')
        
        var card=document.createElement('div')
        card.classList.add('card')
        card.classList.add('mx-auto')
        card.setAttribute('style','width:18rem')
       // card .setAttribute('style','1.8rem')
        card.classList.add('bg-dark')
        card.classList.add('e-card')
        var img=document.createElement('img')
        img.src=jsondata.results[i].image
        img.classList.add('card-img-top')
        img.classList.add('imgstyle')
        card.append(img)

        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        cardbody.classList.add('e-creatorbody')
        var h5ele=document.createElement('h5')
        h5ele.classList.add('card-title')
        h5ele.classList.add('e-title')       
        h5ele.innerHTML=jsondata.results[i].name       


        var hoverdiv=document.createElement('div')
        
        var hoveridicon=document.createElement('i')
        hoveridicon.classList.add('fa')
        hoveridicon.classList.add('fa-id-badge')   
              
        var hoverid=document.createElement('span')
        hoverid.classList.add('hoverid')
        hoverid.innerHTML=`TagId: ${jsondata.results[i].id}`
        hoverdiv.append(hoveridicon,hoverid)
        var brk=document.createElement('br')
        hoverid.append(brk)

        //position
        var hoverpositionicon=document.createElement('i')
        hoverpositionicon.classList.add('fa')
        hoverpositionicon.classList.add('fa-briefcase')
        
        var hoverposition=document.createElement('span')
        hoverposition.classList.add('hoverid')
        var spandata='Position: ';
        console.log(jsondata.results[i].positions)
        for(var j=0;j<jsondata.results[i].positions.length;j++)
        {
            console.log(jsondata.results[i].positions[j].name)
            spandata=spandata+jsondata.results[i].positions[j].name+" "

        }
        hoverposition.innerHTML=spandata
        var brk1=document.createElement('br')
        hoverid.append(brk1)
        var butdiv=document.createElement('div')
        butdiv.classList.add('buttondiv')
        var button=document.createElement('button')
        button.setAttribute('type','button')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.classList.add('btn-block')
        button.classList.add('align-self-end')
        button.setAttribute('onclick',`getcreatordetail(${jsondata.results[i].id})`)
        button.innerHTML="Know More"
        butdiv.append(button)
        hoverdiv.append(hoverpositionicon,hoverposition,butdiv)
        hoverdiv.classList.add('creator')
        cardbody.append(h5ele,hoverdiv)
        card.append(cardbody)
        coldiv.append(card)
        col.append(coldiv)
    //     <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
        row.append(col)
        container.append(row)
        identity.append(container)

           // console.log(jsondata.results[i].name)
    }

}
 //getCreatorsData('creators','Creator Roles')

async function getcreatordetail(value)
{
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }
      
     
    let specificid='https://api.rawg.io/api/creators/'
    var result=await fetch(specificid+`${value}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container= document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    var col1=document.createElement('div')
    col1.classList.add('col-lg-3')
    col1.classList.add('col-md-6')
    col1.classList.add('col-sm-12')
    var img=document.createElement('img')
    img.setAttribute('src',jsondata.image)
    img.setAttribute('style','width:100%')
    col1.append(img)
    var col2=document.createElement('div')
    col2.classList.add('col-lg-9')
    col2.classList.add('col-md-6')
    col2.classList.add('col-sm-12')
    var h3name=document.createElement('h3')
    h3name.innerHTML='Name: '+jsondata.name
    var desc=document.createElement('p')
    desc.innerHTML=jsondata.description;
    col2.append(h3name,desc)
    row.append(col1,col2)
   
    container.append(row)
    identity.append(container)
    // var ratingcontainer=document.createElement('div')
    // ratingcontainer.classList.add('container-fluid')
    var ratingrow=document.createElement('div')
    ratingrow.classList.add('row')
    var ratingcol1=document.createElement('div')
    ratingcol1.classList.add('col-lg-3')
    ratingcol1.classList.add('col-md-12')
    ratingcol1.classList.add('col-sm-3')
    var rating=document.createElement('h3')
    rating.innerHTML="Rating:"
    var ratingtop=document.createElement('ul')
    var ratli=document.createElement('li')
    ratli.classList.add('ratli')
    ratli.innerHTML=jsondata.rating+'/'+jsondata.rating_top
    ratingtop.append(ratli)
    ratingcol1.append(rating,ratingtop)
    ratingrow.append(ratingcol1)
    col2.append(ratingrow)
    // ratingcontainer.append(ratingrow)
    // identity.append(ratingcontainer)

    
    var platformcol=document.createElement('div')
    platformcol.classList.add('col-lg-3')
    platformcol.classList.add('col-md-12')
    platformcol.classList.add('col-sm-3')
    var platform=document.createElement('h3')
    platform.innerHTML="Platforms:"
    platformcol.append(platform)
    for(var ele=0;ele<jsondata.platforms.results.length;ele++)
    {
        var platdata=document.createElement('ul')
        var paltdatali=document.createElement('li')
        paltdatali.classList.add('platdatali')
        paltdatali.innerHTML=jsondata.platforms.results[ele].platform.name
        platdata.append(paltdatali)
        platformcol.append(platdata)
    }
    ratingrow.append(platformcol)
    //ratingcontainer.append(ratingrow)
    col2.append(ratingrow)
    //identity.append(ratingcontainer)




    
}




async function getGamedetail(endpoint)
{    
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }

      console.log(endpoint)
      var result=await fetch(url+`${endpoint}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    for(var i=0;i<jsondata.results.length;i++)
    {
        var col=document.createElement('div')
        col.classList.add('col-sm-12')
        col.classList.add('col-md-6')
        col.classList.add('col-lg-4')
        col.classList.add('allcol')
        var coldiv=document.createElement('div')
        coldiv.classList.add('col-div')
        
        var card=document.createElement('div')
        card.classList.add('card')
        card.classList.add('mx-auto')
        card.setAttribute('style','width:18rem')
       // card .setAttribute('style','1.8rem')
        card.classList.add('bg-dark')
        card.classList.add('e-card')
        var img=document.createElement('img')
        img.src=jsondata.results[i].background_image
        img.classList.add('card-img-top')
        img.classList.add('imgstyle')
        card.append(img)

        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        cardbody.classList.add('e-creatorbody')
        var h5ele=document.createElement('h5')
        h5ele.classList.add('card-title')
        h5ele.classList.add('e-title')       
        h5ele.innerHTML=jsondata.results[i].name       


        var hoverdiv=document.createElement('div')
        
        var hoveridicon=document.createElement('i')
        hoveridicon.classList.add('fa')
        hoveridicon.classList.add('fa-id-badge')   
              
        var hoverid=document.createElement('span')
        hoverid.classList.add('hoverid')
        hoverid.innerHTML=`TagId: ${jsondata.results[i].id}`
        hoverdiv.append(hoveridicon,hoverid)
        var brk=document.createElement('br')
        hoverid.append(brk)

        //position
        var hoverpositionicon=document.createElement('i')
        hoverpositionicon.classList.add('fa')
        hoverpositionicon.classList.add('fa-briefcase')
        
        var hoverposition=document.createElement('span')
        hoverposition.classList.add('hoverid')
        var spandata='Platforms: ';
        console.log(jsondata.results[i].platforms)
        for(var j=0;j<jsondata.results[i].platforms.length;j++)
        {
            if(j==0)
            {
                spandata=spandata+jsondata.results[i].platforms[j].platform.name
            }
            console.log(jsondata.results[i].platforms[j].platform.name)
            spandata=spandata+" ,"+jsondata.results[i].platforms[j].platform.name

        }
        hoverposition.innerHTML=spandata
        var brk1=document.createElement('br')
        hoverid.append(brk1)
        var butdiv=document.createElement('div')
        butdiv.classList.add('buttondiv')
        var button=document.createElement('button')
        button.setAttribute('type','button')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.classList.add('btn-block')
        button.classList.add('align-self-end')
        button.setAttribute('onclick',`getGameiddetail(${jsondata.results[i].id})`)
        button.innerHTML="Know More"
        butdiv.append(button)
        hoverdiv.append(hoverpositionicon,hoverposition,butdiv)
        hoverdiv.classList.add('creator')
        cardbody.append(h5ele,hoverdiv)
        card.append(cardbody)
        coldiv.append(card)
        col.append(coldiv)
    //     <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
        row.append(col)
        container.append(row)
        identity.append(container)

           // console.log(jsondata.results[i].name)
    }

}




async function getGameiddetail(value)
{
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }
      
     
    let specificid='https://api.rawg.io/api/games/'
    var result=await fetch(specificid+`${value}?key=`+api_key)
    var jsondata=await result.json();
    //console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container= document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    var col1=document.createElement('div')
    col1.classList.add('col-lg-3')
    col1.classList.add('col-md-6')
    col1.classList.add('col-sm-12')
    console.log(jsondata)
    var img=document.createElement('img')
    img.setAttribute('src',jsondata.background_image)
    img.setAttribute('style','width:100%')
    col1.append(img)
    var col2=document.createElement('div')
    col2.classList.add('col-lg-9')
    col2.classList.add('col-md-6')
    col2.classList.add('col-sm-12')
    var h3name=document.createElement('h3')
    h3name.innerHTML='Name: '+jsondata.name
    var desc=document.createElement('p')
    desc.innerHTML=jsondata.description;
    col2.append(h3name,desc)
    row.append(col1,col2)
   
    container.append(row)
    identity.append(container)
    // var ratingcontainer=document.createElement('div')
    // ratingcontainer.classList.add('container-fluid')
    var ratingrow=document.createElement('div')
    ratingrow.classList.add('row')
    var ratingcol1=document.createElement('div')
    ratingcol1.classList.add('col-lg-3')
    ratingcol1.classList.add('col-md-12')
    ratingcol1.classList.add('col-sm-3')
    var rating=document.createElement('h3')
    rating.innerHTML="Rating:"
    var ratingtop=document.createElement('ul')
    var ratli=document.createElement('li')
    ratli.classList.add('ratli')
    ratli.innerHTML=jsondata.rating+'/'+jsondata.rating_top
    ratingtop.append(ratli)
    ratingcol1.append(rating,ratingtop)
    ratingrow.append(ratingcol1)
    col2.append(ratingrow)
    // ratingcontainer.append(ratingrow)
    // identity.append(ratingcontainer)

    
    var platformcol=document.createElement('div')
    platformcol.classList.add('col-lg-3')
    platformcol.classList.add('col-md-12')
    platformcol.classList.add('col-sm-3')
    var platform=document.createElement('h3')
    platform.innerHTML="Platforms:"
    platformcol.append(platform)
    for(var ele=0;ele<jsondata.metacritic_platforms.length;ele++)
    {
        var platdata=document.createElement('ul')
        var paltdatali=document.createElement('li')
        paltdatali.classList.add('platdatali')
        paltdatali.innerHTML=jsondata.metacritic_platforms[ele].platform.name
        platdata.append(paltdatali)
        platformcol.append(platdata)
    }
    ratingrow.append(platformcol)
    //ratingcontainer.append(ratingrow)
    col2.append(ratingrow)
    //identity.append(ratingcontainer)




    
}

async function getStoresData(endpoint)
{    
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }
      var result=await fetch(url+`${endpoint}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    for(var i=0;i<jsondata.results.length;i++)
    {
        var col=document.createElement('div')
        col.classList.add('col-sm-12')
        col.classList.add('col-md-6')
        col.classList.add('col-lg-4')
        col.classList.add('allcol')
        var coldiv=document.createElement('div')
        coldiv.classList.add('col-div')
        
        var card=document.createElement('div')
        card.classList.add('card')
        card.classList.add('mx-auto')
        card.setAttribute('style','width:18rem')
       // card .setAttribute('style','1.8rem')
        card.classList.add('bg-dark')
        card.classList.add('e-card')
        var img=document.createElement('img')
        img.src=jsondata.results[i].image_background
        img.classList.add('card-img-top')
        img.classList.add('imgstyle')
        card.append(img)

        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        cardbody.classList.add('e-creatorbody')
        var h5ele=document.createElement('h5')
        h5ele.classList.add('card-title')
        h5ele.classList.add('e-title')       
        h5ele.innerHTML=jsondata.results[i].name       


        var hoverdiv=document.createElement('div')
        
        var hoveridicon=document.createElement('i')
        hoveridicon.classList.add('fa')
        hoveridicon.classList.add('fa-id-badge')   
              
        var hoverid=document.createElement('span')
        hoverid.classList.add('hoverid')
        hoverid.innerHTML=`TagId: ${jsondata.results[i].id}`
        hoverdiv.append(hoveridicon,hoverid)
        var brk=document.createElement('br')
        hoverid.append(brk)

        //position
        var hoverpositionicon=document.createElement('i')
        hoverpositionicon.classList.add('fa')
        hoverpositionicon.classList.add('fa-gamepad')
        
        var hoverposition=document.createElement('span')
        hoverposition.classList.add('hoverid')
        var spandata='Games: ';
        
        for(var j=0;j<jsondata.results[i].games.length;j++)
        {
            if(j==0)
            {
                spandata=spandata+jsondata.results[i].games[j].name
            }
            console.log(jsondata.results[i].games[j].name)
            spandata=spandata+","+jsondata.results[i].games[j].name

        }
        hoverposition.innerHTML=spandata
        var brk1=document.createElement('br')
        hoverid.append(brk1)
        var butdiv=document.createElement('div')
        butdiv.classList.add('buttondiv')
        var button1=document.createElement('button')
        button1.setAttribute('type','button')
        button1.classList.add('btn')
        
        button1.classList.add('btn-block')
        button1.classList.add('align-self-end')
       
        var buta1=document.createElement('a')   
        buta1.setAttribute('class','buta')     
       
        buta1.innerHTML='Know more'
        buta1.setAttribute('onclick',`getstoregenreiddetail('stores',${jsondata.results[i].id})`)
        button1.append(buta1)
        var button=document.createElement('button')
        button.setAttribute('type','button')
        button.classList.add('btn')
        
        button.classList.add('btn-block')
        button.classList.add('align-self-end')
       
        var buta=document.createElement('a')   
        buta.setAttribute('class','buta')     
       
        buta.innerHTML='Go to Store'
        buta.setAttribute('href',`https://${jsondata.results[i].domain}`)
        button.append(buta)
        
        butdiv.append(button1,button)
        hoverdiv.append(hoverpositionicon,hoverposition,butdiv)
        hoverdiv.classList.add('creator')
        cardbody.append(h5ele,hoverdiv)
        card.append(cardbody)
        coldiv.append(card)
        col.append(coldiv)
    //     <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
        row.append(col)
        container.append(row)
        identity.append(container)

           // console.log(jsondata.results[i].name)
    }

}





async function getGenredetail(endpoint)
{    
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }

      console.log(endpoint)
      var result=await fetch(url+`${endpoint}?key=`+api_key)
    var jsondata=await result.json();
    console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container=document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    for(var i=0;i<jsondata.results.length;i++)
    {
        var col=document.createElement('div')
        col.classList.add('col-sm-12')
        col.classList.add('col-md-6')
        col.classList.add('col-lg-4')
        col.classList.add('allcol')
        var coldiv=document.createElement('div')
        coldiv.classList.add('col-div')
        
        var card=document.createElement('div')
        card.classList.add('card')
        card.classList.add('mx-auto')
        card.setAttribute('style','width:18rem')
       // card .setAttribute('style','1.8rem')
        card.classList.add('bg-dark')
        card.classList.add('e-card')
        var img=document.createElement('img')
        img.src=jsondata.results[i].image_background
        img.classList.add('card-img-top')
        img.classList.add('imgstyle')
        card.append(img)

        var cardbody=document.createElement('div')
        cardbody.classList.add('card-body')
        cardbody.classList.add('e-creatorbody')
        var h5ele=document.createElement('h5')
        h5ele.classList.add('card-title')
        h5ele.classList.add('e-title')       
        h5ele.innerHTML=jsondata.results[i].name       


        var hoverdiv=document.createElement('div')
        
        var hoveridicon=document.createElement('i')
        hoveridicon.classList.add('fa')
        hoveridicon.classList.add('fa-id-badge')   
              
        var hoverid=document.createElement('span')
        hoverid.classList.add('hoverid')
        hoverid.innerHTML=`TagId: ${jsondata.results[i].id}`
        hoverdiv.append(hoveridicon,hoverid)
        var brk=document.createElement('br')
        hoverid.append(brk)

        //position
        var hoverpositionicon=document.createElement('i')
        hoverpositionicon.classList.add('fa')
        hoverpositionicon.classList.add('fa-gamepad')
        
        var hoverposition=document.createElement('span')
        hoverposition.classList.add('hoverid')
        var spandata='Games: ';
        
        for(var j=0;j<jsondata.results[i].games.length;j++)
        {
            if(j==0)
            {
                spandata=spandata+jsondata.results[i].games[j].name
            }
            
            spandata=spandata+" ,"+jsondata.results[i].games[j].name

        }
        hoverposition.innerHTML=spandata
        var brk1=document.createElement('br')
        hoverid.append(brk1)
        var butdiv=document.createElement('div')
        butdiv.classList.add('buttondiv')
        var button=document.createElement('button')
        button.setAttribute('type','button')
        button.classList.add('btn')
        button.classList.add('btn-primary')
        button.classList.add('btn-block')
        button.classList.add('align-self-end')
        button.setAttribute('onclick',`getstoregenreiddetail('genres',${jsondata.results[i].id})`)
        button.innerHTML="Know More"
        butdiv.append(button)
        hoverdiv.append(hoverpositionicon,hoverposition,butdiv)
        hoverdiv.classList.add('creator')
        cardbody.append(h5ele,hoverdiv)
        card.append(cardbody)
        coldiv.append(card)
        col.append(coldiv)
    //     <div class="card">
    //     <div class="card-body">
    //       <h5 class="card-title">Special title treatment</h5>
    //       <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>
        row.append(col)
        container.append(row)
        identity.append(container)

           // console.log(jsondata.results[i].name)
    }

}




async function getstoregenreiddetail(category,value)
{
    let delte=document.getElementById('info')
    while (delte.firstChild) {
        delte.removeChild(delte.firstChild);
      }
      
     
    let specificid=`https://api.rawg.io/api/${category}/`
    var result=await fetch(specificid+`${value}?key=`+api_key)
    var jsondata=await result.json();
    //console.log(jsondata)
    
    var identity=document.getElementById('info')
    var container= document.createElement('div')
    container.classList.add('container')
    var row=document.createElement('div')
    row.classList.add('row')
    var col1=document.createElement('div')
    col1.classList.add('col-lg-3')
    col1.classList.add('col-md-6')
    col1.classList.add('col-sm-12')
    console.log(jsondata)
    var img=document.createElement('img')
    img.setAttribute('src',jsondata.image_background)
    img.setAttribute('style','width:100%')
    col1.append(img)
    var col2=document.createElement('div')
    col2.classList.add('col-lg-9')
    col2.classList.add('col-md-6')
    col2.classList.add('col-sm-12')
    var h3name=document.createElement('h3')
    h3name.innerHTML='Name: '+jsondata.name
    var desc=document.createElement('p')
    desc.innerHTML=jsondata.description;
    col2.append(h3name,desc)
    row.append(col1,col2)
   
    container.append(row)
    identity.append(container)    
}


