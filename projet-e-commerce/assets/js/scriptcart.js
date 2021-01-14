$('document').ready(function(){

    // Partie initialisation 
    // Création d'un tableau de stockage de toutes les données produits
    let products = [
    {
        id: 1,
        name: 'Clearomiseur GS Turbo Eleaf',
        price: '8.50',
        desc: "Le clearomiseur GS Turbo s'adresse aux amateurs de vape en inhalation indirecte et tirage serré.",
        img: 'assets/img/clearomiseur-gs-turbo-eleaf.jpg',
        ecig: false,
        liquid: false,
        clearo: true,
        bat: false,
        res: false
    },
    {
        id: 2,
        name: 'Le Rouge',
        price: '4.90',
        desc: 'Découvrez notre cocktail fruité, frais et complexe à base de fruits rouges avec une légère pointe anisée.',
        img: 'assets/img/le-rouge-le-petit-vapoteur.jpg',
        ecig: false,
        liquid: true,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 3,
        name: 'La pêche',   
        price: '4.90',
        desc: "Découvrez une pêche ultra gourmande, c'est le moment de goûter à une saveur de type brugnon juteux et sucré !",
        img: 'assets/img/e-liquide-peche-le-petit-vapoteur.jpg',
        ecig: false,
        liquid: true,
        clearo: false,
        bat: false,
        res: false,
    },
    {
        id: 4,
        name: 'Menthe polaire',
        price: '4.90',
        desc: "Retrouvez les sensations polaires du grand nord et les saveurs d’une menthe du jardin dans ce liquide glacial et herbacé.",
        img: "assets/img/menthe-polaire-le-petit-vapoteur.jpg",
        ecig: false,
        liquid: true,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 5,
        name: 'Classic Blend',
        price: '4.90',
        desc: "Mélange de Classic blond américain avec des notes de Burley. Idéal pour débuter, le Classic Blend est un vrai goût de Classic léger, peu sucré.",
        img: "assets/img/classic-blend-le-petit-vapoteur.jpg",
        ecig: false,
        liquid: true,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 6,
        name: 'Clearomiseur TFV9 Smok',
        price: '24.90',
        desc: "Le clearomiseur TFV9 de chez Smok est l'un des plus imposant tank sub-ohm du moment.",
        img: "assets/img/clearomiseur-tfv9-smok.jpg",
        ecig: false,
        liquid: false,
        clearo: true,
        bat: false,
        res: false
    },
    {
        id: 7,
        name: 'Clearomiseur Forz Tank Vaporesso',
        price: '20.90',
        desc: "Vaporesso vous propose son clearomiseur Forz Tank, qui accompagne également le kit Forz TX80.",
        img: "assets/img/clearomiseur-forz-tank-vaporesso.jpg",
        ecig: false,
        liquid: false,
        clearo: true,
        bat: false,
        res: false
    },
    {
        id: 8,
        name: 'Clearomiseur Nautilus GT Tank Aspire',
        price: '28.90',
        desc: "Le clearomiseur Nautilus GT Aspire est le fruit d'une collaboration étonnante entre deux géants de la vape : Aspire et Taifun.",
        img: "assets/img/clearomiseur-nautilus-gt-tank-aspire.jpg",
        ecig: false,
        liquid: false,
        clearo: true,
        bat: false,
        res: false
    },
    {
        id: 9,
        name: 'Kit Luxe 2 LPV edition',
        price: '64.90',
        desc: "Voici le tout nouveau kit Luxe 2 LPV Edition du fabricant Vaporesso dans une édition spéciale imaginée et désignée spécialement pour Le Petit Vapoteur.",
        img: "assets/img/kit-luxe-2-lpv-edition.jpg",
        ecig: true,
        liquid: false,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 10,
        name: 'Kit Coolfire z50 Vintage edition Innokin',
        price: '56.90',
        desc: "Innokin vous présente une version originale et splendide avec le kit CoolFire Z50 Vintage Edition.",
        img: "assets/img/kit-coolfire-z50-vintage-edition-innokin.jpg",
        ecig: true,
        liquid: false,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 11,
        name: 'Kit iStick s80 Eleaf',
        price: '61.90',
        desc: "Le kit iStick S80 est un petit bijou entièrement consacré à la vape en inhalation indirecte.",
        img: "assets/img/kit-istick-s80-eleaf.jpg",
        ecig: true,
        liquid: false,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 12,
        name: 'Kit Launcher Grus',
        price: '59.90',
        desc: "Le Petit Vapoteur vous propose un kit dévoué à la vape DL en inhalation directe avec la box Grus 100W compatible accu 21700, de Lost Vape.",
        img: "assets/img/kit-launcher-grus.jpg",
        ecig: true,
        liquid: false,
        clearo: false,
        bat: false,
        res: false
    },
    {
        id: 13,
        name: 'Resistances Fog HumVee',
        price: '12.50',
        desc: "Le Petit Vapoteur vous propose un kit dévoué à la vape DL en inhalation directe avec la box Grus 100W compatible accu 21700, de Lost Vape.",
        img: "assets/img/resistances-fog-humvee.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: false,
        res: true   
    },
    {
        id: 14,
        name: 'Resistances GZ Coils Eleaf',
        price: '14.50',
        desc: "Les résistances GZ de Eleaf sont conçues pour une vape en inhalation indirecte (MTL) pleine de saveurs.",
        img: "assets/img/resistances-gz-coils-eleaf.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: false,
        res: true
    },
    {
        id: 15,
        name: 'Resistances EZ Coils Eleaf',
        price: '12.75',
        desc: "Résistance EZ Coil de chez Joyetech. Ces résistances EZ Coil sont composées de Mesh pour des saveurs intenses et une bonne production de vapeur.",
        img: "assets/img/resistances-ez-coil-joyetech.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: false,
        res: true
    
    },
    {
        id: 16,
        name: 'Resistances TFV9 Smok',
        price: '13.90',
        desc: "Les résistances TFV9 sont conçues pour le clearomiseur TFV9 de chez Smok. Elles sont composées de Mesh et de coton pour un excellent rendu des saveurs et une grande longévité.",
        img: "assets/img/resistances-tfv9-smok.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: false,
        res: true 
    },
    {
        id: 17,
        name: 'Box Falcon Testalcigs',
        price: '24.90',
        desc: "La box Falcons de Teslacigs est un mod électronique à batterie intégrée d'une légèreté surprenante. Fabriquée en PC et ABS, elle ne pèse que 70 g.",
        img: "assets/img/box-falcons-teslacigs.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: true,
        res: false
    },
    {
        id: 18,
        name: 'Box Coolfire z50',
        price: '36.90',
        desc: "La box Coolfire Z50 de Innokin est un mod électronique compact et léger. Elle intègre une bonne batterie de 2100 mAh, rechargeable par micro-USB, qui offre une excellente autonomie.",
        img: "assets/img/box-coolfire-z50.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: true,
        res: false 
    },
    {
        id: 19,
        name: 'Box GTX One Vaporesso',
        price: '27.90',
        desc: "La box Coolfire Z50 de Innokin est un mod électronique compact et léger. Elle intègre une bonne batterie de 2100 mAh, rechargeable par micro-USB, qui offre une excellente autonomie.",
        img: "assets/img/box-gtx-one-vaporesso.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: true,
        res: false
    },
    {
        id: 20,
        name: 'Box Spinner 3 Vision',
        price: '20.50',
        desc: "La célèbre batterie Spinner de Vision est de retour avec le modèle Spinner 3 VV.",
        img: "assets/img/batterie-spinner-3-vision.jpg",
        ecig: false,
        liquid: false,
        clearo: false,
        bat: true,
        res: false
    }, 
    ];

function onLoadShowCartContent() {
    for (let i = 0; i < products.length; i++) {
        if (localStorage.getItem(products[i].name) != null) {
            $('.empty-cart').remove();
            $(".cart").prepend(function() {
                return `<div class="cart-item">
                <img class="pic" src="assets/img/le-rouge-le-petit-vapoteur.jpg" alt="image produit">
                <div class="cart-text">
                    <h3 class="item-name">`+ products[i].name +`</h3>
                    <p class="price">`+ products[i].price +`</p>
                    <p class="desc">`+ products[i].desc +`</p>
                    <div class="manage-cart">
                        <div class="add-to-cart">
                            <a rel="nofollow" class="cart-add" href="#">Supprimer du panier</a>
                        </div>
                        <div class="plus-minus">
                            <a rel="nofollow" class="button del-article" href="#">-</a>
                            <p class="amount">`+ localStorage.getItem(products[i].name) +`</p>
                            <a rel="nofollow" class="button add-article" href="#">+</a>
                        </div>
                    </div>
                </div>
            </div>`
            });
        }
    }
}  

$(".cart").on('click', '.cart-add', function() {
    $(this).parent().parent().parent().parent().remove()
});

// $(".cart").on('click', '.add-article', function() {
//     let amount = $('.amount').text();
//     console.log(amount);    
//     console.log(typeof amount);
//     amount = parseInt(amount);
//     console.log(amount);
//     console.log(typeof amount);
//     $('.amount').text(amount);
//     });

onLoadShowCartContent();


});


