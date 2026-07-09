import { getProducts } from "./productService";
import { getUsers } from "./userService";

export async function loadDashboardStats() {
    const products = await getProducts();
    const users = await getUsers();
    const categories = new Set(

        products.data.content.map(
            p => p.category
        )

    );

    return {
        productCount: products.data.totalElements,
        userCount: users.data.length,
        categoryCount: categories.size
    };

}