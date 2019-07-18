let matchInfo = [

    {   top: "ATOMS!",
        mid: "The tiny particles called atoms are the basic building blocks of all matter. Atoms can be combined with other atoms to form molecules, but they cannot be divided into smaller parts by ordinary means. The word atom comes from the Greek word atomos, meaning 'indivisible.'",
        img: "atom.gif"},

    {   top: "HUMAN SKELETON!",
        mid: "All the bones in the human body together are called the skeletal system. The skeletal system provides strength and rigidity to our body so we don't just flop around like jellyfish. We have 206 bones in our body. Each bone has a function. Some bones offer protection to softer more fragile parts of body. For example, the skull protects the brain and the rib cage protects our heart and lungs. Other bones, like bones in our legs and arms, help us to move around by providing support for our muscles.",
        img: "skeleton.gif"},
    
    {   top: "DINOSAUR!",
        mid: "Dinosaurs were the main animals on Earth for more than 150 million years. They were lizardlike reptiles. Some of them were the largest and scariest creatures that ever walked on land. The word dinosaur comes from Greek words meaning “terrible lizard.” The last dinosaurs became extinct, or died out, about 65.5 million years ago.",
        img: "dino.gif"},

    {   top: "FIRE!",
        mid: "Combustion or burning, in which substances combine chemically with oxygen from the air and typically give out bright light, heat, and smoke.",
        img: "fire.gif"},
    
    {   top: "PLANET!",
        mid: "A planet is a large, round object in space that moves around a star. The Earth is a planet.",
        img: "planet.gif"},

    {   top: "VEGETABLES!",
        mid: "A plant or part of a plant used as food, typically as accompaniment to meat or fish, such as a cabbage, potato, carrot, or bean.",
        img: "celery.gif"},

    {   top: "ROCKETS!",
        mid: "A cylindrical projectile that can be propelled to a great height or distance by the combustion of its contents, used typically as a firework or signal.",
        img: "rocket.gif"},

    {   top: "TELEPHONE!",
        mid: "A system for transmitting voices over a distance using wire or radio, by converting acoustic vibrations to electrical signals.",
        img: "phone.gif"},
    
    {   top: "VOLCANO!",
        mid: "A mountain or hill, typically conical, having a crater or vent through which lava, rock fragments, hot vapor, and gas are being or have been erupted from the earth's crust.",
        img: "volcano.gif"},

    {   top: "WAVES!",
        mid: "A disturbance of the ocean's surface, seen as an alternate rise and fall of the surface.",
        img: "waves.gif"},
    
    {   top: "COMPUTERS!",
        mid: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        img: "computer.gif"},

    {   top: "VACCINES!",
        mid: "A substance used to stimulate the production of antibodies and provide immunity against one or several diseases, prepared from the causative agent of a disease, its products, or a synthetic substitute, treated to act as an antigen without inducing the disease.",
        img: "vaccine.gif"},
];


let clicks = [];

let first 
let second

let sounds = [
    new Audio ("bones.m4a"),
    new Audio ("dino.m4a"),
    new Audio ("celery.m4a"),
    new Audio ("atom.m4a"),
    new Audio ("earth.m4a"),
    new Audio ("fire.m4a"),
    new Audio ("win.m4a"),
    new Audio ("flip.m4a"),
    new Audio ("Rocket.m4a"),
    new Audio ("Phone.m4a"),
    new Audio ("Volcano.m4a"),
    new Audio ("Waves.m4a"),
    new Audio ("Computer.m4a"),
    new Audio ("Vaccines.m4a"),
]

let i = 0;

$('.container .card').click(function(){
    clicks.push(this.id);
    sounds[7].play();
    
    if (clicks.length == 1){
        $(this).toggleClass("flip");
        first = this;
    }

    else if (clicks.length == 2){

        $(this).toggleClass("flip");

        if (clicks[0] == clicks[1]){

            i++

            console.log(i);
                
             

            if(clicks[0] == 0){
                sounds[3].play();
                document.getElementById('text').innerHTML = matchInfo[0].top;
                document.getElementById('content').innerHTML = matchInfo[0].mid;
                document.getElementById('gif').src = matchInfo[0].img;

                setTimeout(function() {
                    document.getElementById('atom1').style.visibility = 'hidden';
                    document.getElementById('atom2').style.visibility = 'hidden';
                 }, 800); 
             
            }

            if(clicks[0] == 1){
                sounds[0].play();
                document.getElementById('text').innerHTML = matchInfo[1].top;
                document.getElementById('content').innerHTML = matchInfo[1].mid;
                document.getElementById('gif').src = matchInfo[1].img;

                setTimeout(function() {
                    document.getElementById('skel1').style.visibility = 'hidden';
                    document.getElementById('skel2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 2){
                sounds[1].play();
                document.getElementById('text').innerHTML = matchInfo[2].top;
                document.getElementById('content').innerHTML = matchInfo[2].mid;
                document.getElementById('gif').src = matchInfo[2].img;

                setTimeout(function() {
                    document.getElementById('dino1').style.visibility = 'hidden';
                    document.getElementById('dino2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 3){
                sounds[5].play();
                document.getElementById('text').innerHTML = matchInfo[3].top;
                document.getElementById('content').innerHTML = matchInfo[3].mid;
                document.getElementById('gif').src = matchInfo[3].img;

                setTimeout(function() {
                    document.getElementById('fire1').style.visibility = 'hidden';
                    document.getElementById('fire2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 4){
                sounds[4].play();
                document.getElementById('text').innerHTML = matchInfo[4].top;
                document.getElementById('content').innerHTML = matchInfo[4].mid;
                document.getElementById('gif').src = matchInfo[4].img;

                setTimeout(function() {
                    document.getElementById('planet1').style.visibility = 'hidden';
                    document.getElementById('planet2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 5){
                sounds[2].play();
                document.getElementById('text').innerHTML = matchInfo[5].top;
                document.getElementById('content').innerHTML = matchInfo[5].mid;
                document.getElementById('gif').src = matchInfo[5].img;

                setTimeout(function() {
                    document.getElementById('celery1').style.visibility = 'hidden';
                    document.getElementById('celery2').style.visibility = 'hidden';
                 }, 800); 
            }


            if(clicks[0] == 6){
                sounds[8].play();
                document.getElementById('text').innerHTML = matchInfo[6].top;
                document.getElementById('content').innerHTML = matchInfo[6].mid;
                document.getElementById('gif').src = matchInfo[6].img;

                setTimeout(function() {
                    document.getElementById('rocket1').style.visibility = 'hidden';
                    document.getElementById('rocket2').style.visibility = 'hidden';
                 }, 800); 
             
            }

            if(clicks[0] == 7){
                sounds[9].play();
                document.getElementById('text').innerHTML = matchInfo[7].top;
                document.getElementById('content').innerHTML = matchInfo[7].mid;
                document.getElementById('gif').src = matchInfo[7].img;

                setTimeout(function() {
                    document.getElementById('phone1').style.visibility = 'hidden';
                    document.getElementById('phone2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 8){
                sounds[10].play();
                document.getElementById('text').innerHTML = matchInfo[8].top;
                document.getElementById('content').innerHTML = matchInfo[8].mid;
                document.getElementById('gif').src = matchInfo[8].img;

                setTimeout(function() {
                    document.getElementById('volcano1').style.visibility = 'hidden';
                    document.getElementById('volcano2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 9){
                sounds[11].play();
                document.getElementById('text').innerHTML = matchInfo[9].top;
                document.getElementById('content').innerHTML = matchInfo[9].mid;
                document.getElementById('gif').src = matchInfo[9].img;

                setTimeout(function() {
                    document.getElementById('waves1').style.visibility = 'hidden';
                    document.getElementById('waves2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 10){
                sounds[12].play();
                document.getElementById('text').innerHTML = matchInfo[10].top;
                document.getElementById('content').innerHTML = matchInfo[10].mid;
                document.getElementById('gif').src = matchInfo[10].img;

                setTimeout(function() {
                    document.getElementById('computer1').style.visibility = 'hidden';
                    document.getElementById('computer2').style.visibility = 'hidden';
                 }, 800); 
            }

            if(clicks[0] == 11){
                sounds[13].play();
                document.getElementById('text').innerHTML = matchInfo[11].top;
                document.getElementById('content').innerHTML = matchInfo[11].mid;
                document.getElementById('gif').src = matchInfo[11].img;

                setTimeout(function() {
                    document.getElementById('vaccine1').style.visibility = 'hidden';
                    document.getElementById('vaccine2').style.visibility = 'hidden';
                 }, 800); 
            }



            if(i == 12){
                sounds[6].play();
                sounds = [];
                document.getElementById('shuffle').style.display = 'none';
                document.getElementById('YOUWON').style.display = 'block';
             }
            
        }else{
            second = this;
            clicks = [];
            setTimeout(function() {
                $(first).toggleClass("flip");
                $(second).toggleClass("flip");
                sounds[7].play();
             }, 800);  
           
        }
        clicks = [];
    }

});

$(function () {
    var parent = $("#shuffle");
    var divs = parent.children();
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});