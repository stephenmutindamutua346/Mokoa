        // DATA & STATE
        const servicesData = [
            { id: 1, name: "Laundry Services", cat: "Cleaning", price: 150, unit: "per kg", rating: 4.8, img: "https://imgs.search.brave.com/JvRNxIZRUyx96YcLmnrRk2EsaTORX_5rUP7UDOJJ4KE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE1LzU5LzY2Lzg4/LzM2MF9GXzE1NTk2/Njg4NzNfeXRZMDlS/YVQxYU9GWTU3aEQ5/dE5BR3ZhM1FQMWxR/QXcuanBn", desc: "Professional wash, dry & fold service." },
            { id: 2, name: "Gas Refill 6kg", cat: "Gas & Water", price: 1050, unit: "", rating: 4.9, img: "https://imgs.search.brave.com/XfPe4Xnp-lIw2xRysJrwH_ZEkYsSZCNt5r243R-zG5s/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rZWdh/c2RlYWxlcnMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI2/LzA3L09pbGlieWEt/T2xhLU1waXNoaS53/ZWJw", desc: "Fast and safe 6kg gas cylinder refill." },
            { id: 3, name: "Gas Refill 13kg", cat: "Gas & Water", price: 2500, unit: "", rating: 4.9, img: "https://imgs.search.brave.com/DjnlGg_ugQ9a-Q-QMH9CCg4y7ozJmTHJ-P7f1lqNYeI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzkzLzcyLzMz/LzM2MF9GXzkzNzIz/MzU4X0piWlF0VTRq/ckRGZHI2aEpXZzlV/TzZmMzd5TFV2MmM1/LmpwZw", desc: "Standard 13kg gas cylinder refill." },
            { id: 4, name: "Water Refill 20L", cat: "Gas & Water", price: 150, unit: "", rating: 4.7, img: "https://imgs.search.brave.com/1JZFEmMRQFkpnmCS2xi9xVxG4HkrrP6SM-6xh1HhsGM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9waWN0/dXJlcy11Z2FuZGEu/amlqaXN0YXRpYy5j/b20vMjE1MDEyNDdf/TVRBeU5DMHhNREkw/TFRjMFltTmhPVGht/WVRnLndlYnA", desc: "Pure drinking water delivered to your door." },
            { id: 5, name: "Grocery Home Delivery", cat: "Shopping", price: 200, unit: "delivery fee", rating: 4.6, img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop", desc: "Get your fresh groceries delivered fast." },
            { id: 6, name: "Electrical Repairs", cat: "Repairs", price: 500, unit: "starting", rating: 4.8, img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop", desc: "Certified electricians for home wiring & fixes." },
            { id: 7, name: "Plumbing Repairs", cat: "Repairs", price: 600, unit: "starting", rating: 4.7, img: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=400&h=300&fit=crop", desc: "Leak fixes, pipe fitting, and drain cleaning." },
            { id: 8, name: "Heha Home Movers", cat: "Moving", price: 5000, unit: "1 bedroom", rating: 4.9, img: "https://imgs.search.brave.com/cRXDhFylrxjTyJ3pMwjtyIZTr-uc28-qLiiwKcS6LqE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9rMjQu/ZGlnaXRhbC93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyNi8wOS9I/ZWhhLU1vdmVycy5w/bmc", desc: "Safe and reliable home moving services." },
            { id: 9, name: "Internet Installation", cat: "Repairs", price: 3500, unit: "starting", rating: 4.6, img: "https://imgs.search.brave.com/91O8Ny6QqFdhYBummHifwHoT70bUBi8LjesqWjhSbCU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly92aXZh/aHRlY2guY28ua2Uv/d3AtY29udGVudC91/cGxvYWRzLzIwMjUv/MDkvVEVOREEtRjMt/Uk9VVEVSLTEuanBn", desc: "Wi-Fi setup, router config, and repairs." },
            { id: 10, name: "Utensils Set", cat: "Shopping", price: 2500, unit: "", rating: 4.5, img: "https://imgs.search.brave.com/yS3vLWAQY2lPI2PRjhWJLWrdpw_p2zqSEF-Ns1ouDMQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/ODFsVmJpeDFkRUwu/anBn", desc: "High-quality kitchen utensils bundle." },
            { id: 11, name: "Deep House Cleaning", cat: "Cleaning", price: 2000, unit: "session", rating: 4.9, img: "https://imgs.search.brave.com/p8z7BMXvnAiI8XCMlhW_qsRuGhbe4DQ0ZCVwyZkPpw0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9jbGVhbmVy/LWZlbWFsZS1ob21l/b3duZXItdGlkeWlu/Zy1ob21lLTYwMG53/LTI0Nzk1MTE2NjMu/anBn", desc: "Comprehensive cleaning for your entire home." },
            { id: 12, name: "Furniture Assembly", cat: "Repairs", price: 1500, unit: "per item", rating: 4.7, img: "https://imgs.search.brave.com/cYeBNz8_33Grhme_GZhyMmo-kOBO7Cm3C7n0m4LhUfw/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nb2xv/YWR1cC5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjEvMDkv/ZHJlc3Nlci1hc3Nl/bWJseS5qcGc", desc: "Professional assembly for your new furniture." },
            { id: 13, name: "Jackline Home Massage", cat: "Repairs", price: 750, unit: "per service", rating: 5.0, img: "https://imgs.search.brave.com/X756YAB8bxq0P8hLt9kVswfxkojrT1KSh22f7vbORe4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNTA4/ODM4NTEyL3Bob3Rv/L3lvdW5nLWNvdXBs/ZS1lbmpveWluZy1h/dC1zcGEtZHVyaW5n/LWJhY2stbWFzc2Fn/ZS5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9VkFmQkVQOHJD/V004enBWTnFqUlJS/aDJBRUYzOVFPa0tV/N2VFMC1wdmZBYz0", desc: "Professional massage services with happy ending" },
            { id: 14, name: "Yusufu Phone Repairs", cat: "Repairs", price: 1500, unit: "depending on type", rating: 4.8, img: "https://imgs.search.brave.com/eR-sl4aISI_VPMOvyIyHlAlM_yqUHAI7qFph9zgEIlg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA2LzU3LzU5LzE3/LzM2MF9GXzY1NzU5/MTcwOF8xS0MyNkVy/YXp4bTlzZ05BRGp2/aVplQVpIdHJobE03/Yi5qcGc", desc: "Professional phone and other electronic repairs like heaters fridges and TVs." },
            { id: 15, name: "Kanjata Movers Limited", cat: "Moving", price: 600, unit: "starting", rating: 4.7, img: "https://imgs.search.brave.com/QM823uVHVjPdoPpnNpe-lz83IdBaQxiMXesMiPDoAEM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jbXMu/ZXUtY2VudHJhbC0x/Lmxpbm9kZW9iamVj/dHMuY29tL2ltYWdl/LzIwMjYvMDgvNDdm/MmFlNDMtMmY2ZS00/YTUwLTgyNjUtYmRl/Zjk4MTliMWRmLndl/YnA", desc: "We move people all around Kutus together with their belongings. Price depends on distance" },
            { id: 16, name: "4 by 6 Bed", cat: "Shopping", price: 6400, unit: "Per Piece", rating: 4.6, img: "https://user54737.na.imgto.link/public/20261111/b304046210002b79806af0cb-7ebfcdbf-11d4-445b-b1b4-f84256ca19b8.avif", desc: "New bed on sale." },
            { id: 17, name: "Cupboard", cat: "All", price: 1400, unit: "Per Piece", rating: 4.7, img: "https://user54737.na.imgto.link/public/20261111/48c52732e70baf64b29f5ebe-62a2919e-c455-460c-8e13-052ea68b773d.avif", desc: "Get this standart Study table at an affordable price." },
            { id: 18, name: "3 Seater Sofa", cat: "All", price: 4200, unit: "Per Piece", rating: 4.9, img: "https://user54737.na.imgto.link/public/20261111/2b6c01f4f5699a25842d6fa5-84bae125-13ed-4e60-8ce3-56129ce4738b.avif", desc: "New comfortable 3 seater sofa set." },
            { id: 19, name: "Dorris Mama Fua Services", cat: "Cleaning", price: 600, unit: "starting", rating: 4.7, img: "https://imgs.search.brave.com/cA-a646eswWvQXjqJdLM4sUlNdH8WP2ncI_CBaSVSE0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bWFtYWZ1YWFwcC5j/by5rZS9zdGF0aWMv/YXNzZXRzL2ltYWdl/cy9hYm91dF8yLW1p/bi5qcGVn", desc: "Home cleaning, house utensils and light laundry." },
            { id: 20, name: "F3 Tenda", cat: "Repairs", price: 1300, unit: "Per Piece", rating: 4.8, img: "https://imgs.search.brave.com/Rf5gnpxy-MwMUqF-L8vGWoUS0TLGcs1Sqy0H6LCFQ-M/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFIRHUzeG5qdEwu/anBn", desc: "Tenda wireless N300 router." },
            { id: 21, name: "Mama Mboga", cat: "Shopping", price: 100, unit: "Negotiable", rating: 4.7, img: "https://imgs.search.brave.com/U15kn4dFZQvPath9bbJ8-dDxGfiGjZc-fpPHzBMxXlo/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/Z2FpbmhlYWx0aC5v/cmcvc2l0ZXMvZGVm/YXVsdC9maWxlcy8y/MDI1LTAyL2NvbV84/MDgwLmpwZw", desc: "Offering door to door services for groceries and other kitchen supplies." },
            { id: 22, name: "Heha Barbershop", cat: "All", price: 200, unit: "Negotiable", rating: 4.8, img: "https://imgs.search.brave.com/efELMci9Wlz0LCxgJETbs24uTiv625kBrMPBsWt_QNs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzE3LWxxcDc1VUwu/anBn", desc: "Professional Kinyozi artists based in Kutus." },
            { id: 23, name: "Bed Covers", cat: "All", price: 600, unit: "starting", rating: 4.9, img: "https://imgs.search.brave.com/GO_HNXZazMJt6eoZynkfhMTQPjmPDFrgDIKQ2K8-x2c/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jb21w/YW55c3RvcmUtcmVz/LmNsb3VkaW5hcnku/Y29tL2ltYWdlL3Vw/bG9hZC9mX2F1dG8s/cV85MCxkcHJfMi93/XzQyMC93ZWJpbWFn/ZXMvNTE5NDRfZ2Fs/aWxlYWZsb3JhbF9s/aWZlc3R5bGUxP19p/PUFH", desc: "Quality bed covers 4 by 6 size." },
            { id: 24, name: "Furniture Repairs", cat: "Repairs", price: 600, unit: "Negitiable", rating: 4.7, img: "https://imgs.search.brave.com/4Cy2-V05Fo3nIi8yNlrsKMHmGi2MrzO_x0pk--Rs60Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQw/NTE4NTI4My9waG90/by91cGhvbHN0ZXJ5/LXdvcmtlci1leGFt/aW5pbmctYS1jaGFp/ci1vbi1hLXdvcmtz/aG9wLWJlbmNoLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1r/cXFOX2FrRG9ySnRh/M19vdU9jUEc5ZlR2/OEtUM0c0aDAxNGZG/VFlVNmkwPQ", desc: "Furniture door to door home repair services at a cheap affordable price." },
            { id: 25, name: "Home Padlocks", cat: "Shopping", price: 400, unit: "Per Piece", rating: 4.8, img: "https://imgs.search.brave.com/b4fUY4S4W-4PSJGw-wJH-bqgww9Xec0GmdMEOxSSyig/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/OTErV0dTY1g4Qkwu/anBn", desc: "Secure Your home With Quality Padlocks." },
            { id: 26, name: "Duvet Cleaning", cat: "Cleaning", price: 300, unit: "starting", rating: 4.7, img: "https://imgs.search.brave.com/i-2OS5vwjiGAaCnZ24Yk4WqXhMJA4o0MVL3cvMy5xC8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA4/MTgvNTM2OS9maWxl/cy9ob3dfdG9fd2Fz/X2FfZHV2ZXRfNV80/ODB4NDgwLmpwZz92/PTE3MTc2NjI3MDg", desc: "High Quality Duvet and blanket dry cleaning. All sizes accepted" },
        ];

        // Flash sale items (subset with discounts)
        const flashSaleData = servicesData.slice(0, 4).map(item => ({
            ...item,
            originalPrice: Math.round(item.price * 1.3),
            discount: 30
        }));

        let cart = JSON.parse(localStorage.getItem('mokoa_cart')) || [];
        let orders = JSON.parse(localStorage.getItem('mokoa_orders')) || [];


        // NAVIGATION & ROUTING
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            document.getElementById(`page-${pageId}`).classList.add('active');
            
            document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
            const activeLink = document.querySelector(`.nav-links a[data-page="${pageId}"]`);
            if(activeLink) activeLink.classList.add('active');

            // Close mobile menu
            document.getElementById('navLinks').classList.remove('open');
            
            // Render dynamic pages
            if(pageId === 'cart') renderCart();
            if(pageId === 'orders') renderOrders();
            
            window.scrollTo(0, 0);
        }

        function toggleMenu() {
            document.getElementById('navLinks').classList.toggle('open');
        }


        // RENDERING FUNCTIONS
        function createServiceCard(service, isFlash = false) {
            let priceHTML = `<span class="price">KSh ${service.price.toLocaleString()}</span>`;
            let badgeHTML = '';
            
            if(isFlash) {
                priceHTML = `<span class="old-price">KSh ${service.originalPrice.toLocaleString()}</span> <span class="price">KSh ${service.price.toLocaleString()}</span>`;
                badgeHTML = `<div class="discount-badge">-${service.discount}%</div>`;
            }

            return `
                <div class="card">
                    <div class="card-img">
                        ${badgeHTML}
                        <img src="${service.img}" alt="${service.name}" onerror="this.src='https://placehold.co/400x300/00563B/ffffff?text=${encodeURIComponent(service.name)}'">
                    </div>
                    <div class="card-body">
                        <h3>${service.name}</h3>
                        <p>${service.desc}</p>
                        <div class="rating">★★★★★ <span>(${service.rating})</span></div>
                        <div class="price-row">
                            <div>${priceHTML} ${service.unit ? `<small style="color:#999">${service.unit}</small>` : ''}</div>
                            <button class="btn-cart" onclick="addToCart(${service.id})">Add to Cart</button>
                        </div>
                    </div>
                </div>
            `;
        }

        function renderHome() {
            document.getElementById('flashSalesGrid').innerHTML = flashSaleData.map(s => createServiceCard(s, true)).join('');
            document.getElementById('popularGrid').innerHTML = servicesData.slice(0, 6).map(s => createServiceCard(s)).join('');
        }

        function renderServices(filter = 'All') {
            const filtered = filter === 'All' ? servicesData : servicesData.filter(s => s.cat === filter);
            document.getElementById('allServicesGrid').innerHTML = filtered.map(s => createServiceCard(s)).join('');
        }

        function filterServices(cat) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            renderServices(cat);
        }

    
        // CART LOGIC
        function addToCart(id) {
            const service = servicesData.find(s => s.id === id);
            const existing = cart.find(item => item.id === id);
            
            if(existing) {
                existing.qty += 1;
            } else {
                cart.push({ ...service, qty: 1 });
            }
            
            saveCart();
            updateCartBadge();
            
            // Visual feedback
            const badge = document.getElementById('cartBadge');
            badge.style.transform = 'scale(1.5)';
            setTimeout(() => badge.style.transform = 'scale(1)', 200);
        }

        function updateCartQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if(item) {
                item.qty += delta;
                if(item.qty <= 0) {
                    cart = cart.filter(i => i.id !== id);
                }
                saveCart();
                renderCart();
                updateCartBadge();
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(i => i.id !== id);
            saveCart();
            renderCart();
            updateCartBadge();
        }

        function saveCart() {
            localStorage.setItem('mokoa_cart', JSON.stringify(cart));
        }

        function updateCartBadge() {
            const count = cart.reduce((sum, item) => sum + item.qty, 0);
            document.getElementById('cartBadge').textContent = count;
        }

        function renderCart() {
            const container = document.getElementById('cartContainer');
            if(cart.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 4rem; margin-bottom: 20px;">🛒</div>
                        <h3>Your cart is empty</h3>
                        <p style="margin-bottom: 20px;">Looks like you haven't added any services yet.</p>
                        <button class="btn btn-primary" onclick="showPage('services')">Browse Services</button>
                    </div>
                `;
                return;
            }

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const delivery = 100;
            const total = subtotal + delivery;

            let itemsHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-img"><img src="${item.img}" alt="${item.name}"></div>
                    <div class="cart-item-info">
                        <h4>${item.name}</h4>
                        <div class="price">KSh ${item.price.toLocaleString()}</div>
                    </div>
                    <div class="qty-control">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                        <span class="qty-val">${item.qty}</span>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            `).join('');

            container.innerHTML = `
                <div class="cart-layout">
                    <div class="cart-items">
                        <h3 style="margin-bottom: 20px;">Cart Items (${cart.length})</h3>
                        ${itemsHTML}
                    </div>
                    <div class="summary-box">
                        <h3 style="margin-bottom: 20px;">Order Summary</h3>
                        <div class="summary-row"><span>Subtotal</span><span>KSh ${subtotal.toLocaleString()}</span></div>
                        <div class="summary-row"><span>Delivery Fee</span><span>KSh ${delivery}</span></div>
                        <div class="summary-row total"><span>Total</span><span>KSh ${total.toLocaleString()}</span></div>
                        
                        <form onsubmit="checkout(event)" style="margin-top: 20px;">
                            <h4 style="margin-bottom: 15px;">Checkout Details</h4>
                            <div class="input-group"><label>Full Name</label><input type="text" id="cName" required></div>
                            <div class="input-group"><label>Phone Number</label><input type="tel" id="cPhone" placeholder="07..." required></div>
                            <div class="input-group"><label>Location in Kutus</label><input type="text" id="cLocation" required></div>
                            <div class="input-group">
                                <label>Payment Method</label>
                                <select id="cPayment" required>
                                    <option value="M-Pesa">M-Pesa (Paybill)</option>
                                    <option value="Cash">Cash on Delivery</option>
                                </select>
                            </div>
                            <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Place Order (KSh ${total.toLocaleString()})</button>
                        </form>
                    </div>
                </div>
            `;
        }

        function checkout(e) {
            e.preventDefault();
            const name = document.getElementById('cName').value;
            const phone = document.getElementById('cPhone').value;
            const location = document.getElementById('cLocation').value;
            const payment = document.getElementById('cPayment').value;

            const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
            const total = subtotal + 100;

            const newOrder = {
                id: 'ORD-' + Math.floor(10000 + Math.random() * 90000),
                date: new Date().toLocaleDateString(),
                items: [...cart],
                total: total,
                customer: { name, phone, location, payment },
                status: 'Ordered', // Ordered, Confirmed, On The Way, Delivered
                rider: ['John M.', 'Sarah K.', 'Peter O.'][Math.floor(Math.random() * 3)],
                eta: Math.floor(20 + Math.random() * 40) + ' minutes'
            };

            orders.unshift(newOrder);
            localStorage.setItem('mokoa_orders', JSON.stringify(orders));
            
            // Clear cart
            cart = [];
            saveCart();
            updateCartBadge();

            alert('Order placed successfully! Check "Your Orders" to track delivery.');
            showPage('orders');
        }


        // ORDERS LOGIC
        function renderOrders() {
            const container = document.getElementById('ordersContainer');
            if(orders.length === 0) {
                container.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 4rem; margin-bottom: 20px;">📦</div>
                        <h3>You have no orders yet</h3>
                        <p style="margin-bottom: 20px;">Start shopping to see your orders here.</p>
                        <button class="btn btn-primary" onclick="showPage('services')">Browse Services</button>
                    </div>
                `;
                return;
            }

            container.innerHTML = orders.map(order => {
                const stages = ['Ordered', 'Confirmed', 'On The Way', 'Delivered'];
                const currentStageIndex = stages.indexOf(order.status);
                const progressPercent = (currentStageIndex / (stages.length - 1)) * 100;
                
                const statusClass = order.status.toLowerCase().replace(' ', '');

                let stepsHTML = stages.map((stage, i) => `
                    <div class="progress-step ${i <= currentStageIndex ? 'active' : ''}">
                        <div class="step-circle">${i <= currentStageIndex ? '✓' : i + 1}</div>
                        <div class="step-label">${stage}</div>
                    </div>
                `).join('');

                let itemsList = order.items.map(i => `${i.name} (x${i.qty})`).join(', ');

                return `
                    <div class="order-card">
                        <div class="order-header">
                            <div>
                                <div class="order-id">${order.id}</div>
                                <small style="color: var(--text-light);">Placed on ${order.date}</div>
                            </div>
                            <div class="order-status status-${statusClass}">${order.status}</div>
                        </div>
                        
                        <div class="progress-bar" style="--progress: ${progressPercent}%;">
                            ${stepsHTML}
                        </div>

                        <div class="order-details">
                            <div>
                                <p style="font-weight: 600; margin-bottom: 4px;">${itemsList}</p>
                                <p style="color: var(--primary); font-weight: 700; font-size: 1.1rem;">Total: KSh ${order.total.toLocaleString()}</p>
                                <p style="color: var(--text-light); font-size: 0.9rem; margin-top: 4px;">⏱️ Arriving in ${order.eta}</p>
                            </div>
                            <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 10px;">
                                <div class="rider-info">
                                    <div class="rider-avatar">${order.rider.charAt(0)}</div>
                                    <div>
                                        <div style="font-weight: 600;">${order.rider}</div>
                                        <small style="color: var(--text-light);">Your Rider</small>
                                    </div>
                                </div>
                                <div class="order-actions">
                                    <button class="btn btn-outline" style="padding: 8px 16px; font-size: 0.85rem;">📞 Call Rider</button>
                                    <button class="btn" style="padding: 8px 16px; font-size: 0.85rem; background: #ffebee; color: #d32f2f;" onclick="cancelOrder('${order.id}')">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function cancelOrder(orderId) {
            if(confirm('Are you sure you want to cancel this order?')) {
                orders = orders.filter(o => o.id !== orderId);
                localStorage.setItem('mokoa_orders', JSON.stringify(orders));
                renderOrders();
            }
        }

  
        // UTILITIES & INITIALIZATION
        function toggleFaq(el) {
            el.parentElement.classList.toggle('open');
        }

        function submitFeedback(e) {
            e.preventDefault();
            alert('Thank you for your feedback! We will get back to you soon.');
            e.target.reset();
        }

        // Flash Sale Countdown Timer
        let timeLeft = 3 * 3600 + 15 * 60 + 45; // 3 hours, 15 mins, 45 secs
        function updateCountdown() {
            if(timeLeft <= 0) return;
            timeLeft--;
            const h = Math.floor(timeLeft / 3600);
            const m = Math.floor((timeLeft % 3600) / 60);
            const s = timeLeft % 60;
            document.getElementById('hours').textContent = String(h).padStart(2, '0');
            document.getElementById('minutes').textContent = String(m).padStart(2, '0');
            document.getElementById('seconds').textContent = String(s).padStart(2, '0');
        }
        setInterval(updateCountdown, 1000);

        // Initialize App
        document.addEventListener('DOMContentLoaded', () => {
            renderHome();
            renderServices();
            updateCartBadge();
            updateCountdown();
        });