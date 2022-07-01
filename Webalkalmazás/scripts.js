//jelenlegi kép számlálója
let currentImage = 0;

//tömb, amely az egyes képekhez tartozó adatokat tartalmazó objectekből áll
const imagesData = [
    //tiger object
    tigerData = {
        image: "images/tiger-1975790_1920.jpg",
        title: "Tiger",
        paragraph: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, then become independent and leave their mother's home range to establish their own."
    },
    //cougar object
    cougarData = {
        image: "images/mountain-lion-1577644_1920.jpg",
        title: "Cougar",
        paragraph: "The cougar (Puma concolor) is a large cat native to the Americas. Its range spans from the Canadian Yukon to the southern Andes in South America and is the most widespread of any large wild terrestrial mammal in the Western Hemisphere. It is an adaptable, generalist species, occurring in most American habitat types. Due to its wide range, it has many names, including puma, mountain lion, catamount and panther."
    },
    //jaguar object
    jaguarData = {
        image:"images/jaguar-3370498_1920.jpg",
        title: "Jaguar",
        paragraph: "The jaguar (Panthera onca) is a large cat species and the only living member of the genus Panthera native to the Americas. With a body length of up to 1.85 m and a weight of up to 158 kg, it is the largest cat species in the Americas and the third largest in the world. Its distinctively marked coat features pale yellow to tan colored fur covered by spots that transition to rosettes on the sides, although a melanistic black coat appears in some individuals. The jaguar's powerful bite allows it to pierce the carapaces of turtles and tortoises, and to employ an unusual killing method: it bites directly through the skull of mammalian prey between the ears to deliver a fatal blow to the brain."
    },
    //leopard object
    leopardData = {
        image: "images/leopard-515509_1920.jpg",
        title: "Leopard",
        paragraph: "The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae. It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia. It is listed as Vulnerable on the IUCN Red List because leopard populations are threatened by habitat loss and fragmentation, and are declining in large parts of the global range. The leopard is considered locally extinct in Hong Kong, Singapore, South Korea, Jordan, Morocco, Togo, the United Arab Emirates, Uzbekistan, Lebanon, Mauritania, Kuwait, Syria, Libya, Tunisia and most likely in North Korea, Gambia, Laos, Lesotho, Tajikistan, Vietnam and Israel. Contemporary records suggest that the leopard occurs in only 25% of its historical global range."
    },
    //cheetah object
    cheetahData = {
        image: "images/cheetah-828061_1920.jpg",
        title: "Cheetah",
        paragraph: "The cheetah (Acinonyx jubatus) is a large cat and native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h with the fastest reliably recorded speeds being 93 and 98 km/h, and as such has several adaptations for speed, including a light build, long thin legs and a long tail. It typically reaches 67–94 cm at the shoulder, and the head-and-body length is between 1.1 and 1.5 m. Adults weigh between 21 and 72 kg. Its head is small and rounded, and has a short snout and black tear-like facial streaks. The coat is typically tawny to creamy white or pale buff and is mostly covered with evenly spaced, solid black spots. Four subspecies are recognised."
    },
    //lynx object
    lynxData = {
        image: "images/lynx-g6c1ea3219_1920.jpg",
        title: "Lynx",
        paragraph: "A lynx is any of the four species (the Canada lynx, Iberian lynx, Eurasian lynx, or bobcat) within the medium-sized wild cat genus Lynx. The name lynx originated in Middle English via Latin from the Greek word λύγξ, derived from the Indo-European root leuk- ('light, brightness') in reference to the luminescence of its reflective eyes."
    },
    //lion object
    lionData = {
        image: "images/lion-1850112_1920.jpg",
        title: "Lion",
        paragraph: "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates. The lion is an apex and keystone predator; although some lions scavenge when opportunities occur and have been known to hunt humans, the species typically does not actively seek out and prey on humans."
    },
    //cat Object
    catData = {
        image: "images/cat-7276931_1920.jpg",
        title: "Cat",
        paragraph: "The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact. Domestic cats are valued by humans for companionship and their ability to kill rodents. About 60 cat breeds are recognized by various cat registries."
    }
];

//tartalom megjelenítése a tömbből a currentImage alapján függvény

function switchImage(imageIndex) {
    //nagy kép és nagy szöveg betöltése
    $(".bigPicture_image").attr("src", imagesData[imageIndex].image);
    $(".bigPicture_image").attr("alt", imagesData[imageIndex].title);
    $(".textTitle").text(imagesData[imageIndex].title);
    $(".textParagraph").text(imagesData[imageIndex].paragraph);
    //esetleges aktív thumbnail kijelölés törlése
    $(".thumbnailImage").css("outline", "none");
    //az aktuálisan aktív thumbnail kijelölése
    $(`.thumbnailImage[data-index="${imageIndex}"]`).css("outline", "1vh inset #d68571");
}
 
//haladj jobbra függvény
function switchRight() {
    if (0 <= currentImage && currentImage < (imagesData.length - 1)) {
        currentImage++;
        switchImage(currentImage);
    } else {
        currentImage = 0;
        switchImage(currentImage);
    }
}

//haladj balra függvény
function switchLeft() {
    if (0 < currentImage && currentImage <= (imagesData.length - 1)) {
        currentImage--;
        switchImage(currentImage);
    } else {
        currentImage = imagesData.length - 1;
        switchImage(currentImage);
    }
}

//tartalom változtatása jobb és bal nyilakra KATTINTÁS esetén
$("#arrowBarRight").on("click", switchRight);
$("#arrowBarLeft").on("click", switchLeft);

//tartalom változtatása jobb és bal billentyűk LENYOMÁSA esetén
$("body").keydown(function (e){
    switch(e.which) {
        case 37:
            switchLeft();
            break;
        case 39:
            switchRight();
            break;
    }
});

//thumbnailek létrehozása
imagesData.forEach((element, index) => {
    $(".thumbnailContainer").append(`<div class="thumbnail"><img class="thumbnailImage" data-index="${index}" src="${element.image}"><div class="thumbnailComment" id="thumbnailComment${index}">${element.title}</div></div>`);
});

//thumbnailen tartott kuzor kiírja a kép címét
$(".thumbnailImage").on("mouseenter", function (event) {
    dataIndexOfImage = $(event.target).attr("data-index");
    $(`#thumbnailComment${dataIndexOfImage}`).css("display", "block");
});

//thumbnail elhagyása kurzorral eltünteti a kép címét
$(".thumbnailImage").on("mouseleave", function (event) {
    dataIndexOfImage = $(event.target).attr("data-index");
    $(`#thumbnailComment${dataIndexOfImage}`).css("display", "none");
});

//klikkre a választott kép megjelenítése
let dataIndexOfImage
$(".thumbnailImage").on("click", function (event) {
    dataIndexOfImage = $(event.target).attr("data-index");
    $(".bigPicture_image").attr("src", switchImage(dataIndexOfImage));
    //a választott képhez viszonyítva működjenek a nyilak
    currentImage = dataIndexOfImage;
});

//alapértelmezett kép betöltése az oldal megnyitásakor
switchImage(currentImage);