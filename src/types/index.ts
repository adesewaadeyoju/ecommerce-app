export type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
}

export type CartItem = Product & {
    quantity: number;
}

// defines the data types because it's a Typescript project
// if there is a need to log in, you define the type here as well