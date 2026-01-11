export const getFoodCategory = async (category) => {
    const baseUrl = import.meta.env.VITE_producto_search_service_API_URL || 'http://localhost:8083/api/search';
    try {
        if(!category || category === 'all'){
            const url = `${baseUrl}/find`;
            const resp = await fetch(url);
            if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
            const json = await resp.json();

            const products = json || [];

            const items = products.map(item => ({
                id: item.codigoProducto ?? item.id ?? Math.random().toString(36).substring(2, 15),
                name: item.nombreProducto ?? '',
                image: item.image_url ?? "/image.png",
                description: item.descripcionProducto ?? '',
                precioProducto: item.precioProducto ?? 0,
                stock: item.stock ?? '',
                tags: item.tags ?? [],
            }));
            console.log(items);
            return items;
        }

        const url = `${baseUrl}/find?tag=${category}`;
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
        const json = await resp.json();

        const products = json || [];

        const items = products.map(item => ({
            id: item.codigoProducto ?? item.id ?? Math.random().toString(36).substring(2, 15),
            name: item.nombreProducto ?? '',
            image: item.image_url ?? "/image.png",
            description: item.descripcionProducto ?? '',
            precioProducto: item.precioProducto ?? 0,
            stock: item.stock ?? '',
            tags: item.tags ?? [],
        }));
        console.log(items);
        return items;
    } catch (err) {
        console.error('getFoodCategory error:', err);
        return [];
    }
};