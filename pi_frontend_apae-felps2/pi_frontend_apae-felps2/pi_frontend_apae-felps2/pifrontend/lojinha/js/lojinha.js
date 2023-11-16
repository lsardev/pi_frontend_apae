let cartValueArray = []
let cart = [];

const buy_buttons = document.querySelectorAll(".product button");

        const productCountElement = document.getElementById("product-count");

        const cartTotalElement = document.getElementById("cart-total");
        cartTotalElement.id = "cartTotalElement";

        const cartTotalValueElement = document.getElementById("cartTotalValue")

        let total = 0;

        buy_buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                const priceElements = document.querySelectorAll(".product .price");
                const priceElement = priceElements[index]; 
                const priceText = parseFloat(priceElement.textContent);

                const nameElements = document.querySelectorAll(".product h2");
                const nameElement = nameElements[index];
                const nameProduct = nameElement.textContent;


                alert(`${nameProduct} adicionado ao carrinho. Preço: R$${priceText},00`);


                // Cria um novo elemento &lt;p&gt;
                var paragraph = document.createElement("p");
                var removeButton = document.createElement("button");

                // Define o conteúdo do parágrafo
                paragraph.textContent = `${nameProduct} - Preço: R$${priceText},00`;
                // Obtém a referência ao elemento onde você deseja anexar o &lt;p&gt;
                var container = document.getElementById("cart");

                removeButton.textContent = "Remover";
                removeButton.addEventListener("click", function () {
                    // Remove o parágrafo quando o botão é clicado
                    paragraph.remove();
                    removeButton.remove(); // Também remova o botão

                    cart.filter(nameProduct => nameProduct === nameProduct)

                    if (index > -1) {
                        numeros.splice(index, 1);
                    }

                });

                // Anexa o &lt;p&gt; ao elemento container
                container.appendChild(paragraph);
                container.appendChild(removeButton);

                cart.push(priceText);
                cartValueArray.push(priceText);
                updateCart();

            });
        });

        let cartTotalValue = document.getElementById("cartTotalElement").textContent;

        function sumValues(array) {
            let total = 0;

            for (let i = 0; i < array.length; i++) {
                total += array[i];
            }

            return total
        }

        function updateCart() {
            productCountElement.textContent = cart.length;

            const resultTotal = sumValues(cart);

            cartTotalElement.textContent = `$${resultTotal}`;

        }

        
        function sumValues(array) {
            let total = 0;

            for (let i = 0; i < array.length; i++) {
            total += array[i];
            }

            return total
        }

        function updateCartTotalValue(){
                
        }

        function closeModal() {
            cart = [];
            total = 0;

            productCountElement.textContent = 0
            const resultTotal = 0
            cartTotalElement.textContent = `$${resultTotal}`
        }

        var closeModalBtn = document.getElementById('closeModalBtn');
        closeModalBtn.addEventListener('click', closeModal);

        var buy_paragraph = document.createElement("p");
        var cart_total_value = document.createElement("p");
        var buy_last_button = document.createElement("button");

        function mostrarFinalCart() {
            var finalCart = document.getElementById('final-cart');
            finalCart.style.display = 'block';
        }

        buy_last_button.textContent = "Comprar";
        buy_last_button.style.marginBottom = '50px'

        // aqui vai o valor total no final que não consegui fazer
        cart_total_value.textContent = 0;
        cart_total_value.id = "cartTotalValue";

        buy_last_button.addEventListener("click", () => {
            mostrarFinalCart()
        })

        var container = document.getElementById("cart");

        container.appendChild(buy_paragraph);
        container.appendChild(cart_total_value);
        container.appendChild(buy_last_button);

        


    
        

