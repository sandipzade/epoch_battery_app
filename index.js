document.addEventListener("DOMContentLoaded", function () {
    const features = document.getElementById("features");
    const imageRow = document.getElementById("imageRow");
    const cardContainer = document.getElementById("cardContainer");
    const scrollLeftBtn = document.getElementById("scrollLeftBtn");
    const scrollRightBtn = document.getElementById("scrollRightBtn");

    const featuresList = [
        { "feature": "iOSand Android App Control" },
        { "feature": "Low TempCharging Available With Internal Heating" },
        { "feature": "IP67 Rated" },
        { "feature": "Industry Leading, 11 Year Warranty" }
    ];

    const imagesList = [
        { "image": "images/Collection-01.png", "title": "Marine Batteries" },
        { "image": "images/Collection-02.png", "title": "Trolling Motor Batteries" },
        { "image": "images/Collection-03.png", "title": "Golf Cart Batteries" },
        { "image": "images/Collection-04.png", "title": "RV/Van/Camper Batteries" }
    ];

    const productsList = [
        { "image": "images/Lithium Marine Batteries Products-01.png", "collection": "Collection Name-1", "name": "Epoch Batteries Product Full Name", "price": "$19.00", "rating": 4.8, "reviews": 1190 },
        { "image": "images/Lithium Marine Batteries Products-02.png", "collection": "Collection Name-2", "name": "Epoch Batteries Product Full Name", "price": "$20.00", "rating": 4, "reviews": 1250 },
        { "image": "images/Lithium Marine Batteries Products-03.png", "collection": "Collection Name-3", "name": "Epoch Batteries Product Full Name", "price": "$22.00", "rating": 5, "reviews": 960 },
        { "image": "images/Lithium Marine Batteries Products-04.png", "collection": "Collection Name-4", "name": "Epoch Batteries Product Full Name", "price": "$30.00", "rating": 3, "reviews": 1520 },
        { "image": "images/Lithium Marine Batteries Products-01.png", "collection": "Collection Name-5", "name": "Epoch Batteries Product Full Name", "price": "$30.00", "rating": 3, "reviews": 1520 },
    ];

    featuresList.forEach(feature => {
        const item = document.createElement('li');
        item.innerHTML = `<img width='14px' src='images/Hand.png'> ${feature.feature}`;
        item.classList.add("mb-2");
        features.appendChild(item);
    });

    imagesList.forEach(feature => {
        const cardCol = document.createElement("div");
        cardCol.className = "col-md-6 col-lg-6 mb-4";

        const imageCard = document.createElement("div");
        imageCard.className = "image-card";

        const img = document.createElement("img");
        img.src = feature.image;
        img.alt = feature.title;

        const overlay = document.createElement("div");
        overlay.className = "image-overlay";
        overlay.innerHTML = `
            <h3 class="fw-semibold">${feature.title}</h3>
            <button type="button" class="btn shop-now px-3 fw-semibold">Shop Now <img style="width: 14px;" src="images/Arrow.png"></button>
        `;

        imageCard.appendChild(img);
        imageCard.appendChild(overlay);

        cardCol.appendChild(imageCard);
        imageRow.appendChild(cardCol);
    });

    productsList.forEach(product => {
        const card = document.createElement('div');
        card.className = "card rounded-0 border-0";

        const img = document.createElement('img');
        img.className = "card-img-top";
        img.src = product.image;
        img.alt = "Product Image";

        const cardBody = document.createElement('div');
        cardBody.className = "card-body";

        const collection = document.createElement('div');
        collection.className = "text-secondary fw-semibold mb-1 fs-10";
        collection.textContent = product.collection;

        const productName = document.createElement('div');
        productName.className = "fw-semibold text-dark mb-1";
        productName.textContent = product.name;

        const price = document.createElement('div');
        price.className = "fw-bold text-dark mb-1";
        price.textContent = product.price;

        const rating = document.createElement('div');
        rating.innerHTML = `
        ${getStarRatingHTML(product.rating)}
            <span class="mx-1 fs-10 text-secondary">${product.rating}</span>
            <span class="fs-10 text-secondary">${product.reviews} Reviews</span>
        `;

        cardBody.appendChild(collection);
        cardBody.appendChild(productName);
        cardBody.appendChild(price);
        cardBody.appendChild(rating);

        card.appendChild(img);
        card.appendChild(cardBody);

        cardContainer.appendChild(card);
    });



    scrollLeftBtn.addEventListener("click", () => {
        cardContainer.scrollBy({ left: -200, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", () => {
        cardContainer.scrollBy({ left: 200, behavior: "smooth" });
    });


});

function getStarRatingHTML(rating) {
    const roundedRating = Math.round(rating);
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= roundedRating) {
            starsHTML += '<span class="star">&#9733;</span>';
        } else {
            starsHTML += '<span class="star">&#9734;</span>';
        }
    }
    return starsHTML;
}