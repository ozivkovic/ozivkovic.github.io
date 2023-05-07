window.addEventListener("load",function(){
    
    this.document.getElementById("btn_proveri_domen").addEventListener("click",function(){
           domen= document.getElementById("domen").value;
           if(domen == "raf.rs"){
                 //sve neaktivno
                document.getElementById("com").classList.add("nedostupno");
                document.getElementById("net").classList.add("nedostupno");
                document.getElementById("rs").classList.add("nedostupno");
                document.getElementById("info").classList.add("nedostupno");
                document.getElementById("co.rs").classList.add("nedostupno");
                document.getElementById("in.rs").classList.add("nedostupno");

                document.getElementById("com").classList.remove("dostupno");
                document.getElementById("net").classList.remove("dostupno");
                document.getElementById("rs").classList.remove("dostupno");
                document.getElementById("info").classList.remove("dostupno");
                document.getElementById("co.rs").classList.remove("dostupno");
                document.getElementById("in.rs").classList.remove("dostupno");


           }else if(domen=="google.com"){
                //samo .com aktivno
                document.getElementById("com").classList.add("dostupno");
                document.getElementById("net").classList.add("nedostupno");
                document.getElementById("rs").classList.add("nedostupno");
                document.getElementById("info").classList.add("nedostupno");
                document.getElementById("co.rs").classList.add("nedostupno");
                document.getElementById("in.rs").classList.add("nedostupno");

                document.getElementById("com").classList.remove("nedostupno");
                document.getElementById("net").classList.remove("dostupno");
                document.getElementById("rs").classList.remove("dostupno");
                document.getElementById("info").classList.remove("dostupno");
                document.getElementById("co.rs").classList.remove("dostupno");
                document.getElementById("in.rs").classList.remove("dostupno");

           }else{
                // ako nije google.com i raf.rs onda je sve aktivno
                document.getElementById("com").classList.add("dostupno");
                document.getElementById("net").classList.add("dostupno");
                document.getElementById("rs").classList.add("dostupno");
                document.getElementById("info").classList.add("dostupno");
                document.getElementById("co.rs").classList.add("dostupno");
                document.getElementById("in.rs").classList.add("dostupno");

                 document.getElementById("com").classList.remove("nedostupno");
                document.getElementById("net").classList.remove("nedostupno");
                document.getElementById("rs").classList.remove("nedostupno");
                document.getElementById("info").classList.remove("nedostupno");
                document.getElementById("co.rs").classList.remove("nedostupno");
                document.getElementById("in.rs").classList.remove("nedostupno");

           }
    });

});