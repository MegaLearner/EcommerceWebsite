
        document.getElementById("search").addEventListener("input", function () {
            let filter = this.value.toLowerCase();
            let products = document.querySelectorAll("#product-list .col-4");
            
            products.forEach(product => {
                let productName = product.getAttribute("data-name").toLowerCase();
                if (productName.includes(filter)) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });